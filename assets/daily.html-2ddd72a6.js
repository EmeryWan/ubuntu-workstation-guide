import{_ as o,M as l,p as r,q as i,R as n,t as s,N as a,a1 as t}from"./framework-96b046e1.js";const c={},p=n("div",{class:"language-text","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,` ____________
< 日常软件 >
 ------------
        \\   ^__^
         \\  (�)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`)])],-1),d={class:"custom-container tip"},u=n("p",{class:"custom-container-title"},"提示",-1),h=n("p",null,"Ubuntu 安装第三方应用并没有 Arch 那样方便，如果 PPA 中没有的话，只能去网络上搜索下载，或逐个添加 PPA。好在 Linux 下的大部分应用不怎么更新，只有第一次安装的时候麻烦点。",-1),m={href:"https://www.ubuntuupdates.org/ppas",target:"_blank",rel:"noopener noreferrer"},b=n("hr",null,null,-1),v=n("p",null,"想了解更多支持 Linux 的应用：",-1),_={href:"https://github.com/luong-komorebi/Awesome-Linux-Software/blob/master/README_zh-CN.md",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.spark-app.store/",target:"_blank",rel:"noopener noreferrer"},k=n("hr",null,null,-1),f=n("p",null,[s("部分应用难免有兼容 / 依赖问题，新发行版请尽量下载最新版本确保兼容。请善用搜索引擎 🔍，如利用关键字 "),n("code",null,"ubuntu 版本号 应用名"),s(" 寻找相应的方法。")],-1),w=n("h2",{id:"🍔-浏览器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#🍔-浏览器","aria-hidden":"true"},"#"),s(" 🍔 浏览器")],-1),x=n("p",null,"主流浏览器都会提供 Linux 版本，且选择很多。",-1),y=n("blockquote",null,[n("p",null,"Chromium，Firefox 在最新的系统中，只提供 Snap 版本。")],-1),q={href:"https://www.oschina.net/news/199868/firefox-snap-performance",target:"_blank",rel:"noopener noreferrer"},A=n("p",null,"以下为部分浏览器安装方式：",-1),C=n("ul",null,[n("li",null,"Chrome")],-1),L={href:"https://www.google.com/intl/zh-CN/chrome/",target:"_blank",rel:"noopener noreferrer"},F=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">-q</span> <span class="token parameter variable">-O</span> - https://dl.google.com/linux/linux_signing_key.pub <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> - 
<span class="token function">sudo</span> <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;echo &quot;deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main&quot; &gt;&gt; /etc/apt/sources.list.d/google-chrome.list&#39;</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> google-chrome-stable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Chromium</li></ul>`,2),S={href:"https://www.chromium.org/chromium-projects/",target:"_blank",rel:"noopener noreferrer"},N=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 较新系统中安装的都是 snap 应用</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> chromium-browser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Firefox</li></ul>`,2),P={href:"https://www.mozilla.org/zh-CN/firefox/",target:"_blank",rel:"noopener noreferrer"},E=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 系统默认自带了 firefox</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> firefox
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Edge</li></ul>`,2),V={href:"https://www.microsoft.com/en-us/edge",target:"_blank",rel:"noopener noreferrer"},z=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> https://packages.microsoft.com/keys/microsoft.asc <span class="token operator">|</span> gpg <span class="token parameter variable">--dearmor</span> <span class="token operator">&gt;</span> microsoft.gpg
<span class="token function">sudo</span> <span class="token function">install</span> <span class="token parameter variable">-o</span> root <span class="token parameter variable">-g</span> root <span class="token parameter variable">-m</span> <span class="token number">644</span> microsoft.gpg /etc/apt/trusted.gpg.d/
<span class="token function">sudo</span> <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;echo &quot;deb [arch=amd64] https://packages.microsoft.com/repos/edge stable main&quot; &gt; /etc/apt/sources.list.d/microsoft-edge.list&#39;</span>

<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> microsoft-edge-stable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Opera</li></ul>`,2),D={href:"https://www.opera.com/zh-cn/download#opera-browser",target:"_blank",rel:"noopener noreferrer"},U=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> snap <span class="token function">install</span> opera
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">-O</span> - http://deb.opera.com/archive.key <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -
<span class="token function">sudo</span> <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;echo &quot;deb http://deb.opera.com/opera-stable/ stable non-free&quot; &gt;&gt; /etc/apt/sources.list.d/opera.list&#39;</span> 
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> opera
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>brave</li></ul>`,3),B={href:"https://brave.com/zh/",target:"_blank",rel:"noopener noreferrer"},M=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> apt-transport-https <span class="token function">curl</span>
<span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-fsSLo</span> /usr/share/keyrings/brave-browser-archive-keyring.gpg https://brave-browser-apt-release.s3.brave.com/brave-browser-archive-keyring.gpg
<span class="token builtin class-name">echo</span> <span class="token string">&quot;deb [signed-by=/usr/share/keyrings/brave-browser-archive-keyring.gpg arch=amd64] https://brave-browser-apt-release.s3.brave.com/ stable main&quot;</span><span class="token operator">|</span><span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/brave-browser-release.list

