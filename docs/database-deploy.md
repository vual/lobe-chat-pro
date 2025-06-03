1. **安装docker和docker-compose***
2. ***下载本docker-compose.yml***, 国内下载不了的话，可以手动复制内容，文件在本项目docker目录下。
```shell
curl -o docker-compose.yml https://raw.githubusercontent.com/vual/lobe-chat-pro/refs/heads/main/docker/docker-compose.yml
```

2. ***下载searxng-settings.yml***，国内下载不了的话，可以手动复制内容，文件在本项目docker目录下。
```shell
curl -o .env https://raw.githubusercontent.com/vual/lobe-chat-pro/refs/heads/main/docker/searxng-settings.yml
```

2. ***下载.env***，国内下载不了的话，可以手动复制内容，文件在本项目docker目录下。
```shell
curl -o .env https://raw.githubusercontent.com/vual/lobe-chat-pro/refs/heads/main/docker/.env
```

4. ***编辑.env***，按说明修改里面的环境变量参数，如果需要修改端口，可以编辑docker-compose.yml里的ports参数，只能修改冒号前面的数字。
```shell
vi .env
```

5. ***必须修改的参数：***
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

6. ***拉取镜像***
```shell
docker-compose pull
```
如果出现minio或者pg镜像拉不下来，可以在镜像地址前加代理地址，如：docker.m.daocloud.io/minio/minio

7. ***启动容器***
```shell
docker-compose up -d
```

8. ***停止容器***，如果需要重启服务，请执行此命令后，再执行6和7步
```shell
docker-compose down
```
