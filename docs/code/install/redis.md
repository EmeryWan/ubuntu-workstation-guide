---
title: 📚 Redis
---

## 从 ubuntu 软件源安装

在 ubuntu 的软件源中，已经包含了 Redis 数据库。

如果没有特别需求，用做日常或学习使用，可以直接用命令安装 Redis 数据库。

```sh
sudo apt update
sudo apt install redis-server
```

可以使用一下命令查看或管理 Redis 服务。

```sh
sudo systemctl status redis-server
sudo systemctl start redis-server
sudo systemctl stop redis-server
sudo systemctl restart redis-server
```

### 远程访问

修改 Reids 的配置文件 `/etc/redis/redis.conf`。并重启服务。

```conf
# 找到 bind 并修改

# bind 127.0.0.1
bind 0.0.0.0
```

### 设置密码

`/etc/redis/redis.conf`

```conf
requirepass yourpassword
```

#### 防火墙

如果有防火墙（如国内厂商的云服务器），打开 MySQL 服务器的端口号。默认为 `6379`。


## 安装指定版本


## 使用 Docker 安装



## 参考


- 🔗 [https://hub.docker.com/_/mysql?tab=description](https://hub.docker.com/_/mysql?tab=description)
