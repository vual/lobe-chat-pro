# Lobe Chat Pro

## 项目介绍

- ### 基于[lobe-chat](https://github.com/lobehub/lobe-chat)，并定期同步原版代码

- ### 完整的后台管理：
  - **用户管理**，登录注册，设置分组，不同分组设置不同倍率，支持注册赠送额度，支持邀请注册并享受分成奖励
  - **模型管理**，管理模型提供商、模型与价格（按 Token 或次数）、Apikey
  - **多种支付**，微信支付、易支付、虎皮椒支付、stripe 支付
  - **计费系统**，充值、兑换、消费、退款，消费失败不扣费
  - **订单管理**，查询订单和消费记录
  - **消息记录**，可以管理聊天记录、画图记录、音乐记录、视频记录等。
  - **通知公告**，可以设置公告

- ### 强大的无限画布：
  - **画图模型**，google, openai, midjourney, kling, doubao
  - **视频模型**，google, openai, kling
  - **连续对话**，在对话中设计、修改图片，用图片生成视频
  - **图片修改**，高清放大、移除背景、提取图层、局部修改，图片扩展、多图扩展
  - **联网搜索**，根据需求搜索网络上的最新内容
  - **上传图片**，支持上传参考图片
  - **更多介绍**，[详细用法介绍](https://mp.weixin.qq.com/s/E4Nu97Z8yo7nLvsvQzNj4w)

  ![img31](/images/img31.png)
  ![img34](/images/img34.png)

- ### 独立的绘图面板：
  - **画图模型**，midjourney、kling、openai、doubao
  - **参数配置**，更多的自定义参数配置
  - **局部重绘**，更灵活的局部重绘功能。

  ![img32](/images/img32.png)

- ### 独立的音乐面板：
  - **音乐模型**，suno
  - **参数配置**，更多的自定义参数配置

  ![img5](/images/img5.png)

- ### 独立的视频面板：
  - **视频模型**，google, openai, kling, luma, runway
  - **参数配置**，更多的自定义参数配置

  ![img33](/images/img33.png)

- ### 中转站特别版，快速接入自己的中转站，支持 one-api, new-api, shell-api：
  - **轻量便捷**，画图、音乐、视频、无限画布，功能齐全，只是没有后台管理那些功能，纯前端部署，服务器要求低，配置中转站地址，直接把中转站当后台
  - **支持使用中转站用户直接登录**，可以登录，可以注册，也可以邀请用户注册，注册是直接注册中转站用户
  - **支持直接充值和兑换，消费记录查询**，直接调中转站的充值接口，兑换也是一样
  - **登录后直接获取用户在中转站里的 apikey**，获取令牌列表，支持切换，直接就可以开始聊天，免去手动填写 N 多模型提供商的 apikey
  - **支持跳转到中转站的令牌管理页面**
  - **支持获取中转站通知**，用户登录后，直接弹窗展示通知。
  - **支持划转邀请奖励**，
  - **支持手动添加 apikey 到本地**，本地添加的 apikey 和中转站里的 apikey 共存，随意切换
  - **分登陆版和无需登录版本**，无需登录版本只能手动添加 apikey 到本地

  ![img35](/images/img35.png)
  ![img36](/images/img36.png)

- ### 其它：
  - 1. 支持修改应用名称和 LOGO。
  - 2. 支持用户把创作的图片、音乐、视频发布到公共空间，在发现页可以查看所有人分享的作品。

## 体验站点

- **用户端**：<https://ai.annyun.cn>
  - 实际可用，扫描关注公众号即可登录，充值入口：头像 -》账户管理 -》充值消费
- **管理端**：<https://admin.annyun.cn>
  - 账号：annyun 密码：123456
- **中转站特别版**: <https://client.annyun.cn/>

## 部署方式

- ### 带后台管理版本（后台管理需要授权，添加微信：822784588）
  - 详细部署方式：
    - [部署服务](docs-with-backend/database-deploy.md)
    - [微信公众号和支付](docs-with-backend/微信公众号和支付.md)
    - [Nginx](docs-with-backend/nginx.md)
  - 启动后：
    - 用户端：http\://{启动机器的 ip}:3210，
    - 管理端：http\://{启动机器的 ip}:8888， 账号：admin，密码：123456
  - 配置域名转发：
    - 端口 3210，用户端
    - 端口 8888，管理端
    - 端口 9000，minio

- ### 中转站特别版启动
  - #### 有登陆和注册的版本
  - 参数说明：
    - AUTHORIZE_CODE = 授权码，加微信：822784588，授权绑定中转站域名
    - APP_URL = 应用链接，如：<https://client.annyun.cn>
    - APP_CUSTOM_NAME = 应用名称，如：LobeChatPro
    - APP_CUSTOM_LOGO = 应用 LOGO，填 https 开头的图片地址
    - NEXTAUTH_URL = 登录交互链接，填 APP_URL 的值，拼上 /api/auth， 例如：<https://client.annyun.cn/api/auth>
    - BACKEND_BASE_URL = 中转站地址，例如：<https://api.annyun.cn>
    - APP_CONFIG = 应用配置，配置登录相关参数，参数包含：
      {"loginParams":{"addParams":{"agreement":true}, "captchaVerify":true}, "tokenPage":"/token", "tokenQueryPath": "/api/token?p=1\&size=20"}，
      loginParams 的登录相关参数，addParams 是登录附加参数，会放到登录报文里，比如同意协议说明 "agreement":true，
      captchaVerify:true，是开启图形验证码，tokenPage 是中转站的令牌页面路径，默认值 /token， tokenQueryPath 是查询中转站令牌的请求路径，默认值 /api/token?p=1\&size=20
    - NEXT_AUTH_SECRET = 登录密钥，随便填，例如：123456789X
    - NEXT_AUTH_SSO_PROVIDERS = 只能填 annyun
    - KEY_VAULTS_SECRET=bed69c29a04b400fbc7bc3e2fa8d38dd
    - 如果是 1panel 部署，参数值的单引号都去掉

  ```shell
  docker run -d -p 3210:3210 \
    -e AUTHORIZE_CODE='授权码' \
    -e APP_URL='https://client.annyun.cn' \
    -e NEXTAUTH_URL='https://client.annyun.cn/api/auth' \
    -e BACKEND_BASE_URL='https://api.annyun.cn' \
    -e APP_CONFIG='{"loginParams":{"addParams":{"agreement":true}, "captchaVerify":false}, "tokenPage":"/token", "tokenQueryPath": "/api/token?p=1&size=20"}' \
    -e NEXT_AUTH_SECRET='123456789X' \
    -e NEXT_AUTH_SSO_PROVIDERS='annyun' \
    -e KEY_VAULTS_SECRET='bed69c29a04b400fbc7bc3e2fa8d38dd' \
    registry.cn-hangzhou.aliyuncs.com/ann-chat/lobe-chat-pro:client
  ```

  - #### 无需登陆和注册的版本
    - 镜像标签是 nologin
    - AUTHORIZE_CODE = 授权码，加微信：822784588，授权绑定中转站域名
    - APP_URL = 应用链接，如：<https://client.annyun.cn>
    - APP_CUSTOM_NAME = 应用名称，如：LobeChatPro
    - APP_CUSTOM_LOGO = 应用 LOGO，填 https 开头的图片地址

  ```shell
  docker run -d -p 3210:3210 \
    -e AUTHORIZE_CODE='授权码' \
    -e APP_URL='https://client.annyun.cn' \
    registry.cn-hangzhou.aliyuncs.com/ann-chat/lobe-chat-pro:nologin
  ```

- ### 开源版本启动应用
  - 包含 midjourney 画图，浏览器端默认使用 pglite 数据库

  ```shell
  docker run -d -p 3210:3210 registry.cn-hangzhou.aliyuncs.com/ann-chat/lobe-chat-pro:latest
  ```

  启动后，访问：http\://{启动机器的 ip}:3210

## 其它项目

- [ChatGPT-Next-Web-Pro](https://github.com/vual/ChatGPT-Next-Web-Pro)
  - 基于 ChatGPT-Next-Web，扩展了更多实用功能。
- [aiiai-api](https://github.com/vual/aiiai-api)
  - 基于 new-api 的开源项目

## 推荐中转接口

免去繁杂配置，获取 key 就可以用，模型全面，价格优惠。

- [api.annyun.cn](https://api.annyun.cn/)
- [api.aiiai.top](https://api.aiiai.top/register?aff=B4fi)

## 其它说明

- [其它说明](./Other.md)

## 更多图片

- [更多图片](./MoreImages.md)

## 交流

- 微信：822784588
- 添加微信进群
