---
title: 美化
---


```:no-line-numbers
 _________
< 美化 >
 ---------
        \   ^__^
         \  (==)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

::: tip 📝 写在最前
每个人使用 Ubuntu 的目的不同。一些人热衷于折腾桌面，以获取使用上的体验；有些人只是作为服务器使用，不对界面有要求。怎么折腾，都是每个人自己的选择。

我不太在意使用的桌面，这里只是简单美化一下。

如果你也一样不太在意这个，可以不在美化上花费过多的时间。少折腾系统配置，多折腾效率工具，系统只是个工具。
:::




Gnome 桌面有一个专门的主题网站，可以在这里找到非常多优秀的主题：[https://www.gnome-look.org](https://www.gnome-look.org)


```sh
# gnome-tweaks 主题管理工具 
sudo apt install -y gnome-tweaks 
```


下面的内容只是简单介绍一下只美化主题、图标、鼠标指针等。

::: danger 警告 🚧 

如果你是新手，建议尽量不要美化 GRUB，以免引起不必要的麻烦。

:::

## 🌷 Gnome 扩展

安装扩展可以方便我们的使用。你可以在 [Gnome extensions](https://extensions.gnome.org/) 查看到所有的 Gnome 扩展。



- [安装插件本地连接器](https://wiki.gnome.org/Projects/GnomeShellIntegration/Installation)


```sh
sudo apt install chrome-gnome-shell
```

::: tip 💡 提示
在不久的将来，chrome-gnome-shell 会被更名为 gnome-browser-connector，请参考 [wiki](https://wiki.gnome.org/Projects/GnomeShellIntegration/Installation)
:::


- 安装浏览器扩展插件

在 [Chrome](https://chrome.google.com/webstore/detail/gnome-shell-integration/gphhapmejobijbbhgpjhcjognlahblep) 中安装。

如果你没有合适的网络在 Chrome 中安装插件，可以在 Firefox 中安装。

在 [Firefox](https://addons.mozilla.org/en-US/firefox/addon/gnome-shell-integration/) 中安装。


- 根据需求安装插件

在 PPA 中，也内置了一部分常用的插件，你可以通过 `sudo apt install gnome-shell-extensions` 安装。（注意：通过该方式安装过的插件，无法下面的方式更新）

在 [Gnome extensions](https://extensions.gnome.org/) 可通过网页上的开关按钮，轻松添加插件。插件将会被安装在：`~/.local/share/gnome-shell/extensions`

这里推荐一些常用的插件，请按需选择：

|插件|功能|
|:-|:-|
|[User Themes](https://extensions.gnome.org/extension/19/user-themes/)|从用户目录加载 [shell 主题](https://ubuntu.letout.cn/guide/use/beauty.html#%F0%9F%8C%BC-Shell-%E4%B8%BB%E9%A2%98)|
|[Appindicator Support](https://extensions.gnome.org/extension/615/appindicator-support/)|向 Shell 添加 AppIndicator、KStatusNotifierItem 和旧版托盘图标支持|
|[Removable Drive Menu](https://extensions.gnome.org/extension/7/removable-drive-menu/)|访问和卸载可移动设备的状态菜单。|
|[caffeine](https://extensions.gnome.org/extension/517/caffeine/)|禁用屏幕保护程序。|
|[Sound Input & Output Device Chooser](https://extensions.gnome.org/extension/906/sound-output-device-chooser/)|快速切换音频输入输出设备。|
|[OpenWeather](https://extensions.gnome.org/extension/750/openweather/)|在 GNOME Shell 中显示地球上任何位置的天气信息|
|[Clipboard Indicator](https://extensions.gnome.org/extension/779/clipboard-indicator/)|Gnome-Shell 的剪贴板管理器扩展 - 将剪贴板指示器添加到顶部面板，并缓存剪贴板历史记录。|
|[Dash to Panel](https://extensions.gnome.org/extension/1160/dash-to-panel/)|Gnome Shell 的图标任务栏。|
|[Dash to Dock](https://extensions.gnome.org/extension/307/dash-to-dock/)|Gnome Shell 的扩展坞。|
|[Simple net speed](https://extensions.gnome.org/extension/1085/simple-net-speed/)|显示实时网速。|
|[Blyr](https://extensions.gnome.org/extension/1251/blyr/)|毛玻璃效果。|
|[proxy-switcher](https://extensions.gnome.org/extension/771/proxy-switcher/)|在网络设置中定义的系统代理设置配置文件之间切换。|


在 [Gnome extensions](https://extensions.gnome.org/) 可以找到很多实用的插件，如有使用 Docker 的话，也能找到管理 Docker 容器和镜像的[插件](https://extensions.gnome.org/extension/5103/docker/)，请根据需要安装。



## 💐 主题

将下载的主题移动到 `${HOME}/.themes` 文件夹下，即可通过 gnome-tweaks 选择自定义主题。

![theme](/images/docs/guide/use/theme.png)

## 🌺 图标

将下载的图标主题移动到 `${HOME}/.icons` 文件夹下，即可通过 gnome-tweaks 选择自定义图标。

推荐一个常用的图标主题 [🦶 papirus-icon-theme](https://github.com/PapirusDevelopmentTeam/papirus-icon-theme)，可以通过 PPA 进行安装。

![papirus](/images/docs/guide/use/papirus.png)

```sh
sudo add-apt-repository ppa:papirus/papirus
sudo apt-get update
sudo apt-get install papirus-icon-theme
```


## 🌼 鼠标指针

将下载的鼠标指针主题移动到 `${HOME}/.icons` 文件夹下，即可通过 gnome-tweaks 选择自定义鼠标指针。



## 🌼 Shell 主题

Shell 主题是对顶栏和 dock 栏配置主题。

如果出现 ⚠ 无法设置，请按上文安装 Gnome 扩展，并打开 [User Theme](https://extensions.gnome.org/extension/19/user-themes/) 扩展。


## 🌻 QT 应用

Linux 下很多应用会基于 QT 开发，如 `Oracle VM VirualBox`，`VLC 播放器`，同样可以在 GTK 桌面下统一更改这些软件的风格。

```sh
# qt application theme
sudo apt install -y qt5ct qt5-style-kvantum
```

在 Kvantum 中选择需要更改的主题样式：

![kvantum](/images/docs/guide/use/kvantum.png)

再到 Qt5 配置工具中激活 Kvantum:

![qt5ct](/images/docs/guide/use/qt5ct.png)


## 🪷 其他

如果您使用的 KDE 桌面，可以参考 [arch.icekylin.online](https://arch.icekylin.online/advanced/beauty-1.html) 的内容。
