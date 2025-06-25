import { and, desc, eq } from 'drizzle-orm/expressions';

import { LobeChatDatabase } from '@/database/type';
import { idGenerator } from '@/database/utils/idGenerator';
import { Paintings } from '@/types/painting';

import { NewPainting, PaintingItem, paintings } from '../schemas';

export class PaintingModel {
  private userId: string;
  private db: LobeChatDatabase;

  constructor(db: LobeChatDatabase, userId: string) {
    this.userId = userId;
    this.db = db;
  }

  async query({ current = 1, pageSize = 9999 } = {}): Promise<Paintings> {
    const offset = (current - 1) * pageSize;

    const datas = await this.db.query.paintings.findMany({
      limit: pageSize,
      offset,
      orderBy: [desc(paintings.createdAt)],
      where: eq(paintings.userId, this.userId),
    });

    return datas as unknown as Paintings;
  }

  async create(painting: NewPainting): Promise<PaintingItem> {
    const [result] = await this.db
      .insert(paintings)
      .values({
        ...painting,
        createdAt: new Date(),
        id: idGenerator('paintings'),
        updatedAt: new Date(),
        userId: this.userId,
      })
      .returning();

    return result;
  }

  async delete(id: string) {
    return this.db
      .delete(paintings)
      .where(and(eq(paintings.id, id), eq(paintings.userId, this.userId)));
  }

  async findById(id: string) {
    return this.db.query.paintings.findFirst({
      where: and(eq(paintings.id, id), eq(paintings.userId, this.userId)),
    });
  }

  async update(id: string, value: Partial<PaintingItem>) {
    return this.db
      .update(paintings)
      .set({ ...value, updatedAt: new Date() })
      .where(eq(paintings.id, id));
  }
}
