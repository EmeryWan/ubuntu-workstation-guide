---
title: 进阶使用
---


```:no-line-numbers
 ____________
< 进阶使用 >
 ------------
        \   ^__^
         \  (**)\_______
            (__)\       )\/\
             U  ||----w |
                ||     ||
```


## 使用英文目录

如果使用中文安装，用户目录下的目录名称都是中文的，如：`桌面，文档，下载` 等等，如果有终端操作，切换目录还是挺麻烦的，推荐将其改成英文的。

可以使用如下命令更改：

```sh
export LANG=en_US
xdg-user-dirs-gtk-update
```

更改后，可能会有弹窗询问是否要根据系统语言更改目录，选择保留英文即可。



## swap

休眠

## Gnome 插件

本指南主要是介绍 `Gnome` 桌面的 `Ubuntu` 系统。该插件是 `Gnome` 桌面下的插件。

为有一个更加易用的系统，安装插件可以方便我们的使用。

这里介绍使用使用浏览器安装扩展插件，虽然在 `apt` 中也能安装，但是只能获取到一部分，且版本较老。

你可以在 [Gnome extensions](https://extensions.gnome.org/) 查看到所有的插件。

- 安装插件本地连接器

```sh
sudo apt install chrome-gnome-shell
```

- 安装浏览器扩展插件

[Chrome](https://chrome.google.com/webstore/detail/gnome-shell-integration/gphhapmejobijbbhgpjhcjognlahblep)

[Firefox](https://addons.mozilla.org/en-US/firefox/addon/gnome-shell-integration/)

如果没有合适的网络在 Chrome 中安装插件，推荐在 Firefox 中安装。

- 安装插件管理器

```sh
sudo apt install gnome-tweak
```

- 根据需求安装插件

插件的安装位置在：`~/.local/share/gnome-shell/extensions`

这里推荐一些常用的插件，请按需选择：

|插件|功能|
|:-:|:-:|
|[User Themes](https://extensions.gnome.org/extension/19/user-themes/)|从用户目录加载 shell 主题。|
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

在 [Gnome extensions](https://extensions.gnome.org/) 可以找到很多实用的插件，如有使用 Docker 的话，也能找到管理 Docker 容器和镜像的[插件](https://extensions.gnome.org/extension/5103/docker/)，请根据需要查找。


## 终端

配置好一个终端，可已让我们在使用的过程中更加方便。我通常会使用 [oh-my-zsh](https://ohmyz.sh/)。

当然有很多选择如：[fishshell](https://fishshell.com/)，[powerlevel10k](https://github.com/romkatv/powerlevel10k)，可以选择自己喜欢的进行配置。这里主要介绍 `oh-my-zsh` 的安装。

```sh
# 安装 zsh
sudo apt install zsh

# oh-my-zsh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
# 或
sh -c "$(wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"

# 更改默认终端为 zsh
sudo chsh -s $(which zsh)
```

安装完成后，可以通过 `~/.zshrc` 配置主题，插件，环境变量等内容。

### oh-my-zsh 插件

oh-my-zsh 也可以安装插件来获取更好的使用体验，插件推荐可参考：[传送门](https://www.zhihu.com/question/49284484)。

安装插件的主要方式是克隆相应的仓库到 `oh-my-zsh/custom/plugins` 下，并在配置文件中配置。以下为举例：

```sh
# 获取插件
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

# 在 .zshrc 中配置
plugins=(
     git
     extract
     zsh-autosuggestions
     zsh-syntax-highlighting
)
```


## KDE Connect

使用 [KDE Connect](https://kdeconnect.kde.org/) 可以在电脑上接收手机信息和控制手机，并且这是一个跨平台应用，十分方便。

在 Gnome 桌面中，需要以[扩展插件](https://extensions.gnome.org/extension/1319/gsconnect/)的方式安装。

具体使用请参考：[使用方式](https://arch.icekylin.online/apps/collaboration.html#%F0%9F%94%97-kde-connect)

## 参考

- 🔗 [https://linux.cn/article-9447-1.html](https://linux.cn/article-9447-1.html)
