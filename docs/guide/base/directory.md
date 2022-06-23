---
title: Linux 目录结构介绍
sidebarDepth: 1
---


```:no-line-numbers
 ________________
< 目录结构介绍 >
 ----------------
        \   ^__^
         \  (�)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```


# Linux 目录结构介绍

![directory](/images/docs/guide/base/directory/directory.png)

## /bin

Binary 

二进制可执行文件和可执行文件的快捷方式（软链接），存放着常用的命令。

例如常用的 `ls` `cp` `cd` 等命令都存放在这里。

![bin](/images/docs/guide/base/directory/bin.png)

## /boot

启动 Linux 时使用的一些核心文件，包括一些连接文件以及镜像文件。

![boot](/images/docs/guide/base/directory/boot.png)

如果是以 UEFI 方式安装的系统，其中 `efi` 文件夹中的为 `EFI` 分区中的引导。 

## /dev

Device

存放着所有的设备文件。在 Linux 中，所有东西都是以文件的形式存在的，包括硬件设备。

![dev](/images/docs/guide/base/directory/dev.png)


## /etc

Etcetera

存放程序的配置信息，大多数安装的应用配置信息都会在这里。


例如：

- `/etc/apt`  apt 源配置目录
- `/ect/vim`  vim 配置目录
- `/etc/nginx`  nginx 配置目录
- `/ect/redis`  redis 配置目录

![etc](/images/docs/guide/base/directory/etc.png)




## /home

用户的主目录。

在 Linux 中，每个用户都有一个自己的目录，一般该目录名是以用户的账号命名。

![home](/images/docs/guide/base/directory/home.png)


## /lib

Library

系统最基本的动态连接共享库，其作用类似于 Windows 里的 DLL 文件。

几乎所有的应用程序都需要用到这些共享库。包含 bin 和 sbin 中可执行文件的依赖。

![lib](/images/docs/guide/base/directory/lib.png)



## /media

自动挂载的设备，比如 U 盘，移动硬盘，网络设备等的目录。

比如现在有一个 U 盘，插到电脑上之后，系统会把 U 盘自动挂载到 `/media/$USER` 文件夹中。


## /mnt

提供给用户临时手动挂载设备文件夹，一般是空文件夹。

比如现在要手动挂载一个硬盘，可用如下挂载到 `/mnt`：

```sh
mount /dev/sdb1 /mnt/disk
```

## /opt

Optional

一些第三方软件安装的目录。

比如 Chrome 浏览器，WPS 等软件，都会安装在这里。

![opt](/images/docs/guide/base/directory/opt.png)


## /root


这是 root 用户的家目录。


## /proc

Processes

`/proc` 是一种伪文件系统（也即虚拟文件系统），存储的是当前内核运行状态的一系列特殊文件，这个目录是一个虚拟的目录，它是系统内存的映射，我们可以通过直接访问这个目录来获取系统信息。

![procversion](/images/docs/guide/base/directory/procversion.png)

`/proc` 里面有一大堆数字命名的文件夹，这个数字其实是 Process ID（PID），对应着运行的服务。

![procps](/images/docs/guide/base/directory/procps.png)

![proccat](/images/docs/guide/base/directory/proccat.png)

![proc1929](/images/docs/guide/base/directory/proc1929.png)


## /sbin

Superuser Binaries 

这里存放的是系统管理员使用的系统管理程序。

例如常见的 `groupadd` `groupdel`。

![sbin](/images/docs/guide/base/directory/sbin.png)

## /srv

Service 

主要用来存放服务数据。对于桌面版 Linux 系统，这个文件夹一般是空的，但是对于 Linux 服务器，Web 服务或者 FTP 文件服务的资源可以存放在这里。



## /tmp

Temporary

存储一些程序的临时文件。


临时文件可能起到很重要的作用。比如有时候 Word 文档崩溃了，好不容易写的东西全没了，Linux 的很多文本编辑器都会在 `/tmp` 放一份当前文本的 copy 作为临时文件，如果你的编辑器意外崩溃，有机会在 `/tmp` 找一找临时文件抢救一下。


![tmp](/images/docs/guide/base/directory/tmp.png)


## /usr

Unix Shared Resources

共享资源，这是一个非常重要的目录，用户的很多应用程序和文件都放在这个目录下，类似于 windows 下的 program files 目录。

![usr](/images/docs/guide/base/directory/usr.png)

### /usr/bin   /usr/sbin

系统用户 / 超级管理员 使用的应用程序。

在 Ubuntu 中，`/bin` `/sbin` 其实就是 `/usr/bin` `/usr/sbin` 的一个链接。

![usrbin](/images/docs/guide/base/directory/usrbin.png)


### /usr/src

内核源代码默认的放置目录。


### /usr/lib 

包含所有那些用户不能直接执行的库文件。包含着所有 '/usr/bin' 和 '/usr/sbin' 目录中可执行命令程序需调用的二进制库文件。

例如使用 `apt` 安装 openjdk 的目录在 `/usr/lib/jvm`。

### /usr/share

包含独立于架构的共享数据。

例如系统桌面图标目录 `/user/share/applications`。

## /usr/local

用于本地安装软件的目标目录。从源代码安装的用户程序都将安装到这里。

![usrlocal](/images/docs/guide/base/directory/usrlocal.png)

## /var

Variable

存放着在不断扩充着的东西，我们习惯将那些经常被修改的目录放在这个目录下。

例如日志文件。

![var](/images/docs/guide/base/directory/var.png)

## 参考

- [https://segmentfault.com/a/1190000038497705](https://segmentfault.com/a/1190000038497705)
- [https://www.runoob.com/linux/linux-system-contents.html](https://www.runoob.com/linux/linux-system-contents.html)
