import{_ as t,M as r,p as d,q as i,R as e,t as s,N as _,a1 as n}from"./framework-96b046e1.js";const c={},l=n(`<div class="language-text" data-ext="text"><pre class="language-text"><code> ________________________________
&lt; 在 ubuntu 中安装 Nginx 服务器 &gt;
 --------------------------------
        \\   ^__^
         \\  (==)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
</code></pre></div><h2 id="apt-安装" tabindex="-1"><a class="header-anchor" href="#apt-安装" aria-hidden="true">#</a> APT 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt install nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="zip" tabindex="-1"><a class="header-anchor" href="#zip" aria-hidden="true">#</a> ZIP</h2>`,4),o={href:"https://nginx.org/",target:"_blank",rel:"noopener noreferrer"},u=n(`<h2 id="使用-docker-安装" tabindex="-1"><a class="header-anchor" href="#使用-docker-安装" aria-hidden="true">#</a> 使用 Docker 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run --name some-nginx -v /some/content:/usr/share/nginx/html:ro -d nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4);function x(h,g){const a=r("ExternalLinkIcon");return d(),i("div",null,[l,e("p",null,[e("a",o,[s("下载地址"),_(a)])]),u])}const m=t(c,[["render",x],["__file","nginx.html.vue"]]);export{m as default};
