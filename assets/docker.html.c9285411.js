import{_ as c,r as o,o as l,c as t,a as n,b as a,d as s,e as i}from"./app.53139165.js";var d="/ubuntu-workstation-guide/images/docs/code/install/docker/docker-desktop.png";const r={},p=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,` _________________________
< ubuntu \u4E2D\u5B89\u88C5 Docker >
 -------------------------
        \\   ^__^
         \\  (\uFFFD)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`)])],-1),u=n("h2",{id:"\u4ECE-apt-\u5B89\u88C5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4ECE-apt-\u5B89\u88C5","aria-hidden":"true"},"#"),s(" \u4ECE apt \u5B89\u88C5")],-1),v=n("p",null,[s("\u5728 "),n("code",null,"ubuntu"),s(" \u8F6F\u4EF6\u6E90\u4E2D\u5DF2\u7ECF\u5305\u542B\u4E86 "),n("code",null,"Docker"),s(" \u7684\u76F8\u5173\u8F6F\u4EF6\u5305\u3002\u8FD9\u4E9B\u8F6F\u4EF6\u5305\u4E0D\u662F\u6700\u65B0\u7248\u672C\uFF0C\u4F46\u76F8\u5BF9\u6765\u8BF4\u7248\u672C\u4E5F\u6BD4\u8F83\u9760\u524D\uFF0C\u5B8C\u5168\u591F\u5E73\u5E38\u7684\u4F7F\u7528\u548C\u5B66\u4E60\u3002")],-1),k=s("\u5982\u679C\u6709\u7279\u6B8A\u8981\u6C42\uFF0C\u53EF\u4EE5\u901A\u8FC7"),m={href:"https://docs.docker.com/engine/install/ubuntu/",target:"_blank",rel:"noopener noreferrer"},b=s("\u5B98\u7F51\u6587\u6863"),h=s("\u4E86\u89E3\u66F4\u591A\u3002"),g=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">docker</span> docker.io <span class="token function">docker-compose</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u4E0D\u60F3\u6DFB\u52A0 <code>sudo</code> \u4F7F\u7528\u76F8\u5173\u547D\u4EE4\uFF0C\u53EF\u4EE5\u5C06\u5F53\u524D\u7528\u6237\u52A0\u5165 <code>docker</code> \u7528\u6237\u7EC4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521B\u5EFA docker \u7528\u6237\u7EC4</span>
<span class="token function">sudo</span> <span class="token function">groupadd</span> <span class="token function">docker</span>

<span class="token comment"># \u5C06\u5F53\u524D\u7528\u6237\u52A0\u5165 docker \u7528\u6237\u7EC4</span>
<span class="token function">sudo</span> <span class="token function">usermod</span> -aG <span class="token function">docker</span> <span class="token variable">\${<span class="token environment constant">USER</span>}</span>

<span class="token comment"># \u6CE8\u9500\u91CD\u65B0\u767B\u5F55\uFF0C\u6216\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u6FC0\u6D3B\u6539\u53D8\u7684\u7528\u6237\u7EC4</span>
newgrp <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4ECE-docker-\u5B98\u65B9\u6E90\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u4ECE-docker-\u5B98\u65B9\u6E90\u5B89\u88C5" aria-hidden="true">#</a> \u4ECE Docker \u5B98\u65B9\u6E90\u5B89\u88C5</h2><p>\u5982\u679C\u60F3\u8981\u83B7\u53D6\u6700\u8FD1\u7684 <code>Docker</code> \u7248\u672C\uFF0C\u9700\u8981\u6DFB\u52A0\u5B98\u7F51 <code>apt</code> \u6E90\u3002\u9274\u4E8E\u56FD\u5185\u7F51\u7EDC\u95EE\u9898\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u4F7F\u7528\u56FD\u5185\u6E90\u3002</p><ul><li>\u5378\u8F7D\u65E7\u7248\u672C\uFF08\u82E5\u6709\uFF09</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> remove <span class="token function">docker</span> <span class="token punctuation">\\</span>
            docker-engine <span class="token punctuation">\\</span>
            docker.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6DFB\u52A0\u4F7F\u7528 HTTPS \u4F20\u8F93\u7684\u8F6F\u4EF6\u5305\u4EE5\u53CA CA \u8BC1\u4E66\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update

<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
    apt-transport-https <span class="token punctuation">\\</span>
    ca-certificates <span class="token punctuation">\\</span>
    <span class="token function">curl</span> <span class="token punctuation">\\</span>
    gnupg <span class="token punctuation">\\</span>
    lsb-release
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6DFB\u52A0\u8F6F\u4EF6\u6E90\u7684 GPG \u5BC6\u94A5\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg <span class="token operator">|</span> <span class="token function">sudo</span> gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

