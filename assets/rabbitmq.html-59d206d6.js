import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t="/ubuntu-workstation-guide/images/docs/code/tool/rabbitmq/login.png",i="/ubuntu-workstation-guide/images/docs/code/tool/rabbitmq/homepage.jpg",c={},l=e(`<div class="language-text" data-ext="text"><pre class="language-text"><code> __________________________________
&lt; ubuntu 中安装 RabbitMQ 消息队列 &gt;
 ----------------------------------
        \\   ^__^
         \\  (�)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
</code></pre></div><h2 id="apt-安装" tabindex="-1"><a class="header-anchor" href="#apt-安装" aria-hidden="true">#</a> APT 安装</h2><p>在 Ubuntu apt 源中，已经内置了 RabbitMQ。</p><p>RabbitMQ 是 Erlang 开发的，除了消息队列本身之外还需要 Erlang 环境。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> erlang
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> rabbitmq-server

<span class="token function">sudo</span> rabbitmqctl status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到默认有两个端口名被使用：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Listeners

Interface: <span class="token punctuation">[</span>::<span class="token punctuation">]</span>, port: <span class="token number">25672</span>, protocol: clustering, purpose: inter-node and CLI tool communication
Interface: <span class="token punctuation">[</span>::<span class="token punctuation">]</span>, port: <span class="token number">5672</span>, protocol: amqp, purpose: AMQP <span class="token number">0</span>-9-1 and AMQP <span class="token number">1.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开启管理面板" tabindex="-1"><a class="header-anchor" href="#开启管理面板" aria-hidden="true">#</a> 开启管理面板</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> rabbitmq-plugins <span class="token builtin class-name">enable</span> rabbitmq_management

<span class="token function">sudo</span> rabbitmqctl status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到多了一个管理面板，使用的是HTTP协议：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Listeners

Interface: <span class="token punctuation">[</span>::<span class="token punctuation">]</span>, port: <span class="token number">25672</span>, protocol: clustering, purpose: inter-node and CLI tool communication
Interface: <span class="token punctuation">[</span>::<span class="token punctuation">]</span>, port: <span class="token number">5672</span>, protocol: amqp, purpose: AMQP <span class="token number">0</span>-9-1 and AMQP <span class="token number">1.0</span>
Interface: <span class="token punctuation">[</span>::<span class="token punctuation">]</span>, port: <span class="token number">15672</span>, protocol: http, purpose: HTTP API
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 IP 访问管理页面，如在本机安装 <code>127.0.0.1:15672</code>。在服务器或虚拟机安装更换为相应的 IP。</p><p><img src="`+t+'" alt="login"></p><h3 id="添加用户" tabindex="-1"><a class="header-anchor" href="#添加用户" aria-hidden="true">#</a> 添加用户</h3><p>默认用户 <code>guest - guest</code> 只能 localhost 访问，非本地安装需要添加一个用户。</p><p><img src="'+i+`" alt="homepage"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># add_user 用户名 密码</span>
<span class="token function">sudo</span> rabbitmqctl add_user admin admin

<span class="token comment"># 权限</span>
<span class="token function">sudo</span> rabbitmqctl set_user_tags admin administrator

<span class="token comment"># 赋予virtual host中所有资源的配置、写、读权限以便管理其中的资源</span>
<span class="token function">sudo</span> rabbitmqctl  set_permissions <span class="token parameter variable">-p</span> / admin <span class="token string">&#39;.*&#39;</span> <span class="token string">&#39;.*&#39;</span> <span class="token string">&#39;.*&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-docker-安装" tabindex="-1"><a class="header-anchor" href="#使用-docker-安装" aria-hidden="true">#</a> 使用 Docker 安装</h2>`,18),o=[l];function d(r,p){return s(),a("div",null,o)}const m=n(c,[["render",d],["__file","rabbitmq.html.vue"]]);export{m as default};
