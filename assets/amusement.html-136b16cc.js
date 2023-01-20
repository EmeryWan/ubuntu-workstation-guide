import{_ as o,M as l,p as r,q as i,R as e,t as n,N as t,a1 as a}from"./framework-96b046e1.js";const c="/ubuntu-workstation-guide/images/docs/guide/app/netease-cloud-music.png",p="/ubuntu-workstation-guide/images/docs/guide/app/qq-music.png",u="/ubuntu-workstation-guide/images/docs/guide/app/yesplaymusic.png",d="/ubuntu-workstation-guide/images/docs/guide/app/Listen1.png",_={},h=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,` _____________
< 影音娱乐 >
 -------------
        \\   ^__^
         \\  (..)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`)])],-1),m={class:"custom-container tip"},g=e("p",{class:"custom-container-title"},"提示",-1),b=e("p",null,"Ubuntu 安装第三方应用并没有 Arch 那样方便，如果 PPA 中没有的话，只能去网络上搜索下载，或逐个添加 PPA。好在 Linux 下的大部分应用不怎么更新，只有第一次安装的时候麻烦点。",-1),f={href:"https://www.ubuntuupdates.org/ppas",target:"_blank",rel:"noopener noreferrer"},k=e("hr",null,null,-1),v=e("p",null,"想了解更多支持 Linux 的应用：",-1),x={href:"https://github.com/luong-komorebi/Awesome-Linux-Software/blob/master/README_zh-CN.md",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.spark-app.store/",target:"_blank",rel:"noopener noreferrer"},y=e("hr",null,null,-1),q=e("p",null,[n("部分应用难免有兼容 / 依赖问题，新发行版请尽量下载最新版本确保兼容。请善用搜索引擎 🔍，如利用关键字 "),e("code",null,"ubuntu 版本号 应用名"),n(" 寻找相应的方法。")],-1),A=e("h2",{id:"🍯-音乐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#🍯-音乐","aria-hidden":"true"},"#"),n(" 🍯 音乐")],-1),L=e("ul",null,[e("li",null,"网易云音乐")],-1),P={href:"https://juejin.cn/post/7098513792115408910",target:"_blank",rel:"noopener noreferrer"},E={href:"https://music.163.com/#",target:"_blank",rel:"noopener noreferrer"},C={href:"https://music.163.com/#/download",target:"_blank",rel:"noopener noreferrer"},M=e("p",null,[e("img",{src:c,alt:"netease-cloud-music"})],-1),N=e("ul",null,[e("li",null,"QQ 音乐")],-1),S={href:"https://y.qq.com/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://y.qq.com/download/download.html",target:"_blank",rel:"noopener noreferrer"},Y=e("p",null,[e("img",{src:p,alt:"qq-music"})],-1),B=e("ul",null,[e("li",null,"yesplaymusic")],-1),G=e("p",null,"高颜值的第三方网易云播放器",-1),Z={href:"https://github.com/qier222/YesPlayMusic",target:"_blank",rel:"noopener noreferrer"},j={href:"https://github.com/qier222/YesPlayMusic/releases",target:"_blank",rel:"noopener noreferrer"},z=e("p",null,[e("img",{src:u,alt:"yesplaymusic"})],-1),D=e("ul",null,[e("li",null,"Listen 1")],-1),I=e("p",null,"Listen 1 可以搜索和播放来自多个主流音乐网站的歌曲，让你的曲库更全面。",-1),Q={href:"https://github.com/listen1/listen1_desktop",target:"_blank",rel:"noopener noreferrer"},R={href:"https://github.com/listen1/listen1_desktop/releases",target:"_blank",rel:"noopener noreferrer"},U=e("p",null,[e("img",{src:d,alt:"Listen1"})],-1),T=e("ul",null,[e("li",null,"Spotify")],-1),F={href:"https://www.spotify.com/",target:"_blank",rel:"noopener noreferrer"},H={href:"https://www.spotify.com/hk-zh/download/linux/",target:"_blank",rel:"noopener noreferrer"},J=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用 snap</span>
snap <span class="token function">install</span> spotify

<span class="token comment"># 使用 package</span>
<span class="token function">curl</span> <span class="token parameter variable">-sS</span> https://download.spotify.com/debian/pubkey_5E3C45D7B312C643.gpg <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> - 
<span class="token builtin class-name">echo</span> <span class="token string">&quot;deb http://repository.spotify.com stable non-free&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/spotify.list
<span class="token function">sudo</span> <span class="token function">apt</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> spotify-client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Apple Music</li></ul><p>Ubuntu 下可以使用第三方的基于 Electron 开发的 App。或者使用网页端。</p>`,3),K={href:"https://github.com/ciderapp/Cider",target:"_blank",rel:"noopener noreferrer"},O={href:"https://github.com/ciderapp/Apple-Music-Electron",target:"_blank",rel:"noopener noreferrer"},W=a(`<h2 id="🍮-视频" tabindex="-1"><a class="header-anchor" href="#🍮-视频" aria-hidden="true">#</a> 🍮 视频</h2><ul><li>VLC</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt install vlc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>mpv</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt install mpv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>ZY Player</li></ul><p>跨平台桌面端视频资源播放器。</p>`,7),X={href:"https://github.com/cuiocean/ZY-Player",target:"_blank",rel:"noopener noreferrer"},$={href:"https://github.com/cuiocean/ZY-Player/releases",target:"_blank",rel:"noopener noreferrer"},ee=a(`<h2 id="🥧-游戏" tabindex="-1"><a class="header-anchor" href="#🥧-游戏" aria-hidden="true">#</a> 🥧 游戏</h2><ul><li>steam</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> steam
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="🍪-安卓刷机" tabindex="-1"><a class="header-anchor" href="#🍪-安卓刷机" aria-hidden="true">#</a> 🍪 安卓刷机</h2>`,4),ne={href:"https://arch.icekylin.online/apps/android.html",target:"_blank",rel:"noopener noreferrer"};function se(te,ae){const s=l("ExternalLinkIcon");return r(),i("div",null,[h,e("div",m,[g,b,e("p",null,[n("你可以在这里找到一些常用应用的 PPA："),e("a",f,[n("传送门"),t(s)])]),k,v,e("ul",null,[e("li",null,[e("a",x,[n("Awesome-Linux-Software"),t(s)])]),e("li",null,[e("a",w,[n("星火商店"),t(s)])])]),y,q]),A,L,e("p",null,[n("在 22.04 中（貌似）有问题，可以 "),e("a",P,[n("参考"),t(s)]),n("。")]),e("p",null,[n("官网："),e("a",E,[n("传送门➡️"),t(s)])]),e("p",null,[n("下载地址："),e("a",C,[n("传送门➡️"),t(s)])]),M,N,e("p",null,[n("官网："),e("a",S,[n("传送门➡️"),t(s)])]),e("p",null,[n("下载地址："),e("a",V,[n("传送门➡️"),t(s)])]),Y,B,G,e("p",null,[n("Github："),e("a",Z,[n("传送门➡️"),t(s)])]),e("p",null,[n("下载地址："),e("a",j,[n("传送门➡️"),t(s)])]),z,D,I,e("p",null,[n("Github："),e("a",Q,[n("传送门➡️"),t(s)])]),e("p",null,[n("下载地址："),e("a",R,[n("传送门➡️"),t(s)])]),U,T,e("p",null,[n("官网："),e("a",F,[n("传送门➡️"),t(s)])]),e("p",null,[n("下载地址："),e("a",H,[n("传送门➡️"),t(s)])]),J,e("p",null,[n("Cider："),e("a",K,[n("传送门➡️"),t(s)])]),e("p",null,[n("Apple-Music-Electron："),e("a",O,[n("传送门➡️"),t(s)])]),W,e("p",null,[n("官网："),e("a",X,[n("Github➡️"),t(s)])]),e("p",null,[n("下载地址："),e("a",$,[n("传送门➡️"),t(s)])]),ee,e("p",null,[n("如果有安卓刷机的需要，请参考："),e("a",ne,[n("传送门➡️"),t(s)])])])}const le=o(_,[["render",se],["__file","amusement.html.vue"]]);export{le as default};