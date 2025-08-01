import {
  SiBun,
  SiDocker,
  SiNodedotjs,
  SiNpm,
  SiPnpm,
  SiPython,
} from '@icons-pack/react-simple-icons';
import { AutoComplete, type AutoCompleteProps } from '@lobehub/ui';
import { FC, memo } from 'react';
import { Flexbox } from 'react-layout-kit';

// 定义预设的命令选项
const STDIO_COMMAND_OPTIONS: {
  // 假设图标是 React 函数组件
  color?: string;
  icon?: FC<{ color?: string; size?: number }>;
  value: string;
}[] = [
  { color: '#CB3837', icon: SiNpm, value: 'npx' },
  { color: '#CB3837', icon: SiNpm, value: 'npm' },
  { color: '#F69220', icon: SiPnpm, value: 'pnpm' },
  { color: '#F69220', icon: SiPnpm, value: 'pnpx' },
  { color: '#339933', icon: SiNodedotjs, value: 'node' },
  { color: '#efe2d2', icon: SiBun, value: 'bun' },
  { color: '#efe2d2', icon: SiBun, value: 'bunx' },
  { color: '#DE5FE9', icon: SiPython, value: 'uv' },
  { color: '#3776AB', icon: SiPython, value: 'python' },
  { color: '#2496ED', icon: SiDocker, value: 'docker' },
];

const MCPStdioCommandInput = memo<AutoCompleteProps>((props) => (
  <AutoComplete
    options={STDIO_COMMAND_OPTIONS.map(({ value, icon: Icon, color }) => ({
      label: (
        <Flexbox align={'center'} gap={8} horizontal>
          {Icon && <Icon color={color} size={16} />}
          {value}
        </Flexbox>
      ),
      value: value,
    }))}
    {...props}
  />
));

export default MCPStdioCommandInput;
