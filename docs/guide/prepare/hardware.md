---
title: 硬件选择
---


```:no-line-numbers
 ____________
< 硬件选择 >
 ------------
        \   ^__^
         \  (�)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

## 🍨 推荐的系统配置

在 [Ubuntu官网](https://cn.ubuntu.com/download/desktop)，可以看到当前最新版本 22.04 LTS 的推荐配置如下：

- 双核2 GHz处理器或更高
- 4 GB系统内存
- 25 GB磁盘存储空间
- 可访问的互联网
- 光驱或USB安装介质

该配置虽然看起来不高，但是如果想在日常流畅地使用最新版本的 Gnome 桌面，还是需要一定的硬件要求的。

如果使用 `Ubuntu` 系统是为了（非常）老旧的硬件流畅运行，推荐安装更轻量的桌面环境，如 `xfce`。[了解更多](/guide/prepare/distribution.html)


## 🧁 推荐的硬件

🍊 正常情况下，市面上所贩卖的台式机 / 笔记本都可以成功安装 `Ubuntu`。

由于 `Ubuntu` 是定期发行版本的更新方式，不同于滚动更新，若某些最新发布的 CPU，显卡，网卡等硬件有了较大大的改变，可能会出现一些不兼容的情况，需要安装后升级至支持的内核。



🍋 通常台式电脑的兼容性相较于笔记本会好很多。


笔记本厂商通常都会对硬件和 BIOS 进行定制，大部分不会在 Linux 下进行测试或优化，容易出现无法休眠，声卡无法自动切换等情况。

遇到这种情况，可以善用搜索引擎寻求帮助。

例如，若您使用的设备为 Surface 系列，可以找到如下的支持：[@linux-surface/linux-surface](https://github.com/linux-surface/linux-surface)

![surface](/images/docs/guide/prepare/hardware/surface.png)

🍓 如果想要有完美的 `Ubuntu` 使用体验，可以选择 `Ubuntu` 认证的硬件。

可以在此处（[传送门](https://ubuntu.com/certified)）查找到认证的硬件，包含了[笔记本](https://ubuntu.com/certified/laptops)，[台式机](https://ubuntu.com/certified/desktops)，[服务器](https://ubuntu.com/certified/servers)，[嵌入式设备](https://ubuntu.com/certified/devices)，[Soc](https://ubuntu.com/certified/socs)。


![certified](/images/docs/guide/prepare/hardware/certified.png)


大部分商用性质的设备，会对 `Ubuntu` 有较好的支持。

