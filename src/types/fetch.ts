/* eslint-disable sort-keys-fix/sort-keys-fix */
import { ILobeAgentRuntimeErrorType } from '@/libs/model-runtime';

export const ChatErrorType = {
  // ******* 业务错误语义 ******* //

  InvalidAccessCode: 'InvalidAccessCode', // is in valid password
  InvalidClerkUser: 'InvalidClerkUser', // is not Clerk User
  FreePlanLimit: 'FreePlanLimit', // is not Clerk User
  SubscriptionPlanLimit: 'SubscriptionPlanLimit', // 订阅用户超限
  SubscriptionKeyMismatch: 'SubscriptionKeyMismatch', // 订阅 key 不匹配

  InvalidUserKey: 'InvalidUserKey', // is not valid User key
  CreateMessageError: 'CreateMessageError',
  /**
   * @deprecated
   */
  NoOpenAIAPIKey: 'NoOpenAIAPIKey',
  OllamaServiceUnavailable: 'OllamaServiceUnavailable', // 未启动/检测到 Ollama 服务
  PluginFailToTransformArguments: 'PluginFailToTransformArguments',
  UnknownChatFetchError: 'UnknownChatFetchError',
  SystemTimeNotMatchError: 'SystemTimeNotMatchError',

  // ******* 客户端错误 ******* //
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  ContentNotFound: 404, // 没找到接口
  MethodNotAllowed: 405, // 不支持
  TooManyRequests: 429,

  // ******* 服务端错误 ******* //InvalidPluginArgumentsTransform
  InternalServerError: 500,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
} as const;
/* eslint-enable */

export type ErrorType = (typeof ChatErrorType)[keyof typeof ChatErrorType];

export interface ErrorResponse {
  body: any;
  errorType: ErrorType | ILobeAgentRuntimeErrorType;
}
