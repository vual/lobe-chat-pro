# lobe-chat-pro

### 欢迎了解另一个项目[ChatGPT-Next-Web-Pro](https://github.com/vual/ChatGPT-Next-Web-Pro)
  基于ChatGPT-Next-Web，扩展了更多实用功能。

### 基于new-api的开源项目[aiiai-api](https://github.com/vual/aiiai-api)
### 推荐中转接口，[api.annyun.cn](https://api.annyun.cn/)，免去繁杂配置，获取key就可以用。
  
### 版本介绍
  - 版本号：latest
  - 更新时间： 2025.03.30
  - 演示站点：https://lobe.annyun.cn ，需要自备key，或从上面的中转接口里获取。

### 项目介绍
- 基于[lobe-chat](https://github.com/lobehub/lobe-chat)，并定期同步原版代码，最近同步时间： 2025.03.27
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
  - 模型和价格管理
  - 微信支付、易支付、虎皮椒支付
  - 聊天记录、画图记录、音乐记录、视频记录管理。
  - 通知公告

### 开发计划
- 1.【计划】数字人。
- 1.【计划】发现页展示用户创作的图片、音乐、视频。

### 纯前端启动应用（浏览器端默认使用pglite数据库）
```shell
docker run -d -p 3210:3210  registry.cn-hangzhou.aliyuncs.com/ann-chat/lobe-chat-pro:latest
```
启动后，访问：http://{启动机器的ip}:3210

如果需要导出以前localstore里的数据，[参考方案](https://github.com/lobehub/lobe-chat/issues/5131)

### 带后台管理版启动（服务端数据库版）
1. 下载docker-compose.yml, 国内下载不了的话，可以手动复制内容。
```shell
curl -o docker-compose.yml https://raw.githubusercontent.com/vual/lobe-chat-pro/refs/heads/main/docker/docker-compose.yml
```
2. 下载.env，国内下载不了的话，可以手动复制内容。
```shell
curl -o .env https://raw.githubusercontent.com/vual/lobe-chat-pro/refs/heads/main/docker/.env
```
3. 编辑.env，按说明修改里面的环境变量参数，如果需要修改端口，可以编辑docker-compose.yml里的ports参数，只能修改冒号前面的数字。
```shell
vi .env
```
4. 拉取镜像
```shell
docker-compose pull
```
5 启动容器
```shell
docker-compose up -d
```

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

### 交流
- 微信：822784588
- 添加微信进群
