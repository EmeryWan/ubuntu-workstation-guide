---
title: 🐳 Docker
---

```:no-line-numbers
 _________________________
< ubuntu 中安装 Docker >
 -------------------------
        \   ^__^
         \  (�)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```


## 从软件源安装

在 `ubuntu` 软件源中已经包含了 `Docker` 的相关软件包。这些软件包不是最近版本，但相对来说版本也比较靠前，完全够平常的使用和学习。如果有特殊要求，可以在[官网文档](https://docs.docker.com/engine/install/ubuntu/)了解更多。

```sh
sudo apt install docker docker.io docker-compose
```

如果不想添加 `sudo` 使用相关命令，可以将当前用户加入 `docker` 用户组。

```sh
sudo groupadd docker

sudo gpasswd -a ${USER} docker
sudo usermod -aG docker ${USER}
```


## 从 Docker 官方源安装

如果想要获取最近的 `Docker` 版本，需要添加官网 `apt` 源。鉴于国内网络问题，强烈建议使用国内源。

- 卸载旧版本（若有）

```sh
sudo apt remove docker \
            docker-engine \
            docker.io
```

- 添加使用 HTTPS 传输的软件包以及 CA 证书。

```sh
sudo apt update

sudo apt install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```

- 添加软件源的 GPG 密钥。

```sh
curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# 官方源
# curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```


- 向 sources.list 中添加 Docker 软件源

```sh
echo \
"deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://mirrors.aliyun.com/docker-ce/linux/ubuntu \
$(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# 官方源
# echo \
#   "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
#   $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

- 安装

```sh
sudo apt update

sudo apt install docker-ce docker-ce-cli containerd.io
```


## 常见命令

### 镜像相关

- 🔍 搜索

```sh
docker search mysql

# 官方镜像
docker search --filter=is-offical=true mysql

# Stars 超过 100
docker search --filter=stars=100 mysql
```

- ⏬ 下载

```sh
docker pull mysql:5.7

docker pull docker.io/mysql:5.7
```

- 💻 信息

```sh
docker images

docker image ls
```

- ❌ 删除

```sh
# docker rmi [Id]/[镜像名]
docker image rmi ee7cbd482336

docker rmi $(docker images -q)
```

### 容器相关

- 💻 启动

创建一个新的容器，常用参数有:

> -d  --detach=false  指定后台运行
>
> -i  --interactive=false  交互运行，打开STDIN  (-it)
>
> -t  --tty=false  分配tty
>
> -P  --public-all=false  随机分配映射端口
>
> -p  --publish=[]  宿主机:容器
>
> -e  --env=[]  指定环境变量
>
> -v  --volume=[]  挂载储存卷
>
> -w  --workdir=""  指定容器的工作目录
>
> --name thisname  分配容器名
>
> --rm  容器停止后删除（不支持 docker run -d）

```sh
docker run --name mynginx \
            -p 11180:80 \          # 映射容器80端口到11180 (TCP)
            -p 11180:80/udp \      # UDP
            -v /var/docker/nginx:/data \       # 将容器/data目录挂载到/var/docker/nginx
            -d nginx:latest
```

- 👨‍💻 进入

进入容器，在运行的容器中执行命，使用 `docker exec -it`

> -i  --interactive=false  交互运行
> -t  --tty=false  分配tty

```sh
docker exec -it mynginx /bin/bash

docker exec -it 7960423d62b8 python

# 以交互的方式执行容器中的 /root/run.sh 脚本
docker exec -it mynginx /bin/sh /root/run.sh
```


- ❌ 删除

可以使用 `docker container rm  /  docker rm` 来删除一个处于**终止状态**的容器。

```sh
docker container rm mynginx

# 清理所有处于终止状态的容器
docker rm $(docker ps -a -q)
```

## 学习更多

如果想要学习更多与 `Docker` 相关的内容，可以参考：[Docker-从入门到实践](https://yeasy.gitbook.io/docker_practice)


## 参考

- 🔗 https://yeasy.gitbook.io/docker_practice
