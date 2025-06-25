import { BaseModel } from '@/database/_deprecated/core';
import {
  DB_SessionGroup,
  DB_SessionGroupSchema,
} from '@/database/_deprecated/schemas/sessionGroup';
import { SessionGroups } from '@/types/session';
import { nanoid } from '@/utils/uuid';

class _SessionGroupModel extends BaseModel {
  constructor() {
    super('sessionGroups', DB_SessionGroupSchema);
  }

  // **************** Query *************** //

  async query(): Promise<SessionGroups> {
    const allGroups = await this.table.toArray();

    // 自定义排序，先按 sort 存在与否分组，然后分别排序
    return allGroups.sort((a, b) => {
      // 如果两个项都有 sort，则按 sort 排序
      if (a.sort !== undefined && b.sort !== undefined) {
        // 如果sort 一样，按时间倒序排序
        if (a.sort === b.sort) return b.createdAt - a.createdAt;

        return a.sort - b.sort;
      }
      // 如果 a 有 sort 而 b 没有，则 a 排在前面
      if (a.sort !== undefined) {
        return -1;
      }
      // 如果 b 有 sort 而 a 没有，则 b 排在前面
      if (b.sort !== undefined) {
        return 1;
      }
      // 如果两个项都没有 sort，则按 createdAt 倒序排序
      return b.createdAt - a.createdAt;
    });
  }

  async findById(id: string): Promise<DB_SessionGroup> {
    return this.table.get(id);
  }

  // **************** Create *************** //

  async create(name: string, sort?: number, id = nanoid()) {
    return this._addWithSync({ name, sort }, id);
  }

  async batchCreate(groups: SessionGroups) {
    return this._batchAdd(groups, { idGenerator: nanoid });
  }

  // **************** Delete *************** //
  async delete(id: string, removeGroupItem: boolean = false) {
    const { SessionModel } = await import('./session');
    this.db.sessions.toCollection().modify(async (session) => {
      //  update all session associated with the sessionGroup to default
      if (session.group === id) {
        await SessionModel.update(session.id, { group: 'default' });
      }
    });

    if (!removeGroupItem) {
      return this._deleteWithSync(id);
    } else {
      const sessionIds = await this.db.sessions.where('group').equals(id).primaryKeys();

      return await SessionModel.batchDelete(sessionIds);
    }
  }

  async clear() {
    await this._clearWithSync();
  }

  // **************** Update *************** //

  async update(id: string, data: Partial<DB_SessionGroup>) {
    return super._updateWithSync(id, data);
  }

  async updateOrder(sortMap: { id: string; sort: number }[]) {
    return this.db.transaction('rw', this.table, async () => {
      for (const { id, sort } of sortMap) {
        await this.update(id, { sort });
      }
    });
  }
}

export const SessionGroupModel = new _SessionGroupModel();
