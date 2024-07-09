# lobe-chat-pro

### 介绍
- 基于[lobe-chat](https://github.com/lobehub/lobe-chat)，增加midjourney绘图面板，更全面的参数配置，更好看的界面。支持midjourney-proxy和midjourney-proxy-plus，支持大部分功能，包括InsightFace(AI换脸)。
- mj参数：
  - MIDJOURNEY_PROXY_URL：接口地址，支持/mj,/mj-fast,/mj-turbo,/mj-relax结尾的接口地址
  - MIDJOURNEY_API_KEY：接口密钥，支持Authorization Bearer或者mj-api-secret
  - 也可以在用户端应用设置-》语言模型里设置midjourney接口地址和密钥。
  
### 版本介绍
  版本号：latest
  更新时间： 20240709，（每次都会合并最新的lobe-chat代码）

### 启动应用
```shell
docker run -d -p 3210:3210  registry.cn-hangzhou.aliyuncs.com/ann-chat/lobe-chat-pro:latest
```

### 截图
![image1](/images/image1.png)
![image2](/images/image2.png)

