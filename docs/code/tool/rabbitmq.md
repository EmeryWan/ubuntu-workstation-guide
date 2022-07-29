---
title: 🐇 RabbitMQ
sidebarDepth: 1
---

```:no-line-numbers
 __________________________________
< ubuntu 中安装 RabbitMQ 消息队列 >
 ----------------------------------
        \   ^__^
         \  (�)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```


## APT 安装

在 Ubuntu apt 源中，已经内置了 RabbitMQ。

RabbitMQ 是 Erlang 开发的，除了消息队列本身之外还需要 Erlang 环境。

```sh
sudo apt install erlang
sudo apt install rabbitmq-server

sudo rabbitmqctl status
```

可以看到默认有两个端口名被使用：

```sh
Listeners

Interface: [::], port: 25672, protocol: clustering, purpose: inter-node and CLI tool communication
Interface: [::], port: 5672, protocol: amqp, purpose: AMQP 0-9-1 and AMQP 1.0
```

### 开启管理面板

```sh
sudo rabbitmq-plugins enable rabbitmq_management

sudo rabbitmqctl status
```

可以看到多了一个管理面板，使用的是HTTP协议：

```sh
Listeners

Interface: [::], port: 25672, protocol: clustering, purpose: inter-node and CLI tool communication
Interface: [::], port: 5672, protocol: amqp, purpose: AMQP 0-9-1 and AMQP 1.0
Interface: [::], port: 15672, protocol: http, purpose: HTTP API
```

通过 IP 访问管理页面，如在本机安装 `127.0.0.1:15672`。在服务器或虚拟机安装更换为相应的 IP。

![login](/images/docs/code/tool/rabbitmq/login.png)

### 添加用户

默认用户 `guest - guest` 只能 localhost 访问，非本地安装需要添加一个用户。

![homepage](/images/docs/code/tool/rabbitmq/homepage.jpg)

```sh
# add_user 用户名 密码
sudo rabbitmqctl add_user admin admin

# 权限
sudo rabbitmqctl set_user_tags admin administrator

# 赋予virtual host中所有资源的配置、写、读权限以便管理其中的资源
sudo rabbitmqctl  set_permissions -p / admin '.*' '.*' '.*'
```

## 使用 Docker 安装