<span class="token comment"># \u5B98\u65B9\u6E90</span>
<span class="token comment"># curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5411 sources.list \u4E2D\u6DFB\u52A0 Docker \u8F6F\u4EF6\u6E90</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span>
<span class="token string">&quot;deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://mirrors.aliyun.com/docker-ce/linux/ubuntu \\
<span class="token variable"><span class="token variable">$(</span>lsb_release -cs<span class="token variable">)</span></span> stable&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/docker.list <span class="token operator">&gt;</span> /dev/null

<span class="token comment"># \u5B98\u65B9\u6E90</span>
<span class="token comment"># echo \\</span>
<span class="token comment">#   &quot;deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \\</span>
<span class="token comment">#   $(lsb_release -cs) stable&quot; | sudo tee /etc/apt/sources.list.d/docker.list &gt; /dev/null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5B89\u88C5</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update

<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> docker-ce docker-ce-cli containerd.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E38\u89C1\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u89C1\u547D\u4EE4</h2><h3 id="\u955C\u50CF\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#\u955C\u50CF\u76F8\u5173" aria-hidden="true">#</a> \u955C\u50CF\u76F8\u5173</h3><ul><li>\u{1F50D} \u641C\u7D22</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> search mysql

<span class="token comment"># \u5B98\u65B9\u955C\u50CF</span>
<span class="token function">docker</span> search --filter<span class="token operator">=</span>is-offical<span class="token operator">=</span>true mysql

<span class="token comment"># Stars \u8D85\u8FC7 100</span>
<span class="token function">docker</span> search --filter<span class="token operator">=</span>stars<span class="token operator">=</span><span class="token number">100</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u23EC \u4E0B\u8F7D</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> pull mysql:5.7

<span class="token function">docker</span> pull docker.io/mysql:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u{1F4BB} \u4FE1\u606F</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> images

<span class="token function">docker</span> image <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u274C \u5220\u9664</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># docker rmi [Id]/[\u955C\u50CF\u540D]</span>
<span class="token function">docker</span> image rmi ee7cbd482336

<span class="token function">docker</span> rmi <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images -q<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5BB9\u5668\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#\u5BB9\u5668\u76F8\u5173" aria-hidden="true">#</a> \u5BB9\u5668\u76F8\u5173</h3><ul><li>\u{1F4BB} \u542F\u52A8</li></ul><p>\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5BB9\u5668\uFF0C\u5E38\u7528\u53C2\u6570\u6709:</p><blockquote><p>-d --detach=false \u6307\u5B9A\u540E\u53F0\u8FD0\u884C</p><p>-i --interactive=false \u4EA4\u4E92\u8FD0\u884C\uFF0C\u6253\u5F00STDIN (-it)</p><p>-t --tty=false \u5206\u914Dtty</p><p>-P --public-all=false \u968F\u673A\u5206\u914D\u6620\u5C04\u7AEF\u53E3</p><p>-p --publish=[] \u5BBF\u4E3B\u673A:\u5BB9\u5668</p><p>-e --env=[] \u6307\u5B9A\u73AF\u5883\u53D8\u91CF</p><p>-v --volume=[] \u6302\u8F7D\u50A8\u5B58\u5377</p><p>-w --workdir=&quot;&quot; \u6307\u5B9A\u5BB9\u5668\u7684\u5DE5\u4F5C\u76EE\u5F55</p><p>--name thisname \u5206\u914D\u5BB9\u5668\u540D</p><p>--rm \u5BB9\u5668\u505C\u6B62\u540E\u5220\u9664\uFF08\u4E0D\u652F\u6301 docker run -d\uFF09</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run --name mynginx <span class="token punctuation">\\</span>
            -p <span class="token number">11180</span>:80 <span class="token punctuation">\\</span>          <span class="token comment"># \u6620\u5C04\u5BB9\u566880\u7AEF\u53E3\u523011180 (TCP)</span>
            -p <span class="token number">11180</span>:80/udp <span class="token punctuation">\\</span>      <span class="token comment"># UDP</span>
            -v /var/docker/nginx:/data <span class="token punctuation">\\</span>       <span class="token comment"># \u5C06\u5BB9\u5668/data\u76EE\u5F55\u6302\u8F7D\u5230/var/docker/nginx</span>
            -d nginx:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u{1F468}\u200D\u{1F4BB} \u8FDB\u5165</li></ul><p>\u8FDB\u5165\u5BB9\u5668\uFF0C\u5728\u8FD0\u884C\u7684\u5BB9\u5668\u4E2D\u6267\u884C\u547D\uFF0C\u4F7F\u7528 <code>docker exec -it</code></p><blockquote><p>-i --interactive=false \u4EA4\u4E92\u8FD0\u884C -t --tty=false \u5206\u914Dtty</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it mynginx /bin/bash

