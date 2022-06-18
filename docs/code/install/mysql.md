---
title: 🐬 MySQL
---

```:no-line-numbers
 ______________________________________
< 在 ubuntu 中安装 MySQL 数据库 >
 --------------------------------------
        \   ^__^
         \  (==)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```


## 从 ubuntu 软件源安装

在 ubuntu 的软件源中，已经包含了 MySQL 数据库。

::: tip 🚧 提示
不同版本的 ubuntu，软件源中内置版本可能不同。

在 `18.04 LTS` 中，可以直接安装 `mysql-server-5.7` 和 `mysql-server-8.0`。
在最近的 `20.04 LTS` 和 `22.04 LTS` 中，软件源中默认只包含 `mysql-server-8.0`。
:::


如果没有特别需求，用做日常或学习使用，可以直接用命令安装 MySQL 数据库。以下以安装 `MySQL 8.0` 为例。

```sh
sudo apt update
sudo apt install mysql-server-8.0
```

安装完成后，MySQL 服务会自动启动。可以输入以下命令检查 MySQL 服务是否正在运行。

```sh
sudo systemctl status mysql.server

# output
● mysql.service - MySQL Community Server
     Loaded: loaded (/lib/systemd/system/mysql.service; enabled; vendor preset: enabled)
     Active: active (running) since Fri 2022-05-13 15:19:06 CST; 5h 30min ago
    Process: 762 ExecStartPre=/usr/share/mysql/mysql-systemd-start pre (code=exited, status=0/SUCCESS)
   Main PID: 1100 (mysqld)
     Status: "Server is operational"
      Tasks: 38 (limit: 4603)
     Memory: 420.6M
     CGroup: /system.slice/mysql.service
             └─1100 /usr/sbin/mysqld
```

我们可以使用以下命令来管理 MySQL 服务：

```sh
sudo systemctl status mysql.server
sudo systemctl start mysql.server
sudo systemctl stop mysql.server
sudo systemctl restart mysql.server
```

### 👨‍💻 登陆 MySQL

#### 使用默认帐户

可以在 `/etc/mysql/debian.cnf` 查看默认用户

```sh
sudo cat /etc/mysql/debian.cnf

# output
# Automatically generated for Debian scripts. DO NOT TOUCH!
[client]
host     = localhost
user     = debian-sys-maint
password = iJBWEP5RGCJcbVFr
socket   = /var/run/mysqld/mysqld.sock
[mysql_upgrade]
host     = localhost
user     = debian-sys-maint
password = iJBWEP5RGCJcbVFr
socket   = /var/run/mysqld/mysqld.sock
```

#### 通过管理员（推荐）

可以通过以下命令，输入管理员密码后，进入 MySQL。

```sh
sudo mysql
```

### 🧑‍🔧 为 root 用户设置密码

在新安装的 MySQL 数据库中，已经包含了一个 `'root'@'localhost'` 的账号，我们可以给这个 root 用户重设一个密码。

```sh
# 查询 Mysql 账户
> use mysql
> select host, user, authentication_string from user;

# output
+-----------+------------------+------------------------------------------------------------------------+
| host      | user             | authentication_string                                                  |
+-----------+------------------+------------------------------------------------------------------------+
| localhost | debian-sys-maint | $A$005$b IWBI,u;bR#zJ.frbgxq1ZBQOB56xU1Tk6PbZ.xiZMl50eIRl4xioTj0B |
| localhost | mysql.infoschema | $A$005$THISISACOMBINATIONOFINVALIDSALTANDPASSWORDTHATMUSTNEVERBRBEUSED |
| localhost | mysql.session    | $A$005$THISISACOMBINATIONOFINVALIDSALTANDPASSWORDTHATMUSTNEVERBRBEUSED |
| localhost | mysql.sys        | $A$005$THISISACOMBINATIONOFINVALIDSALTANDPASSWORDTHATMUSTNEVERBRBEUSED |
| localhost | root             |                                                                        |
+-----------+------------------+------------------------------------------------------------------------+
5 rows in set (0.00 sec)
```

```sh
# 给 root 重设本地密码
alter user 'root'@'localhost' identified by '${password}';
flush privileges;
```

完成后，即可在本地通过 `mysql -u root -p`，输入密码后登陆。

### 👩‍🚒 远程连接 MySQL 数据库

#### 更改用户 host

当前数据裤里的账户都只能通过本地 `localhost` 进行连接，如果需要创建 `host` 为 `%` 的用户，或者更改已有账户的 `host`。

- 🌰 更改 root 用户

```sh
use mysql;
update user set host='%' where user='root';
```

- 🌰 创建新用户（推荐）

```sh
# 创建新用户
create user 'your_name'@'%' identified by 'your_password';
# 更改权限
grant all privileges on *.* to 'your_name'@'%' with grant option;
flush privileges;
```

这里也可以创建一个 `user=root; host=%` 的新账户，这两个 `root` 用户具有不同的密码。本地密码可以简单一点，方便使用；远程密码复杂一点，更加安全。

::: warning 🚧 警告
授权时，请注意根据自身情况，给 MySQL 账户权限。
:::

#### 更改配置文件

更改配置文件 `/etc/mysql/mysql.conf.d/mysqld.cnf`。找到 `bind-address`，将其注释，或改成 `0.0.0.0`。

```sh
vim /etc/mysql/mysql.conf.d/mysqld.cnf

# 更改配置文件
bind-address    = 0.0.0.0

# 重启 MySQL 服务
sudo systemctl restart mysql.server
```

#### 防火墙

如果有防火墙（如国内厂商的云服务器），打开 MySQL 服务器的端口号。默认为 `3306`。

## 安装指定版本

如果有安装指定版本的 MySQL 数据库需求，例如在较新版本的 ubuntu 系统中安装旧版数据库，可以在 MySQL 官网下载安装包或二进制文件进行安装。

[传送门 ➡️](https://dev.mysql.com/downloads/mysql/)

![download](/images/docs/code/install/mysql/download.png)

可以选择下载：
- 🌰 `.tar` 解压到指定文件夹；
- 🌰 `.deb` 安装包使用 `dpkg` 安装。

> 如果已经明确知道需要下载的版本号，可以在国内的一些进行源进行下载。例如：💿 [阿里源](https://mirrors.aliyun.com/mysql)


## 使用 Docker 安装

[dockerhub MySQL 地址 🔗](https://hub.docker.com/_/mysql)。可从此处获取一下说明，使用提示，镜像版本信息等。

- 拉取镜像

```sh
docker pull mysql
# 指定版本
docker pull mysql:8.0
```

- 创建容器并运行

直接启动：

```sh
docker run --name docker-mysql \
    -e MYSQL_ROOT_PASSWORD=my-secret-pw \
    -p 13306:3306 \
    -d mysql:tag
```

挂载数据目录到容器外：

```sh
# 创建一个挂载目录
mikdir /my/own/nysqldir

docker run --name docker-mysql \
    -v /my/own/nysqldir:/var/lib/mysql \
    -p 13306:3306 \
    -e MYSQL_ROOT_PASSWORD=my-secret-pw \
    -d mysql:8.0
```

更多参数请参考 [dockerhub MySQL 地址 🔗](https://hub.docker.com/_/mysql)。

- 使用容器命令行

```sh
docker exec -it docker-mysql bash
```

## 参考

- 🔗 [https://segmentfault.com/a/1190000039203507](https://segmentfault.com/a/1190000039203507)
- 🔗 [https://hub.docker.com/_/mysql?tab=description](https://hub.docker.com/_/mysql?tab=description)
