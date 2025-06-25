import { InputNumber } from '@lobehub/ui';
import { Slider } from 'antd';
import { memo, useMemo } from 'react';
import { Flexbox } from 'react-layout-kit';
import useMergeState from 'use-merge-value';

// 定义特殊值映射
const SPECIAL_VALUES = {
  AUTO: -1,
  OFF: 0,
};

// 定义滑块位置到实际值的映射
const SLIDER_TO_VALUE_MAP = [
  SPECIAL_VALUES.AUTO, // 位置 0 -> -1 (Auto)
  SPECIAL_VALUES.OFF, // 位置 1 -> 0 (OFF)
  128, // 位置 2 -> 128
  512, // 位置 3 -> 512
  1024, // 位置 4 -> 1024
  2048, // 位置 5 -> 2048
  4096, // 位置 6 -> 4096
  8192, // 位置 7 -> 8192
  16_384, // 位置 8 -> 16384
  24_576, // 位置 9 -> 24576
  32_768, // 位置 10 -> 32768
];

// 从实际值获取滑块位置
const getSliderPosition = (value: number): number => {
  const index = SLIDER_TO_VALUE_MAP.indexOf(value);
  return index === -1 ? 0 : index;
};

// 从滑块位置获取实际值（修复：0 不再被当作 falsy）
const getValueFromPosition = (position: number): number => {
  const v = SLIDER_TO_VALUE_MAP[position];
  return v === undefined ? SPECIAL_VALUES.AUTO : v;
};

interface ThinkingBudgetSliderProps {
  defaultValue?: number;
  onChange?: (value: number) => void;
  value?: number;
}

const ThinkingBudgetSlider = memo<ThinkingBudgetSliderProps>(
  ({ value, onChange, defaultValue }) => {
    // 首先确定初始的 budget 值
    const initialBudget = value ?? defaultValue ?? SPECIAL_VALUES.AUTO;

    const [budget, setBudget] = useMergeState(initialBudget, {
      defaultValue,
      onChange,
      value,
    });

    const sliderPosition = getSliderPosition(budget);

    const updateWithSliderPosition = (position: number) => {
      const newValue = getValueFromPosition(position);
      setBudget(newValue);
    };

    const updateWithRealValue = (value: number) => {
      setBudget(value);
    };

    const marks = useMemo(() => {
      return {
        0: 'Auto',
        1: 'OFF',
        2: '128',
        3: '512',
        4: '1K',
        5: '2K',
        6: '4K',
        7: '8K',
        8: '16K',
        9: '24K',
        // eslint-disable-next-line sort-keys-fix/sort-keys-fix
        10: '32K',
      };
    }, []);

    return (
      <Flexbox align={'center'} gap={12} horizontal paddingInline={'4px 0'}>
        <Flexbox flex={1}>
          <Slider
            marks={marks}
            max={10}
            min={0}
            onChange={updateWithSliderPosition}
            step={null}
            tooltip={{ open: false }}
            value={sliderPosition}
          />
        </Flexbox>
        <div>
          <InputNumber
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            formatter={(value, _info) => {
              if (value === SPECIAL_VALUES.AUTO) return 'Auto';
              if (value === SPECIAL_VALUES.OFF) return 'OFF';
              return `${value}`;
            }}
            max={32_768}
            min={-1}
            onChange={(e) => {
              if (e === null || e === undefined) return;
              updateWithRealValue(e as number);
            }}
            parser={(value) => {
              if (typeof value === 'string') {
                if (value.toLowerCase() === 'auto') return SPECIAL_VALUES.AUTO;
                if (value.toLowerCase() === 'off') return SPECIAL_VALUES.OFF;
                return parseInt(value.replaceAll(/[^\d-]/g, ''), 10) || 0;
              }
              if (typeof value === 'number') {
                return value;
              }
              return SPECIAL_VALUES.AUTO;
            }}
            step={128}
            style={{ width: 80 }}
            value={budget}
          />
        </div>
      </Flexbox>
    );
  },
);

export default ThinkingBudgetSlider;
