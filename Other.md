- **增加绘图面板**，更全面的参数配置，更好看的界面，midjourney、Kling、dall-e-3、gpt-image-1、Flux。
  - **支持 midjourney-proxy**

  - **支持 midjourney-proxy-plus**，目前已支持大部分功能：
    - Imagine（文生图）
    - Imagine（图生图）
    - Blend（图片混合）
    - Describe（图生文）
    - InsightFace（AI 换脸）
    - 焦点移动: Pan ⬅️ ➡️ ⬆️ ⬇️
    - 图片变焦: Zoom 🔍
    - 局部重绘: Vary (Region) 🖌
    - sref（风格一致性）
    - cref（角色一致性）
    - 支持 V7 模型

  - mj 参数：
    - MIDJOURNEY_PROXY_URL：接口地址，支持 /mj,/mj-fast,/mj-turbo,/mj-relax 结尾的接口地址，如果都没填，则默认会自动拼上 /mj 结尾。
    - MIDJOURNEY_API_KEY：接口密钥，支持 Authorization Bearer 或者 mj-api-secret
    - 也可以在用户端应用设置 -》语言模型里设置 midjourney 接口地址和密钥。

  - **支持 OpenAI 画图模型**
    - 填 openai 的接口和 key。
    - 支持 Dall-E-3 模型。
    - **_支持 gpt-image-1 和 gpt-image-1.5 模型，支持对任意图片进行局部重绘，包括生成的以及自己上传的图片_**。

  - **支持 Flux 模型画图**
    - 切换到 Dall-E 页签，模型选择 flux 模型，目前支持的是走 Dall-E-3 的接口格式，填 openai 的接口和 key。

  - **增加支持 Kling (快手可灵) 图片生成与 AI 试衣**
    - KLING_PROXY_URL：接口地址，中转接口地址可能需要加上 /kling，比如：<https://ai.aiiai.top/kling/v1>, 也支持快手官方接口：<https://api.klingai.com/v1>
    - KLING_API_KEY：接口密钥，支持快手官方密钥，填写格式：${AccessKey}@${SecretKey}, 比如 abcxvsdfs\@sefsefsege
    - 也可以在用户端应用设置 -》语言模型里设置 Kling 接口地址和密钥，写法同上。

  - **增加支持 Volcengine (doubao-seedream-4.5) 图片生成**
    - VOLCENGINE_API_KEY: 接口秘钥，

  - 图片本地存储，如果配了 s3 存储，则优先存到 s3，具体 s3 配置请看 lobe-chat。

- **增加 suno 支持**：
  - 实现灵感模式或定制模式。
  - 支持音乐和视频播放。
  - 支持续写。
  - 支持下载音乐和视频。
  - suno 参数：
    - SUNO_PROXY_URL：接口地址，api 参考[suno-api](https://gpt-best.apifox.cn/api-290942843)，然后中转接口地址可能需要加上 /suno，比如：<https://ai.aiiai.top/suno>
    - SUNO_API_KEY：接口密钥
    - 也可以在用户端应用设置 -》语言模型里设置 suno 接口地址和密钥。

- **增加支持 luma 视频生成**
  - 支持扩展视频和下载视频。
  - luma 参数：
    - LUMA_PROXY_URL：接口地址，中转接口地址可能需要加上 /luma，比如：<https://ai.aiiai.top/luma>
    - LUMA_API_KEY：接口密钥
    - 也可以在用户端应用设置 -》语言模型里设置 luma 接口地址和密钥。

- **增加支持 runway 视频生成**
  - 支持扩展视频和下载视频。
  - runway 参数：
    - RUNWAY_PROXY_URL：接口地址，api 参考[runway-api](https://gpt-best.apifox.cn/api-234029137)，需要拼上 /v1，中转接口地址可能需要加上 /runwayml/v1，比如：<https://ai.aiiai.top/runwayml/v1>
    - RUNWAY_API_KEY：接口密钥
    - 也可以在用户端应用设置 -》语言模型里设置 runway 接口地址和密钥。

- **增加支持 Kling (快手可灵) 视频生成**
  - 支持文生视频，
  - 支持图生视频，
  - 支持多图视频，
  - 支持特效视频
  - 支持延长视频
  - 支持下载视频。
  - kling 参数：
    - KLING_PROXY_URL：接口地址，中转接口地址可能需要加上 /kling，比如：<https://ai.aiiai.top/kling/v1>, 也支持快手官方接口：<https://api.klingai.com/v1>
    - KLING_API_KEY：接口密钥，支持快手官方密钥，填写格式：${AccessKey}@${SecretKey}, 比如 abcxvsdfs\@sefsefsege
    - 也可以在用户端应用设置 -》语言模型里设置 Kling 接口地址和密钥，写法同上。

- **增加支持 Veo3 (Google) 视频生成**

-

- **增加支持 Sora2 (Openai) 视频生成**

- **支持后台管理**
  - 用户登录注册
  - 用户管理，支持用户分组，不同分组设置不同倍率
  - 个人信息管理
  - 微信支付、易支付、虎皮椒支付、stripe 支付
  - 充值、兑换、消费、退款，消费失败不扣费
  - 注册赠送额度，在系统管理 - 参数管理里配置赠送额度，1 元 = 500000token
  - 订单管理
  - 消费记录查询
  - 平台、模型和价格管理，可以按 token 或者按次数设置模型价格
  - 用户只要充值即可使用所有模型
  - 聊天记录、画图记录、音乐记录、视频记录管理。
  - 通知公告

- **对接 fastgpt 和 dify 知识库**，dify 需要安装一个插件：OpenAI Compatible Dify App，把应用的接口转成 openai 适配接口：
  - 1\. 先在平台管理里建一个平台，平台名称随意，接口格式选择 openai，接口地址那边填 fastgpt 的根地址，dify 可以不用填。
  - 2\. 然后在模型管理里建模型，模型名称对应 fastgpt 或 diyf 的端点名称里建的知识库应用名称，dify 需要填写 path，dify 插件提供的地址类似: <https://x4iq144hgqsox49d.ai-plugin.io/chat/completions>, path 填: /chat/completions
  - 3\. 接着在 apikey 新增 fastgpt 对应的知识库的 apikey，或 dify 端点里填的 apikey，并选择适用模型为第 2 步建的模型，dify 还需要填写接口地址，类似: <https://x4iq144hgqsox49d.ai-plugin.io>
  - 4\. 用户端就可以用第 2 步建的模型，跟知识库对话了。

- **完美适配移动端**
  - 1\. 支持手机端浏览器。
  - 2\. 支持公众号一键登录，充值时支持在公众号环境里直接拉起微信支付。

- **支持邀请注册充值分成**
  - 1\. 可以设置邀请注册的用户，首次、二次、三次、往后每次充值，邀请人可以享受的充值分成。在后台系统设置 - 参数管理里可以设置。

- **其它**
  - 1\. 重做了局部重绘组件，支持选择颜色，支持选择画笔和画笔大小，支持矩形，支持套索等。
  - 2\. 支持修改应用名称和 LOGO。
  - 3\. 支持用户把创作的图片、音乐、视频发布到公共空间，在发现页可以查看所有人分享的作品。
