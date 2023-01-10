import{_ as i,M as l,p as t,q as r,R as e,t as n,N as a,a1 as o}from"./framework-96b046e1.js";const c="/ubuntu-workstation-guide/images/docs/guide/use/clash.png",d="/ubuntu-workstation-guide/images/docs/guide/use/proxy.png",u="/ubuntu-workstation-guide/images/docs/guide/use/dock-proxy.png",p={},h=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,` ________
< 网络 >
 --------
        \\   ^__^
         \\  (..)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`)])],-1),v=e("h2",{id:"🧭-clw",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#🧭-clw","aria-hidden":"true"},"#"),n(" 🧭 CLW")],-1),m={class:"custom-container tip"},_=e("p",{class:"custom-container-title"},"推荐",-1),g={href:"https://extensions.gnome.org/extension/771/proxy-switcher/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/Fndroid/clash_for_windows_pkg/releases",target:"_blank",rel:"noopener noreferrer"},x=o(`<p>提供的是 <code>.tar.gz</code> 的执行文件。下面是本人的安装方式，仅做参考，可根据个人习惯选择安装方式：</p><p>二进制软件我通常都会统一放在 <code>\${HOME}/Applications</code> 中。</p><ul><li>首先创建一个安装的软件的文件夹</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ~/Application/clash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>将下载的文件解压到该文件夹中</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-xzvf</span> Clash.for.Windows-0.19.12 <span class="token parameter variable">-C</span> ~/Application/clash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>创建启动文件的软连接</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ln</span> <span class="token parameter variable">-s</span> ./Clash<span class="token punctuation">\\</span> for<span class="token punctuation">\\</span> Windows-0.19.12-x64-linux/cfw ./clash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过这种方式，每次启动应用都使用这个软链接进行操作，当需要升级应用时，只需要创建新的软链接，指向新的启动文件。最后的效果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ tree . -L 1
.
├── clash -&gt; ./Clash for Windows-0.19.12-x64-linux/cfw
├── Clash for Windows-0.19.12-x64-linux
└── Clash for Windows-0.19.2-x64-linux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>添加桌面图标</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> ~/.local/share/applications/clw.desktop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加以下内容：</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>[Desktop Entry]
Name=Clash for Linux
Icon=/home/emery/Applications/icon/clash_icon.png  # 替换为自己的目录
Comment=Clash for Linux
Exec=&quot;/home/emery/Applications/Clash/clash&quot; %u  # 替换为自己的目录
Type=Application
Categories=Network
Terminal=false
StartupNotify=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>设置为手动</li></ul><div class="custom-container warning"><p class="custom-container-title">注意</p><p>注意：设置手动后，如果没有开启 CLW（如重启后没有打开），没有切换回自动，系统会无法上网。</p></div><p><img src="`+c+'" alt="clash"></p><p><img src="'+d+'" alt="proxy"></p><ul><li>安装插件后可在 dock 控制栏快速切换代理</li></ul><p><img src="'+u+'" alt="dock-proxy"></p><h2 id="📡-qv" tabindex="-1"><a class="header-anchor" href="#📡-qv" aria-hidden="true">#</a> 📡 Qv</h2>',21),f={href:"https://github.com/Qv2ray/Qv2ray",target:"_blank",rel:"noopener noreferrer"},k=e("h2",{id:"🔮-clv",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#🔮-clv","aria-hidden":"true"},"#"),n(" 🔮 CLV")],-1),w={href:"https://github.com/zzzgydi/clash-verge",target:"_blank",rel:"noopener noreferrer"};function C(y,L){const s=l("ExternalLinkIcon");return t(),r("div",null,[h,v,e("div",m,[_,e("p",null,[n("推荐同时安装该插件："),e("a",g,[n("proxy-switcher"),a(s)]),n(" 可以在控制栏方便切换代理。")])]),e("p",null,[n("CLW 是由 electron 开发的，同时也提供了 Linux 版本，使用起来与其他系统无几乎无差别。"),e("a",b,[n("传送门 ➡️"),a(s)])]),x,e("p",null,[n("已停止维护。"),e("a",f,[n("传送门"),a(s)])]),k,e("p",null,[e("a",w,[n("传送门"),a(s)])])])}const W=i(p,[["render",C],["__file","network.html.vue"]]);export{W as default};
