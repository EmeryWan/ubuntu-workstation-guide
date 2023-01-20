---
title: 进阶配置使用
sidebarDepth: 1
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


## 🥛 使用英文目录

如果使用中文安装，用户目录下的目录名称都是中文的，如：`桌面，文档，下载` 等等，如果有终端操作，切换目录还是挺麻烦的，推荐将其改成英文。

```sh
export LANG=en_US
xdg-user-dirs-gtk-update
```

更改后，可能会有弹窗询问是否要根据系统语言更改目录，选择保留英文。



## 🍵 swapfile


## 🍹 SSH 远程连接



## 🍾 美化终端

配置好一个终端，可已让我们在使用的过程中更加方便。通常我会使用 [oh-my-zsh](https://ohmyz.sh/)。

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


## 🥃 KDE Connect

使用 [KDE Connect](https://kdeconnect.kde.org/) 可以在电脑上接收手机信息和控制手机，并且这是一个跨平台应用，十分方便。

在 Gnome 桌面中，需要以[扩展插件](https://extensions.gnome.org/extension/1319/gsconnect/)的方式安装。

具体使用请参考：[使用方式](https://arch.icekylin.online/apps/collaboration.html#%F0%9F%94%97-kde-connect)




## 🥤 参考

- 🔗 [https://linux.cn/article-9447-1.html](https://linux.cn/article-9447-1.html)

