# lobe-chat-pro

### 欢迎了解另一个项目[ChatGPT-Next-Web-Pro](https://github.com/vual/ChatGPT-Next-Web-Pro)
  基于ChatGPT-Next-Web，扩展了更多实用功能。

### 基于new-api的开源项目[aiiai-api](https://github.com/vual/aiiai-api)
### 推荐中转接口，[api.annyun.cn](https://api.annyun.cn/)，免去繁杂配置，获取key就可以用。
  
### 版本介绍
  - 版本号：latest
  - 更新时间： 2025.05.16
  - 演示站点：https://lobe.annyun.cn ，手机端可以关注公众号：AnnYun_AI(或扫下方二维码)，一键登录即可体验。充值入口：我的-》账户管理-》充值消费。
  - 管理端：https://lobea.annyun.cn,  演示账号：annyun  密码：123456

![gongzhonghao](/images/gongzhonghao.jpg)

### 项目介绍
- 基于[lobe-chat](https://github.com/lobehub/lobe-chat)，并定期同步原版代码，最近同步时间： 2025.05.16
- **增加绘图面板**，更全面的参数配置，更好看的界面, midjourney、Kling、dall-e-3、gpt-image-1、Flux、stable-diffusion(待实现)。
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
    - 支持V7模型
  - mj参数：
    - MIDJOURNEY_PROXY_URL：接口地址，支持/mj,/mj-fast,/mj-turbo,/mj-relax结尾的接口地址，如果都没填，则默认会自动拼上/mj结尾。
    - MIDJOURNEY_API_KEY：接口密钥，支持Authorization Bearer或者mj-api-secret
    - 也可以在用户端应用设置-》语言模型里设置midjourney接口地址和密钥。

  - **支持OpenAI画图模型**
    - 填openai的接口和key。
    - 支持Dall-E-3模型。
    - ***支持gpt-image-1模型，支持对任意图片进行局部重绘，包括生成的以及自己上传的图片***。
    
  - **支持Flux模型画图**
    - 切换到Dall-E页签，模型选择flux模型，目前支持的是走Dall-E-3的接口格式，填openai的接口和key。

  - **增加支持Kling(快手可灵)图片生成与AI试衣**
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
  - 支持文生视频，
  - 支持图生视频，
  - 支持特效视频
  - 支持延长视频
  - 支持下载视频。
  - kling参数：
    - KLING_PROXY_URL：接口地址，中转接口地址可能需要加上 /kling，比如：https://ai.aiiai.top/kling/v1, 也支持快手官方接口：https://api.klingai.com/v1
    - KLING_API_KEY：接口密钥，支持快手官方密钥，填写格式：${AccessKey}@${SecretKey}, 比如 abcxvsdfs@sefsefsege
    - 也可以在用户端应用设置-》语言模型里设置Kling接口地址和密钥，写法同上。

- **支持后台管理**
  - 用户登录注册
  - 用户管理，支持用户分组，不同分组设置不同倍率
  - 个人信息管理
  - 微信支付、易支付、虎皮椒支付
  - 充值、兑换、消费，消费失败不扣费
  - 订单管理
  - 消费记录查询
  - 平台、模型和价格管理，可以按token或者按次数设置模型价格
  - 用户只要充值即可使用所有模型
  - 聊天记录、画图记录、音乐记录、视频记录管理。
  - 通知公告

- **对接fastgpt和dify知识库**，dify需要安装一个插件：OpenAI Compatible Dify App，把应用的接口转成openai适配接口：
  - 1.先在平台管理里建一个平台，平台名称随意，接口格式选择openai，接口地址那边填fastgpt的根地址，dify可以不用填。
  - 2.然后在模型管理里建模型，模型名称对应fastgpt或diyf的端点名称里建的知识库应用名称，dify需要填写path，dify插件提供的地址类似: https://x4iq144hgqsox49d.ai-plugin.io/chat/completions, path填: /chat/completions
  - 3.接着在apikey新增fastgpt对应的知识库的apikey，或dify端点里填的apikey，并选择适用模型为第2步建的模型, dify还需要填写接口地址，类似: https://x4iq144hgqsox49d.ai-plugin.io
  - 4.用户端就可以用第2步建的模型，跟知识库对话了。

- **完美适配移动端**
  - 1.支持手机端浏览器。
  - 2.支持公众号一键登录，充值时支持在公众号环境里直接拉起微信支付。

- **其它**
  - 1.重做了局部重绘组件，支持选择颜色，支持选择画笔和画笔大小，支持矩形，支持套索等。


### 开发计划
- 1.【计划】发现页展示用户创作的图片、音乐、视频。
- 2.【计划】增加数字人视频合成。

### 纯前端启动应用（浏览器端默认使用pglite数据库）
```shell
docker run -d -p 3210:3210  registry.cn-hangzhou.aliyuncs.com/ann-chat/lobe-chat-pro:latest
```
启动后，访问：http://{启动机器的ip}:3210

如果需要导出以前localstore里的数据，[参考方案](https://github.com/lobehub/lobe-chat/issues/5131)

### 带后台管理版启动（服务端数据库版）
- 详细部署方式：
  - [部署服务](./docs/database-deploy.md)
  - [微信公众号和支付](./docs/微信公众号和支付.md)
  - [Nginx](./docs/nginx.md)

启动后，
- 用户端：http://{启动机器的ip}:3210，
- 管理端：http://{启动机器的ip}:8888， 账号：admin，密码：123456

### 配置域名转发
- 端口3210，用户端
- 端口8888，管理端
- 端口9000，minio

### 其它
- 如果使用minio，则启动后，需要登录进去手动创建bucket，bucket名字为annyun-lobe，如果你改了bucket名称，则改成实际的。

### 截图
![img1](/images/img1.png)
![img2](/images/img2.png)
![img3](/images/img3.png)
![img4](/images/img4.png)
![img5](/images/img5.png)
![img6](/images/img6.png)
![img7](/images/img7.jpg)
![img8](/images/img8.png)
![img9](/images/img9.png)
![img10](/images/img10.png)
![img11](/images/img11.png)
![img12](/images/img12.png)
![img13](/images/img13.png)
![img14](/images/img14.png)
![img15](/images/img15.png)
![img16](/images/img16.png)
![img17](/images/img17.png)
![img18](/images/img18.png)
![img19](/images/img19.png)
![img20](/images/img20.png)
![img21](/images/img21.png)
![img22](/images/img22.png)
![img23](/images/img23.png)
![img24](/images/img24.png)
![img25](/images/img25.png)
![img26](/images/img26.png)
![img27](/images/img27.png)

### 交流
- 微信：822784588
- 添加微信进群
