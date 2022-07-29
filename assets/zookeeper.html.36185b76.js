import{_ as l,o as r,c as d,a as e,b as a,d as n,e as i,r as c}from"./app.a8171604.js";const o={},t=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,` ____________________________
< \u5728 Ubuntu \u4E2D\u5B89\u88C5 ZooKeeper >
 ----------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`)])],-1),v=e("h2",{id:"\u5B89\u88C5\u6587\u4EF6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5B89\u88C5\u6587\u4EF6","aria-hidden":"true"},"#"),n(" \u5B89\u88C5\u6587\u4EF6")],-1),u={href:"https://zookeeper.apache.org/releases.html",target:"_blank",rel:"noopener noreferrer"},p=n("ZooKeeper Releases"),b=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u89E3\u538B</span>
<span class="token function">tar</span> -xzvf <span class="token variable">\${DOWNLOAD_PATH}</span>/apache-zookeeper-3.5.9-bin.tar.gz -C <span class="token variable">\${YOUR_PATH}</span>/apache-zookeeper-3.5.9

<span class="token comment"># \u590D\u5236\u914D\u7F6E\u6587\u4EF6</span>
<span class="token comment"># \u5728 conf/ \u4E0B\u6709\u914D\u7F6E\u793A\u4F8B\u6587\u4EF6</span>
<span class="token builtin class-name">cd</span> <span class="token variable">\${YOUR_PATH}</span>/apache-zookeeper-3.5.9/conf
<span class="token function">cp</span> zoo_sample.cfg zoo.cfg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u542F\u52A8 \u505C\u6B62</span>
<span class="token variable">\${YOUR_PATH}</span>/bin/zkServer.sh start
<span class="token variable">\${YOUR_PATH}</span>/bin/zkServer.sh stop

<span class="token comment"># \u72B6\u6001</span>
<span class="token variable">\${YOUR_PATH}</span>/bin/zkServer.sh status

<span class="token comment"># zkCli</span>
<span class="token variable">\${YOUR_PATH}</span>/bin/zkCli.sh -server <span class="token number">127.0</span>.0.1:2181
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528-docker-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-docker-\u5B89\u88C5" aria-hidden="true">#</a> \u4F7F\u7528 Docker \u5B89\u88C5</h2>`,3),m={href:"https://hub.docker.com/_/zookeeper",target:"_blank",rel:"noopener noreferrer"},_=n("dockerhub ZooKeeper \u5730\u5740 \u{1F517}"),h=n("\u3002"),k=i(`<ul><li>\u62C9\u53D6\u955C\u50CF</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> pull zookeeper:3.5.9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u521B\u5EFA\u5BB9\u5668\u5E76\u8FD0\u884C</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run --name zookeeper-docker <span class="token punctuation">\\</span>
    -d <span class="token punctuation">\\</span> 
    -p <span class="token number">2181</span>:2181 <span class="token punctuation">\\</span>
    zookeeper:3.5.9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Zookeeper</code> \u914D\u7F6E\u6587\u4EF6\u76EE\u5F55\u5728 <code>/conf</code>\uFF0C\u53EF\u4EE5\u6302\u8F7D\u672C\u5730\u76EE\u5F55\u8FDB\u884C\u914D\u7F6E\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run --name zookeeper-docker -d <span class="token punctuation">\\</span>
    -v <span class="token variable">\${YOUR_PATH}</span>/zoo.cfg:/conf/zoo.cfg
    -p <span class="token number">2181</span>:2181 <span class="token punctuation">\\</span>
    zookeeper:3.5.9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528\u5BB9\u5668\u547D\u4EE4\u884C</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run -it zookeeper-docker /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="zoo-cfg" tabindex="-1"><a class="header-anchor" href="#zoo-cfg" aria-hidden="true">#</a> zoo.cfg</h2><div class="language-cfg ext-cfg line-numbers-mode"><pre class="language-cfg"><code># \u5355\u4F4D\uFF1A\u6BEB\u79D2\u4E3A\u3002
# \u5FC3\u8DF3\u65F6\u95F4\u3002\u6700\u5C0F\u4F1A\u8BDD\u8D85\u65F6\u662F tickTime \u7684\u4E24\u500D\u3002
tickTime = 2000
initLimit = 10
syncLimit = 5

# \u6570\u636E\u76EE\u5F55\uFF0C\u5185\u5B58\u6570\u636E\u5E93\u5FEB\u7167
dataDir = /YOUR_PATH/zookeeper/data/

# \u5BA2\u6237\u7AEF\u8FDE\u63A5\u7684\u7AEF\u53E3
clientPort = 2181

# \u914D\u7F6E\u96C6\u7FA4
# \u9700\u8981\u6CE8\u610F\uFF1A\u8FD9\u91CC server.1 \u5176\u4E2D\u7684 1 \u662F\u6307 myid \u6587\u4EF6\u4E2D\u7684\u503C
# \u5B83\u7684\u4F5C\u7528\u662F\u6807\u8BC6 zk \u7684\u5E8F\u53F7\uFF0C\u7B80\u5355\u8BF4\u9700\u8981\u5728 dataDir \u76EE\u5F55\u4E0B \u5B58\u5728\u4E00\u4E2A myid \u6587\u4EF6
# \u91CC\u9762\u5199\u4E0A zk \u7684 id\uFF0C\u8FD9\u6837\u4ED6\u4EEC\u624D\u80FD\u7EC4\u6210\u4E00\u4E2A\u96C6\u7FA4
server.1=127.0.0.1:2888:3888
server.2=127.0.0.1:2889:3889
server.3=127.0.0.1:2890:3890
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53EF\u89C6\u5316\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u53EF\u89C6\u5316\u5DE5\u5177" aria-hidden="true">#</a> \u53EF\u89C6\u5316\u5DE5\u5177</h2><p>\u57FA\u4E8E Apache Curator \u548C JavaFX \u5B9E\u73B0\u7684 Zookeeper \u56FE\u5F62\u5316\u7BA1\u7406\u5BA2\u6237\u7AEF\u3002</p>`,12),g={href:"https://github.com/vran-dev/PrettyZoo",target:"_blank",rel:"noopener noreferrer"},f=n("vran-dev/PrettyZoo");function z(x,P){const s=c("ExternalLinkIcon");return r(),d("div",null,[t,v,e("p",null,[e("a",u,[p,a(s)])]),b,e("p",null,[e("a",m,[_,a(s)]),h]),k,e("p",null,[e("a",g,[f,a(s)])])])}var A=l(o,[["render",z],["__file","zookeeper.html.vue"]]);export{A as default};
