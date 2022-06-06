---
title: 安装介质和硬件设置
---


```:no-line-numbers
 ____________________
< 安装介质和硬件设置 >
 --------------------
        \   ^__^
         \  (..)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```




## 🌭 下载镜像

选择好想安装的发行版后，我们就可以下载镜像了。介于国内的网络环境，我们可以在国内的镜像源下载，以获得较好的网络体验。这里以下载 `Ubuntu LTS 22.04` 为例。

在官网可以看到国内的镜像源如下，但实际上远远比这些多，

![media](/images/docs/prepare/media/mirror.png)

下面只是列举部分可以下载的地址（来自网络），国内可以根据需求选择，或根据自身情况搜索：

- 阿里云镜像 [传送门](https://developer.aliyun.com/mirror/ubuntu-releases)

- 腾讯云镜像 [传送门](https://mirrors.cloud.tencent.com/ubuntu-cdimage/ubuntu/releases/)

- 华为云镜像 [传送门](https://repo.huaweicloud.com/ubuntu-cdimage/ubuntu/releases/)

- 网易镜像 [传送门](https://mirrors.163.com/ubuntu-releases/)

- 清华镜像 [传送门](https://mirrors.tuna.tsinghua.edu.cn/ubuntu-releases/)

- 中科大镜像 [传送门](https://mirrors.ustc.edu.cn/)



## 🍔 准备安装介质

:::danger 警告
数据无价，注意备份重要数据。
:::

准备一个可以格式化的 U 盘。可以在任何系统中制作安装介质。

### windows

在 window 下，可以选择 [rufus](https://rufus.ie/zh/) 制作镜像。推荐下载便携版，开箱即用。

- 设备：需要刻录的 U 盘

- 引导类型选择：下载的 ISO 镜像

![rufus](/images/docs/guide/prepare/media/rufus.png)

也可以同样安装 [Etcher](https://www.balena.io/etcher/)，具体使用参靠下面说明。

### macOS

在 mac 下，推荐使用 [Etcher](https://www.balena.io/etcher/)，可以在官网下载，如果使用 `brew` 管理软件，可以通过如下命令：

```sh
brew install balenaetcher
```

![balenaetcher](/images/docs/guide/prepare/media/balenaetcher.png)

### Ubuntu

在 Ubuntu 中套娃制作启动盘，可以直接使用默认安装的程序 `制作启动盘` 刻录安装镜像。

![ubuntu-make](/images/docs/guide/prepare/media/ubuntu-make.png)

当然也可以同样安装 [Etcher](https://www.balena.io/etcher/)，这是一个跨平台程序。

```sh
curl -1sLf 'https://dl.cloudsmith.io/public/balena/etcher/setup.deb.sh' | sudo -E bash

sudo apt update
sudo apt install balena-etcher-electron
```

## 🍟 与 windows 共存

TODO，推荐先参考：

[为 ubuntu 分出硬盘空间](https://arch.icekylin.online/rookie/pre-install.html#_4-%E4%B8%BA-archlinux-%E5%88%86%E5%87%BA%E7%A1%AC%E7%9B%98%E7%A9%BA%E9%97%B4-%E5%8F%AF%E9%80%89)


## 🍕 电脑 BIOS 设置

推荐在 UEFI / BIOS 设置如下内容：

- 关闭 `Security Boot`

- 打开虚拟化（推荐）

  - `Intel Virtual Technology`（Intel）

  - `SVM Model`（AMD）