<span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it 7960423d62b8 python

<span class="token comment"># \u4EE5\u4EA4\u4E92\u7684\u65B9\u5F0F\u6267\u884C\u5BB9\u5668\u4E2D\u7684 /root/run.sh \u811A\u672C</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it mynginx /bin/sh /root/run.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u274C \u5220\u9664</li></ul><p>\u53EF\u4EE5\u4F7F\u7528 <code>docker container rm / docker rm</code> \u6765\u5220\u9664\u4E00\u4E2A\u5904\u4E8E<strong>\u7EC8\u6B62\u72B6\u6001</strong>\u7684\u5BB9\u5668\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> container <span class="token function">rm</span> mynginx

<span class="token comment"># \u6E05\u7406\u6240\u6709\u5904\u4E8E\u7EC8\u6B62\u72B6\u6001\u7684\u5BB9\u5668</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> -a -q<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7BA1\u7406\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u7BA1\u7406\u5DE5\u5177" aria-hidden="true">#</a> \u7BA1\u7406\u5DE5\u5177</h2><h3 id="docker-desktop" tabindex="-1"><a class="header-anchor" href="#docker-desktop" aria-hidden="true">#</a> Docker Desktop</h3>`,39),_={href:"https://docs.docker.com/desktop/linux/install/ubuntu/",target:"_blank",rel:"noopener noreferrer"},f=s("\u4F20\u9001\u95E8"),x=i('<p>\u5982\u679C\u60F3\u4F7F\u7528 Docker Desktop\uFF0C\u8BF7\u6309\u7167 Docker \u5B98\u65B9\u6E90\u5B89\u88C5\u65B9\u5F0F\u3002</p><p><img src="'+d+'" alt="docker-desktop"></p><h3 id="vs-code" tabindex="-1"><a class="header-anchor" href="#vs-code" aria-hidden="true">#</a> VS Code</h3><p>\u5728 Visual Studio Code \u4E2D\u5B89\u88C5 Docker \u6269\u5C55\u3002\uFF08\u9700\u8981\u5F53\u524D\u7528\u6237\u80FD\u591F\u4F7F\u7528 docker \u547D\u4EE4\uFF09</p><h3 id="gnome-\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#gnome-\u6269\u5C55" aria-hidden="true">#</a> Gnome \u6269\u5C55</h3>',5),y={href:"https://extensions.gnome.org/extension/5103/docker/",target:"_blank",rel:"noopener noreferrer"},q=s("Gnoem \u6269\u5C55"),D=n("h2",{id:"\u5B66\u4E60\u66F4\u591A",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5B66\u4E60\u66F4\u591A","aria-hidden":"true"},"#"),s(" \u5B66\u4E60\u66F4\u591A")],-1),S=s("\u5982\u679C\u60F3\u8981\u5B66\u4E60\u66F4\u591A\u4E0E "),w=n("code",null,"Docker",-1),V=s(" \u76F8\u5173\u7684\u5185\u5BB9\uFF0C\u53EF\u4EE5\u53C2\u8003\uFF1A"),C={href:"https://yeasy.gitbook.io/docker_practice",target:"_blank",rel:"noopener noreferrer"},G=s("Docker-\u4ECE\u5165\u95E8\u5230\u5B9E\u8DF5"),N=n("h2",{id:"\u53C2\u8003",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u53C2\u8003","aria-hidden":"true"},"#"),s(" \u53C2\u8003")],-1),P=s("\u{1F517} "),T={href:"https://yeasy.gitbook.io/docker_practice",target:"_blank",rel:"noopener noreferrer"},$=s("https://yeasy.gitbook.io/docker_practice"),E=s("\u{1F517} "),I={href:"https://docs.docker.com/engine/install/linux-postinstall/",target:"_blank",rel:"noopener noreferrer"},L=s("https://docs.docker.com/engine/install/linux-postinstall/");function B(U,A){const e=o("ExternalLinkIcon");return l(),t("div",null,[p,u,v,n("p",null,[k,n("a",m,[b,a(e)]),h]),g,n("p",null,[n("a",_,[f,a(e)])]),x,n("p",null,[n("a",y,[q,a(e)])]),D,n("p",null,[S,w,V,n("a",C,[G,a(e)])]),N,n("ul",null,[n("li",null,[P,n("a",T,[$,a(e)])]),n("li",null,[E,n("a",I,[L,a(e)])])])])}var R=c(r,[["render",B],["__file","docker.html.vue"]]);export{R as default};
