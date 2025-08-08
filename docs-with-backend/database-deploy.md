1. **安装 docker 和 docker-compose**\*
2. **_下载本 docker-compose.yml_**, 国内下载不了的话，可以手动复制内容，文件在本项目 docker 目录下。

```shell
curl -o docker-compose.yml https://raw.githubusercontent.com/vual/lobe-chat-pro/refs/heads/main/docker/docker-compose.yml
```

2. **_下载 searxng-settings.yml_**，国内下载不了的话，可以手动复制内容，文件在本项目 docker 目录下。

```shell
curl -o searxng-settings.yml https://raw.githubusercontent.com/vual/lobe-chat-pro/refs/heads/main/docker/searxng-settings.yml
```

2. **_下载.env_**，国内下载不了的话，可以手动复制内容，文件在本项目 docker 目录下。

```shell
curl -o .env https://raw.githubusercontent.com/vual/lobe-chat-pro/refs/heads/main/docker/.env
```

4. **_编辑.env_**，按说明修改里面的环境变量参数，如果需要修改端口，可以编辑 docker-compose.yml 里的 ports 参数，只能修改冒号前面的数字。

```shell
vi .env
```

5. **_必须修改的参数：_**

```shell
# 授权码，添加微信822784588获取
AUTHORIZE_CODE=
MINIO开头的参数，如果不用minio可以不管。
S3开头的参数，必须要，如果不用minio，就填阿里云oss、腾讯cos，或者其它云厂商那边购买的oss
# lobe用户端地址，改成实际的域名，
APP_URL=https://lobe.example.com/
# lobe登录相关的地址，改成实际的域名，结尾拼上 /api/auth
NEXTAUTH_URL=https://lobe.example.com/api/auth
# 其它参数请查看.env文件里每个参数说明
```

6. **_拉取镜像_**

```shell
docker-compose pull
```

如果出现 minio 或者 pg 镜像拉不下来，可以在镜像地址前加代理地址，如：docker.m.daocloud.io/minio/minio

7. **_启动容器_**

```shell
docker-compose up -d
```

8. **_停止容器_**，如果需要重启服务，请执行此命令后，再执行 6 和 7 步

```shell
docker-compose down
```

&#x39;**_其它_**

- 如果 minio 的 bucket 没有自动创建，则需要在 minio 服务启动完成后，登录到 minio 手动创建，登录地址：http\://{启动机器的 ip}:9001，默认用户名：admin，默认密码：annyun.123456，如果你改过了 env 里的账号和密码，就以实际为准。
