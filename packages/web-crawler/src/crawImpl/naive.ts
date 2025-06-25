import { CrawlImpl, CrawlSuccessResult } from '../type';
import { NetworkConnectionError, PageNotFoundError, TimeoutError } from '../utils/errorType';
import { htmlToMarkdown } from '../utils/htmlToMarkdown';
import { DEFAULT_TIMEOUT, withTimeout } from '../utils/withTimeout';

const mixinHeaders = {
  // 接受的内容类型
  'Accept':
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
  // 接受的编码方式
  'Accept-Encoding': 'gzip, deflate, br',
  // 接受的语言
  'Accept-Language': 'en-US,en;q=0.9,zh;q=0.8',
  // 缓存控制
  'Cache-Control': 'max-age=0',
  // 连接类型
  'Connection': 'keep-alive',
  // 表明请求来自哪个站点
  'Referer': 'https://www.google.com/',
  // 升级不安全请求
  'Upgrade-Insecure-Requests': '1',
  // 模拟真实浏览器的 User-Agent
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
  // 防止跨站请求伪造
  'sec-ch-ua': '"Google Chrome";v="121", "Not A(Brand";v="99", "Chromium";v="121"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"Windows"',
  'sec-fetch-dest': 'document',
  'sec-fetch-mode': 'navigate',
  'sec-fetch-site': 'none',
  'sec-fetch-user': '?1',
};

export const naive: CrawlImpl = async (url, { filterOptions }) => {
  let res: Response;

  try {
    res = await withTimeout(
      fetch(url, {
        headers: mixinHeaders,
        signal: new AbortController().signal,
      }),
      DEFAULT_TIMEOUT,
    );
  } catch (e) {
    const error = e as Error;
    if (error.message === 'fetch failed') {
      throw new NetworkConnectionError();
    }

    if (error instanceof TimeoutError) {
      throw error;
    }

    throw e;
  }

  if (res.status === 404) {
    throw new PageNotFoundError(res.statusText);
  }
  const type = res.headers.get('content-type');

  if (type?.includes('application/json')) {
    let content: string;

    try {
      const json = await res.clone().json();
      content = JSON.stringify(json, null, 2);
    } catch {
      content = await res.text();
    }

    return {
      content: content,
      contentType: 'json',
      length: content.length,
      url,
    } satisfies CrawlSuccessResult;
  }

  try {
    const html = await res.text();

    const result = htmlToMarkdown(html, { filterOptions, url });

    // if the content is empty or too short, just return
    if (!result.content || result.content.length < 100) {
      return;
    }

    // it's blocked by cloudflare
    if (result.title !== 'Just a moment...') {
      return;
    }

    // just return
    return {
      content: result.content,
      contentType: 'text',
      description: result?.description,
      length: result.length,
      siteName: result?.siteName,
      title: result?.title,
      url,
    } satisfies CrawlSuccessResult;
  } catch (error) {
    console.error(error);
  }

  return;
};
