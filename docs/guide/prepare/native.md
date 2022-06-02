---
title: 安装教程
---

```:no-line-numbers
 _____________________
< Ubuntu 安装教程 >
 ---------------------
        \   ^__^
         \  (..)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

这里以安装当前最新的 `Ubuntu LTS 22.04` 为例。

## 💾 从 U 盘启动

通常我们可以通过以下两种方式之一从 U 盘启动系统：

- 在 UEFI（BIOS）设置 Boot Device 进入

- 更改启动设备（部分厂商的设备可在 UEFI（BIOS）外直接更改启动设备）

可以利用搜索引擎，通过关键字 `品牌  进入  BIOS / U 盘启动` 查到到需要的内容。

以下为部分厂商电脑进入 UEFI（BIOS）的方式：

- 戴尔 [传送门](https://www.dell.com/support/kbdoc/zh-cn/000126121/%E4%BB%8E%E6%88%B4%E5%B0%94%E7%B3%BB%E7%BB%9F%E4%B8%8A%E7%9A%84windows%E8%AE%BF%E9%97%AEuefi-bios-%E7%B3%BB%E7%BB%9F%E8%AE%BE%E7%BD%AE?lang=zh)

- 惠普 [传送门](https://support.hp.com/cn-zh/document/c04926958)

- 联想 [传送门](https://iknow.lenovo.com.cn/detail/dc_R0170.html)

- Thinkpad [传送门](https://datacentersupport.lenovo.com/cn/zc/solutions/ht500222)

- 宏碁 [传送门](https://community.acer.com/en/kb/articles/86-how-to-enter-the-bios-setup)

- 华为 [传送门](https://consumer.huawei.com/cn/support/content/zh-cn00688478/)

- 小米 [传送门](https://www.mi.com/service/bijiben/drivers)

- 神州 [传送门](http://www.kqidong.com/bios/1860.html)

- 机械革命 [传送门](http://www.ujiaoshou.com/upanjc/diannao/27930.html  )

- 雷蛇 [传送门](https://mysupport.razer.com/app/answers/detail/a_id/1541/~/how-to-access-the-bios-settings-on-the-razer-blade)


## 🚄 安装流程

### 进入系统

选择从 U 盘启动后，会看到类似如下 GRUB 页面。这里我们选择第一项 `Try or Install Ubuntu`。

![grub](/images/docs/guide/prepare/native/grub.png)

### 安装系统

之后，会看到如下页面。可以选择语言，选择试用或安装 Ubuntu。这里选择中文后，点击试用 Ubuntu（当然你想直接安装也可以）。

![try-or-install](/images/docs/guide/prepare/native/try-or-install.png)

成功进入系统后，会看到桌面环境如下。

![desktop](/images/docs/guide/prepare/native/desktop.png)

现在，我们们可以试用，或选择安装。点击安装图片，可进入安装流程。


- 选择语言：

![install](/images/docs/guide/prepare/native/install.png)

- 选择键盘类型：

![keyboard](/images/docs/guide/prepare/native/keyboard.png)

- 连接网络（由于国内的网络环境，**推荐离线安装**，安装完后再联网）：

![network](/images/docs/guide/prepare/native/network.png)

- 安装方式（根据自身需要选择正常安装还是最小安装）：

![type](/images/docs/guide/prepare/native/type.png)

- 安装位置：

这里直接清除了硬盘安装。

如果要于 windows 共存（TODO），选择 `其他选项`，可先参考 [传送门](https://arch.icekylin.online/rookie/pre-install.html#_4-%E4%B8%BA-archlinux-%E5%88%86%E5%87%BA%E7%A1%AC%E7%9B%98%E7%A9%BA%E9%97%B4-%E5%8F%AF%E9%80%89) 提取分区。（建议不要在这里选择第一项 `安装 Ubuntu，与 Windows Boot Manager 共存`，它会在安装 windows 的分区中压缩出部分空间，进行安装）

如果有双硬盘，选择 `其他选项`，进行自定义安装（TODO）。

![disk-type](/images/docs/guide/prepare/native/disk-type.png)

- 选择时区：

![timezone](/images/docs/guide/prepare/native/timezone.png)

- 设置相关信息：

![install-info](/images/docs/guide/prepare/native/install-info.png)

- 正在安装（等待）：

![installing](/images/docs/guide/prepare/native/installing.png)



### 结束安装

安装完成后，可选择重启。或继续试用后，在右上角点击 `关机` / `重启`，结束安装。

![complete](/images/docs/guide/prepare/native/complete.png)

会在屏幕上看到这样一句话：

`Please remove the installation medium, then press ENTER`

之后移除 U 盘，点击 `ENTER`，即完成了安装。重启后即可进入硬盘中的系统。


## 👨‍💻 安装完成设置

### 国内源

### 更新

### 重启
