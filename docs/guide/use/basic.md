---
title: 基础配置使用
---


```:no-line-numbers
 ________________
< 基础配置使用 >
 ----------------
        \   ^__^
         \  (==)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```




::: tip  提示
以下内容会带有本人使用习惯，仅作为一个参考，请根据自身情况选择。
:::


## 输入法

Ubuntu 安装中文时，会自带 `ibus` 输入法，若选择该输入法，推荐勾选内置词库 `设置 - 区域与语言 - 设置` 。

![ibus](/images/docs/guide/use/ibus.png)

当然，还可以选择以下输入法：

- [rime](https://rime.im/download/)

- [搜狗输入法](https://pinyin.sogou.com/linux?r=pinyin)

- [百度输入法](https://srf.baidu.com/site/guanwang_linux/index.html)


如果选择 `fcitx` 引擎输入法（如搜狗），安装完成后，需要将 `键盘输入法系统` 选择为 `fcitx`，注销 / 重启后生效。

![fcitx](/images/docs/guide/use/fcitx.png)

## 触摸板

如果使用的是笔记本，通常都会带有触控板。大部分触控板适配通常都不好，容易出现打字误触。推荐安装该插件：

[传送门➡️](https://extensions.gnome.org/extension/131/touchpad-indicator/)

[Github➡️](https://github.com/askmrsinh/touchpad-indicator#touchpadindicator)

可以给部分适配不好的触控板添加多点触控，或手动禁用触控板。

## zsh

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



## 字体

如果需要添加字体（如 windows 下的字体），可以将字体复制到 `~/.local/share/fonts` 目录下。再使用以下命令刷新字体缓存：

```sh
sudo fc-cache -f -v
```

Ubuntu 在某些软件内，可能 emoji 显示不正常，可以通过安装 emoji 字体解决：

```sh
sudo apt install fonts-noto-color-emoji
```
