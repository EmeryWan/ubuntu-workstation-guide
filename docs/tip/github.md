---
title: github 国内加速
---


```:no-line-numbers
 ____________________________
< 国内加速 Github 的技巧 >
 ----------------------------
        \   ^__^
         \  (..)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```



## 介绍

国内的网络环境使用 `Github` 不太友好。我们可以通过修改 `host` 的方式加速 `GitHub` 访问，解决图片无法加载以及访问速度慢的问题。

这个项目中 [GitHub520](https://github.com/521xueweihan/GitHub520)，提供了最新的 `GitHub hosts` 地址。

## 使用

这里推荐使用 [`SwitchHosts`](https://github.com/oldj/SwitchHosts) 配置 `hosts`，操作简单，支持跨平台。

::: warning 🚧 注意
请注意是要使用 **追加** 还是 **覆盖** 模式，以免本地 hosts 丢失。
:::

![type](/images/docs/tip/github/type.png)


具体操作步骤，添加一条规则：

- 类型：**远程**

- 方案名：GitHub（可以自行命名）

- URL 地址：（三选一）
  - https://raw.hellogithub.com/hosts

- 自动更新：1个小时（推荐）

![add](/images/docs/tip/github/add.png)

::: tip  提示
SwitchHost 当前（V4.1.1）版本 Linux 图片不能正常显示，下一个版本会修复。
需要显示图片可修改 `.desktop` 文件或拉取最新代码编译。
:::

## 参考

- 🔗 https://github.com/521xueweihan/GitHub520
