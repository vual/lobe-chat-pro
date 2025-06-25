// @vitest-environment node
import { ModelProvider } from '@/libs/model-runtime';
import { testProvider } from '@/libs/model-runtime/providerTestUtils';

import { LobeSparkAI } from './index';

const provider = ModelProvider.Spark;
const defaultBaseURL = 'https://spark-api-open.xf-yun.com/v1';

testProvider({
  Runtime: LobeSparkAI,
  provider,
  defaultBaseURL,
  chatDebugEnv: 'DEBUG_SPARK_CHAT_COMPLETION',
  chatModel: 'spark',
  test: {
    skipAPICall: true,
  },
});
