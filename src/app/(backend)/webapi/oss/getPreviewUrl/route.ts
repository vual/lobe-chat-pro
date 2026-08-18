import { ChatCompletionErrorPayload } from '@lobechat/model-runtime';

import { checkAuth } from '@/app/(backend)/middleware/auth';
import { S3 } from '@/server/modules/S3';
import { ChatErrorType } from '@/types/fetch';
import { createErrorResponse } from '@/utils/errorResponse';

export const runtime = 'nodejs';

export const POST = checkAuth(async (req: Request) => {
  try {
    const keyPathList = (await req.json()) as string[];
    const s3 = new S3();
    const previewUrlMap = Object.fromEntries(
      await Promise.all(
        keyPathList.map(async (keyPath) => [
          keyPath,
          await s3.createPreSignedUrlForPreview(keyPath),
        ]),
      ),
    );

    return Response.json(previewUrlMap);
  } catch (e) {
    const {
      errorType = ChatErrorType.InternalServerError,
      error: errorContent,
      ...res
    } = e as ChatCompletionErrorPayload;

    const error = errorContent || e;
    console.error(`Route: [oss/getPreviewUrl] ${errorType}:`, error);

    return createErrorResponse(errorType, { error, ...res });
  }
});