import{_ as n,o as s,c as a,e}from"./app.a8171604.js";var i="/ubuntu-workstation-guide/images/docs/code/tool/rabbitmq/login.png",t="/ubuntu-workstation-guide/images/docs/code/tool/rabbitmq/homepage.jpg";const c={},l=e(`<div class="language-text ext-text"><pre class="language-text"><code> __________________________________
&lt; ubuntu \u4E2D\u5B89\u88C5 RabbitMQ \u6D88\u606F\u961F\u5217 &gt;
 ----------------------------------
        \\   ^__^
         \\  (\uFFFD)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
</code></pre></div><h2 id="apt-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#apt-\u5B89\u88C5" aria-hidden="true">#</a> APT \u5B89\u88C5</h2><p>\u5728 Ubuntu apt \u6E90\u4E2D\uFF0C\u5DF2\u7ECF\u5185\u7F6E\u4E86 RabbitMQ\u3002</p><p>RabbitMQ \u662F Erlang \u5F00\u53D1\u7684\uFF0C\u9664\u4E86\u6D88\u606F\u961F\u5217\u672C\u8EAB\u4E4B\u5916\u8FD8\u9700\u8981 Erlang \u73AF\u5883\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> erlang
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> rabbitmq-server

<span class="token function">sudo</span> rabbitmqctl status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\u9ED8\u8BA4\u6709\u4E24\u4E2A\u7AEF\u53E3\u540D\u88AB\u4F7F\u7528\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Listeners

Interface: <span class="token punctuation">[</span>::<span class="token punctuation">]</span>, port: <span class="token number">25672</span>, protocol: clustering, purpose: inter-node and CLI tool communication
Interface: <span class="token punctuation">[</span>::<span class="token punctuation">]</span>, port: <span class="token number">5672</span>, protocol: amqp, purpose: AMQP <span class="token number">0</span>-9-1 and AMQP <span class="token number">1.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5F00\u542F\u7BA1\u7406\u9762\u677F" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542F\u7BA1\u7406\u9762\u677F" aria-hidden="true">#</a> \u5F00\u542F\u7BA1\u7406\u9762\u677F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> rabbitmq-plugins <span class="token builtin class-name">enable</span> rabbitmq_management

<span class="token function">sudo</span> rabbitmqctl status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\u591A\u4E86\u4E00\u4E2A\u7BA1\u7406\u9762\u677F\uFF0C\u4F7F\u7528\u7684\u662FHTTP\u534F\u8BAE\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Listeners

Interface: <span class="token punctuation">[</span>::<span class="token punctuation">]</span>, port: <span class="token number">25672</span>, protocol: clustering, purpose: inter-node and CLI tool communication
Interface: <span class="token punctuation">[</span>::<span class="token punctuation">]</span>, port: <span class="token number">5672</span>, protocol: amqp, purpose: AMQP <span class="token number">0</span>-9-1 and AMQP <span class="token number">1.0</span>
Interface: <span class="token punctuation">[</span>::<span class="token punctuation">]</span>, port: <span class="token number">15672</span>, protocol: http, purpose: HTTP API
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7 IP \u8BBF\u95EE\u7BA1\u7406\u9875\u9762\uFF0C\u5982\u5728\u672C\u673A\u5B89\u88C5 <code>127.0.0.1:15672</code>\u3002\u5728\u670D\u52A1\u5668\u6216\u865A\u62DF\u673A\u5B89\u88C5\u66F4\u6362\u4E3A\u76F8\u5E94\u7684 IP\u3002</p><p><img src="`+i+'" alt="login"></p><h3 id="\u6DFB\u52A0\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u7528\u6237" aria-hidden="true">#</a> \u6DFB\u52A0\u7528\u6237</h3><p>\u9ED8\u8BA4\u7528\u6237 <code>guest - guest</code> \u53EA\u80FD localhost \u8BBF\u95EE\uFF0C\u975E\u672C\u5730\u5B89\u88C5\u9700\u8981\u6DFB\u52A0\u4E00\u4E2A\u7528\u6237\u3002</p><p><img src="'+t+`" alt="homepage"></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># add_user \u7528\u6237\u540D \u5BC6\u7801</span>
<span class="token function">sudo</span> rabbitmqctl add_user admin admin

<span class="token comment"># \u6743\u9650</span>
<span class="token function">sudo</span> rabbitmqctl set_user_tags admin administrator

<span class="token comment"># \u8D4B\u4E88virtual host\u4E2D\u6240\u6709\u8D44\u6E90\u7684\u914D\u7F6E\u3001\u5199\u3001\u8BFB\u6743\u9650\u4EE5\u4FBF\u7BA1\u7406\u5176\u4E2D\u7684\u8D44\u6E90</span>
<span class="token function">sudo</span> rabbitmqctl  set_permissions -p / admin <span class="token string">&#39;.*&#39;</span> <span class="token string">&#39;.*&#39;</span> <span class="token string">&#39;.*&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528-docker-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-docker-\u5B89\u88C5" aria-hidden="true">#</a> \u4F7F\u7528 Docker \u5B89\u88C5</h2>`,18),o=[l];function r(d,p){return s(),a("div",null,o)}var m=n(c,[["render",r],["__file","rabbitmq.html.vue"]]);export{m as default};
