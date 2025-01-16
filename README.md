# lobe-chat-pro

### 欢迎了解另一个项目[ChatGPT-Next-Web-Pro](https://github.com/vual/ChatGPT-Next-Web-Pro)
  基于ChatGPT-Next-Web，扩展了更多实用功能。

### 推荐中转接口，[ai.aiiai.top](https://ai.aiiai.top)，免去繁杂配置，获取key就可以用。
  
### 版本介绍
  - 版本号：latest
  - 更新时间： 2025.01.16
  - 演示站点：https://lobe.annyun.cn ，需要自备key，或从上面的中转接口里获取。

### 项目介绍
- 基于[lobe-chat](https://github.com/lobehub/lobe-chat)，并定期同步原版代码，最近同步时间： 2025.01.16
- **增加绘图面板**，更全面的参数配置，更好看的界面, midjourney、dall-e-3、Flux、stable-diffusion(待实现)。
  - **支持midjourney-proxy**
  - **支持midjourney-proxy-plus**，目前已支持大部分功能：
    - Imagine（文生图）
    - Imagine（图生图）
    - Blend（图片混合）
    - Describe（图生文）
    - InsightFace（AI换脸）
    - 焦点移动: Pan ⬅️ ➡️ ⬆️ ⬇️
    - 图片变焦: Zoom 🔍
    - 局部重绘: Vary (Region) 🖌
    - sref（风格一致性）
    - cref（角色一致性）
  - mj参数：
    - MIDJOURNEY_PROXY_URL：接口地址，支持/mj,/mj-fast,/mj-turbo,/mj-relax结尾的接口地址，如果都没填，则默认会自动拼上/mj结尾。
    - MIDJOURNEY_API_KEY：接口密钥，支持Authorization Bearer或者mj-api-secret
    - 也可以在用户端应用设置-》语言模型里设置midjourney接口地址和密钥。

  - **支持Dall-E-3画图**
    - 填openai的接口和key。
    
  - **支持Flux模型画图**
    - 切换到Dall-E页签，模型选择flux模型，目前支持的是走Dall-E-3的接口格式，填openai的接口和key。

  **增加支持Kling(快手可灵)图片生成与AI试衣**
  - kling参数：
    - KLING_PROXY_URL：接口地址，中转接口地址可能需要加上 /kling，比如：https://ai.aiiai.top/kling/v1, 也支持快手官方接口：https://api.klingai.com/v1
    - KLING_API_KEY：接口密钥，支持快手官方密钥，填写格式：${AccessKey}@${SecretKey}, 比如 abcxvsdfs@sefsefsege
    - 也可以在用户端应用设置-》语言模型里设置Kling接口地址和密钥，写法同上。

  - 图片本地存储，如果配了s3存储，则优先存到s3，具体s3配置请看lobe-chat。

- **增加suno支持**：
  - 实现灵感模式或定制模式。
  - 支持音乐和视频播放。
  - 支持续写。
  - 支持下载音乐和视频。
  - suno参数：
    - SUNO_PROXY_URL：接口地址，首先api必须兼容[Suno-API](https://github.com/SunoAI-API/Suno-API)，然后中转接口地址可能需要加上 /suno，比如：https://ai.aiiai.top/suno
    - SUNO_API_KEY：接口密钥
    - 也可以在用户端应用设置-》语言模型里设置suno接口地址和密钥。

- **增加支持luma视频生成**
  - 支持扩展视频和下载视频。
  - luma参数：
    - LUMA_PROXY_URL：接口地址，中转接口地址可能需要加上 /luma，比如：https://ai.aiiai.top/luma
    - LUMA_API_KEY：接口密钥
    - 也可以在用户端应用设置-》语言模型里设置luma接口地址和密钥。

- **增加支持runway视频生成**
  - 支持扩展视频和下载视频。
  - runway参数：
    - RUNWAY_PROXY_URL：接口地址，支持官方api接口，需要拼上 /v1，中转接口地址可能需要加上 /runwayml/v1，比如：https://ai.aiiai.top/runwayml/v1
    - RUNWAY_API_KEY：接口密钥
    - 也可以在用户端应用设置-》语言模型里设置runway接口地址和密钥。

- **增加支持Kling(快手可灵)视频生成**
  - 支持下载视频。
  - kling参数：
    - KLING_PROXY_URL：接口地址，中转接口地址可能需要加上 /kling，比如：https://ai.aiiai.top/kling/v1, 也支持快手官方接口：https://api.klingai.com/v1
    - KLING_API_KEY：接口密钥，支持快手官方密钥，填写格式：${AccessKey}@${SecretKey}, 比如 abcxvsdfs@sefsefsege
    - 也可以在用户端应用设置-》语言模型里设置Kling接口地址和密钥，写法同上。

- **支持登录注册**
  - 用户登录注册
  - 账户管理
  - 个人信息查看更新
  - 充值、兑换和消费记录查询
  - 模型和价格

### 开发计划
- 1.【开发ing】后台管理（包含用户登录注册、充值扣费、聊天记录管理）。
- 2.【计划】ideogram、viggle。

### 启动应用
```shell
docker run -d -p 3210:3210  registry.cn-hangzhou.aliyuncs.com/ann-chat/lobe-chat-pro:latest
```
启动后，访问：http://{启动机器的ip}:3210

### 截图
![img1](/images/img1.png)
![img2](/images/img2.png)
![img3](/images/img3.png)
![img4](/images/img4.png)
![img5](/images/img5.png)
![img6](/images/img6.png)
![img7](/images/img7.jpg)
![img8](/images/img8.jpg)
![img9](/images/img9.jpg)
![img10](/images/img10.png)

### 交流
- 微信：822784588
- 添加微信进群
