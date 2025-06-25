import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const getServerDBConfig = () => {
  return createEnv({
    client: {
      NEXT_PUBLIC_ENABLED_SERVER_SERVICE: z.boolean(),
    },
    runtimeEnv: {
      DATABASE_DRIVER: process.env.DATABASE_DRIVER || 'neon',
      DATABASE_TEST_URL: process.env.DATABASE_TEST_URL,
      DATABASE_URL: process.env.DATABASE_URL,

      KEY_VAULTS_SECRET: process.env.KEY_VAULTS_SECRET,

      NEXT_PUBLIC_ENABLED_SERVER_SERVICE: process.env.NEXT_PUBLIC_SERVICE_MODE === 'server',

      REMOVE_GLOBAL_FILE: process.env.DISABLE_REMOVE_GLOBAL_FILE !== '0',
    },
    server: {
      DATABASE_DRIVER: z.enum(['neon', 'node']),
      DATABASE_TEST_URL: z.string().optional(),
      DATABASE_URL: z.string().optional(),

      KEY_VAULTS_SECRET: z.string().optional(),

      REMOVE_GLOBAL_FILE: z.boolean().optional(),
    },
  });
};

export const serverDBEnv = getServerDBConfig();
