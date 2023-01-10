---
title: 网络
---


```:no-line-numbers
 ________
< 网络 >
 --------
        \   ^__^
         \  (..)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

## 🧭 CLW

:::tip 推荐
推荐同时安装该插件：[proxy-switcher](https://extensions.gnome.org/extension/771/proxy-switcher/)
可以在控制栏方便切换代理。
:::

CLW 是由 electron 开发的，同时也提供了 Linux 版本，使用起来与其他系统无几乎无差别。[传送门 ➡️](https://github.com/Fndroid/clash_for_windows_pkg/releases)

提供的是 `.tar.gz` 的执行文件。下面是本人的安装方式，仅做参考，可根据个人习惯选择安装方式：

二进制软件我通常都会统一放在 `${HOME}/Applications` 中。

- 首先创建一个安装的软件的文件夹

```sh
mkdir -p ~/Application/clash
```

- 将下载的文件解压到该文件夹中

```sh
tar -xzvf Clash.for.Windows-0.19.12 -C ~/Application/clash
```

- 创建启动文件的软连接

```sh
ln -s ./Clash\ for\ Windows-0.19.12-x64-linux/cfw ./clash
```

通过这种方式，每次启动应用都使用这个软链接进行操作，当需要升级应用时，只需要创建新的软链接，指向新的启动文件。最后的效果如下：

```
$ tree . -L 1
.
├── clash -> ./Clash for Windows-0.19.12-x64-linux/cfw
├── Clash for Windows-0.19.12-x64-linux
└── Clash for Windows-0.19.2-x64-linux
```

- 添加桌面图标

```sh
vim ~/.local/share/applications/clw.desktop
```

添加以下内容：

```conf
[Desktop Entry]
Name=Clash for Linux
Icon=/home/emery/Applications/icon/clash_icon.png  # 替换为自己的目录
Comment=Clash for Linux
Exec="/home/emery/Applications/Clash/clash" %u  # 替换为自己的目录
Type=Application
Categories=Network
Terminal=false
StartupNotify=true
```

- 设置为手动

:::warning 注意
注意：设置手动后，如果没有开启 CLW（如重启后没有打开），没有切换回自动，系统会无法上网。
:::

![clash](/images/docs/guide/use/clash.png)

![proxy](/images/docs/guide/use/proxy.png)


- 安装插件后可在 dock 控制栏快速切换代理

![dock-proxy](/images/docs/guide/use/dock-proxy.png)


## 📡 Qv

已停止维护。[传送门](https://github.com/Qv2ray/Qv2ray)


## 🔮 CLV

[传送门](https://github.com/zzzgydi/clash-verge)
