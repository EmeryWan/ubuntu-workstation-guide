import{_ as i,M as r,p as c,q as l,R as e,t as s,N as a,a1 as d}from"./framework-96b046e1.js";const t={},o=d(`<div class="language-text" data-ext="text"><pre class="language-text"><code> ____________________________
&lt; 在 Ubuntu 中安装 Redis &gt;
 ----------------------------
        \\   ^__^
         \\  (..)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
</code></pre></div><h2 id="apt-安装" tabindex="-1"><a class="header-anchor" href="#apt-安装" aria-hidden="true">#</a> APT 安装</h2><p>在 ubuntu 的软件源中，已经包含了 Redis 数据库。</p><p>如果没有特别需求，用做日常或学习使用，可以直接用命令安装 Redis 数据库。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> redis-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用一下命令查看或管理 Redis 服务。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl status redis-server
<span class="token function">sudo</span> systemctl start redis-server
<span class="token function">sudo</span> systemctl stop redis-server
<span class="token function">sudo</span> systemctl restart redis-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="远程访问" tabindex="-1"><a class="header-anchor" href="#远程访问" aria-hidden="true">#</a> 远程访问</h3><p>修改 Reids 的配置文件 <code>/etc/redis/redis.conf</code>。并重启服务。</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code># 找到 bind 并修改

# bind 127.0.0.1
bind 0.0.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置密码" tabindex="-1"><a class="header-anchor" href="#设置密码" aria-hidden="true">#</a> 设置密码</h3><p><code>/etc/redis/redis.conf</code></p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>requirepass yourpassword
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="防火墙" tabindex="-1"><a class="header-anchor" href="#防火墙" aria-hidden="true">#</a> 防火墙</h4><p>如果有防火墙（如国内厂商的云服务器），打开 MySQL 服务器的端口号。默认为 <code>6379</code>。</p><h2 id="使用-docker-安装" tabindex="-1"><a class="header-anchor" href="#使用-docker-安装" aria-hidden="true">#</a> 使用 Docker 安装</h2>`,16),u={href:"https://hub.docker.com/_/redis",target:"_blank",rel:"noopener noreferrer"},p=d(`<ul><li>拉取镜像</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull redis
<span class="token comment"># 指定版本</span>
<span class="token function">docker</span> pull redis:6.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建容器并运行</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> docker-redis <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">16379</span>:6379 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-d</span> redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),h={href:"https://hub.docker.com/_/redis",target:"_blank",rel:"noopener noreferrer"},v=d(`<ul><li>使用容器命令行</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> docker-redis /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,3),b={href:"https://hub.docker.com/_/mysql?tab=description",target:"_blank",rel:"noopener noreferrer"};function _(m,k){const n=r("ExternalLinkIcon");return c(),l("div",null,[o,e("p",null,[e("a",u,[s("dockerhub Redis 地址 🔗"),a(n)]),s("。可从此处获取一下说明，使用提示，镜像版本信息等。")]),p,e("p",null,[s("更多参数请参考 "),e("a",h,[s("dockerhub Redis 🔗"),a(n)]),s("。")]),v,e("ul",null,[e("li",null,[s("🔗 "),e("a",b,[s("https://hub.docker.com/_/mysql?tab=description"),a(n)])])])])}const g=i(t,[["render",_],["__file","redis.html.vue"]]);export{g as default};
