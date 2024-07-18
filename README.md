# lobe-chat-pro

### 介绍
- 基于[lobe-chat](https://github.com/lobehub/lobe-chat)，增加midjourney绘图面板，更全面的参数配置，更好看的界面。
  - 支持midjourney-proxy
  - 支持midjourney-proxy-plus，目前已支持大部分功能：
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
    - 图片本地存储，也兼容lobe-chat的s3存储。
    
- mj参数：
  - MIDJOURNEY_PROXY_URL：接口地址，支持/mj,/mj-fast,/mj-turbo,/mj-relax结尾的接口地址，如果都没填，则默认会自动拼上/mj结尾。
  - MIDJOURNEY_API_KEY：接口密钥，支持Authorization Bearer或者mj-api-secret
  - 也可以在用户端应用设置-》语言模型里设置midjourney接口地址和密钥。

### 欢迎了解另一个项目[ChatGPT-Next-Web-Pro](https://github.com/vual/ChatGPT-Next-Web-Pro)
  基于ChatGPT-Next-Web，扩展了更多实用功能。
  
### 版本介绍
  版本号：latest
  更新时间： 2024.07.12
  合并lobe-chat时间：2024.07.12

### 启动应用
```shell
docker run -d -p 3210:3210  registry.cn-hangzhou.aliyuncs.com/ann-chat/lobe-chat-pro:latest
```


### 截图
![image1](/images/image1.png)
![image2](/images/image2.png)

### 交流
微信：822784588

