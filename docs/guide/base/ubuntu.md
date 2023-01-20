---
title: 常用内容
sidebarDepth: 1
---



```:no-line-numbers
 ___________
< 常用内容 >
 -----------
        \   ^__^
         \  (..)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```



# 常用内容

::: tip 提示
本节内容主要介绍一些在日常使用时，经常需要的内容。持续更新中。
:::



## 🍿 快速打开/关闭终端

快速打开快捷键：`ctrl + alt + t`

快速关闭快捷键：`ctrl + d`

## 🍪 在文件管理器中查看隐藏内容

以 `.` 开头的文件和文件夹通常会被隐藏，可以通过 `ctrl + h` 显示或隐藏这些内容。

## 🍩 终端使用代理

由于一些网络原因，有时候使用终端时，需要利用代理获得更好的体验，可以使用以下命令：

```sh
# 端口号请更改为实际端口号
export https_proxy=http://127.0.0.1:7890;export http_proxy=http://127.0.0.1:7890;export all_proxy=socks5://127.0.0.1:7890

# 取消代理
unset http_proxy;unset https_proxy;unset all_proxy
```

可以加该命令起一个别名，放入配置文件中，方式使用。

根据使用的终端，`zsh -> ~/.zshrc`，`bash -> ~/.bashrc` 中进行添加：

```sh
# 可根据喜好取别名的名称
alias exp="export https_proxy=http://127.0.0.1:7890;export http_proxy=http://127.0.0.1:7890;export all_proxy=socks5://127.0.0.1:7890"
```

配置完成后，`source .zhsrc / source .bashrc`，即可通过 `exp` 执行以上命令。


## 🍯 其他

想到了再加。。。

