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

- ### 其它：
  - 1. 支持修改应用名称和 LOGO。
  - 2. 支持用户把创作的图片、音乐、视频发布到公共空间，在发现页可以查看所有人分享的作品。

## 演示环境

- **用户端**：<https://ai.annyun.cn>
  - 扫描关注公众号即可登录，充值入口：头像 -》账户管理 -》充值消费
- **管理端**：<https://admin.annyun.cn>
  - 演示账号：annyun 密码：123456

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

- [其它说明](/Other.md)

## 更多图片

- [更多图片](/MoreImages.md)

## 交流

- 微信：822784588
- 添加微信进群
