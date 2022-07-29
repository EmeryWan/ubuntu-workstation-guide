---
title: 📭 Nginx
sidebarDepth: 1
---

```:no-line-numbers
 ________________________________
< 在 ubuntu 中安装 Nginx 服务器 >
 --------------------------------
        \   ^__^
         \  (==)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

## APT 安装

```
sudo apt install nginx
```

## ZIP

[下载地址](https://nginx.org/)

## 使用 Docker 安装

```
docker pull nginx
```

启动容器

```
docker run --name some-nginx -v /some/content:/usr/share/nginx/html:ro -d nginx
```
