---
title: Go
---

```:no-line-numbers
 ___________________________
< 在 ubuntu 中安装 GO 环境 >
 ---------------------------
        \   ^__^
         \  (**)\_______
            (__)\       )\/\
             U  ||----w |
                ||     ||
```

## PPA

```sh
sudo add-apt-repository ppa:longsleep/golang-backports
sudo apt update
sudo apt install golang-go
```

## snap

```sh
sudo snap install --classic go
```


## 参考

- https://github.com/golang/go/wiki/Ubuntu