<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> brave-browser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>国内很多厂商也推出了 Linux 下的浏览器，大部分都是基于 Chromium。</p><p>有些只在 Deepin，UOS，银河麒麟等系统的应用商店中提供，没有提供下载链接。无特殊需求还是推荐 Chrome。</p><ul><li>360 浏览器</li></ul>`,4),O={href:"https://browser.360.cn/se/linux/index.html",target:"_blank",rel:"noopener noreferrer"},j=t(`<h2 id="🍟-截图" tabindex="-1"><a class="header-anchor" href="#🍟-截图" aria-hidden="true">#</a> 🍟 截图</h2><ul><li>深度截图</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> deepin-screenshot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>火焰截图</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> flameshot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="🍕-网盘" tabindex="-1"><a class="header-anchor" href="#🍕-网盘" aria-hidden="true">#</a> 🍕 网盘</h2><ul><li>百度网盘</li></ul>`,7),G={href:"https://pan.baidu.com/download",target:"_blank",rel:"noopener noreferrer"},I=n("ul",null,[n("li",null,"坚果云")],-1),R={href:"https://www.jianguoyun.com/s/downloads",target:"_blank",rel:"noopener noreferrer"},T=n("h2",{id:"🥨-移动设备投屏",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#🥨-移动设备投屏","aria-hidden":"true"},"#"),s(" 🥨 移动设备投屏")],-1),W={href:"https://arch.icekylin.online/apps/collaboration.html",target:"_blank",rel:"noopener noreferrer"},H=n("h2",{id:"🥚-虚拟机",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#🥚-虚拟机","aria-hidden":"true"},"#"),s(" 🥚 虚拟机")],-1),J=n("ul",null,[n("li",null,"virtualbox")],-1),K={href:"https://www.virtualbox.org/wiki/Linux_Downloads",target:"_blank",rel:"noopener noreferrer"},Q=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 信任 Virtualbox 的 GPG 公钥</span>
<span class="token function">sudo</span> gpg <span class="token parameter variable">--dearmor</span> oracle_vbox_2016.asc <span class="token parameter variable">--yes</span> <span class="token parameter variable">--output</span> /usr/share/keyrings/oracle-virtualbox-2016.gpg

<span class="token comment"># 更换为对应发行版</span>
<span class="token comment"># lsb_release -c</span>
<span class="token comment"># &lt;mydist&gt;  -&gt;  20.04  -&gt;  focal</span>
<span class="token comment"># &lt;mydist&gt;  -&gt;  22.04  -&gt;  jammy</span>
<span class="token comment"># 推荐使用国内镜像</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;deb [arch=amd64] http://mirrors.cloud.tencent.com/virtualbox/apt/ &lt;mydist&gt; contrib&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/virtualbox.list
<span class="token comment"># echo &quot;deb [arch=amd64] https://download.virtualbox.org/virtualbox/debian &lt;mydist&gt; contrib&quot; | sudo tee /etc/apt/sources.list.d/virtualbox.list</span>

<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> virtualbox
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>VMware</li></ul>`,2),X={href:"https://www.vmware.com/products/workstation-player.html",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://docs.vmware.com/cn/VMware-Workstation-Pro/16.0/com.vmware.ws.using.doc/GUID-1F5B1F14-A586-4A56-83FA-2E7D8333D5CA.html",target:"_blank",rel:"noopener noreferrer"};function Z($,nn){const e=l("ExternalLinkIcon");return r(),i("div",null,[p,n("div",d,[u,h,n("p",null,[s("你可以在这里找到一些常用应用的 PPA："),n("a",m,[s("传送门"),a(e)])]),b,v,n("ul",null,[n("li",null,[n("a",_,[s("Awesome-Linux-Software"),a(e)])]),n("li",null,[n("a",g,[s("星火商店"),a(e)])])]),k,f]),w,x,y,n("blockquote",null,[n("p",null,[s("Ubuntu 21.10 开始默认使用 Snap 版本的 Firefox，但并未阻止用户手动安装 deb 版本的 Firefox。在 Ubuntu 22.04 将仅向用户提供 Snap 版本的 Firefox，用户无法再手动安装 deb 版本。目前 Firefox Snap 版本的性能和其他不足之处还正在解决中。"),n("a",q,[s("参考"),a(e)])])]),A,C,n("p",null,[n("a",L,[s("传送门"),a(e)])]),F,n("p",null,[n("a",S,[s("传送门"),a(e)])]),N,n("p",null,[n("a",P,[s("传送门"),a(e)])]),E,n("p",null,[n("a",V,[s("传送门"),a(e)])]),z,n("p",null,[n("a",D,[s("传送门"),a(e)])]),U,n("p",null,[n("a",B,[s("传送门"),a(e)])]),M,n("p",null,[n("a",O,[s("传送门"),a(e)])]),j,n("p",null,[n("a",G,[s("传送门"),a(e)])]),I,n("p",null,[n("a",R,[s("传送门"),a(e)])]),T,n("p",null,[s("请参考："),n("a",W,[s("移动设备投屏"),a(e)])]),H,J,n("p",null,[s("下载地址："),n("a",K,[s("传送门➡️"),a(e)])]),Q,n("p",null,[s("下载地址："),n("a",X,[s("传送门➡️"),a(e)])]),n("p",null,[s("参考："),n("a",Y,[s("使用参考➡️"),a(e)])])])}const en=o(c,[["render",Z],["__file","daily.html.vue"]]);export{en as default};