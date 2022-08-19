import{_ as a,o as l,c as o,a as e,b as i,e as n,d as t,r as c}from"./app.71d826ec.js";var d="/ubuntu-workstation-guide/images/docs/guide/use/clash.png",r="/ubuntu-workstation-guide/images/docs/guide/use/proxy.png",u="/ubuntu-workstation-guide/images/docs/guide/use/dock-proxy.png";const p={},v=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,` ________
< \u7F51\u7EDC >
 --------
        \\   ^__^
         \\  (..)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`)])],-1),h=e("p",null,"\u52A0\u5FEB\u7F51\u7EDC\u901F\u5EA6\u3002",-1),_=e("h2",{id:"\u{1F9ED}-clw",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u{1F9ED}-clw","aria-hidden":"true"},"#"),n(" \u{1F9ED} CLW")],-1),m={class:"custom-container tip"},g=e("p",{class:"custom-container-title"},"\u63A8\u8350",-1),b=n("\u63A8\u8350\u540C\u65F6\u5B89\u88C5\u8BE5\u63D2\u4EF6\uFF1A"),x={href:"https://extensions.gnome.org/extension/771/proxy-switcher/",target:"_blank",rel:"noopener noreferrer"},f=n("proxy-switcher"),k=n(" \u53EF\u4EE5\u5728\u63A7\u5236\u680F\u65B9\u4FBF\u5207\u6362\u3002"),w=n("CLW \u662F\u7531 electron \u5F00\u53D1\u7684\uFF0C\u540C\u65F6\u4E5F\u63D0\u4F9B\u4E86 Linux \u7248\u672C\uFF0C\u4F7F\u7528\u8D77\u6765\u4E0E\u5176\u4ED6\u7CFB\u7EDF\u65E0\u51E0\u4E4E\u65E0\u5DEE\u522B\u3002"),C={href:"https://github.com/Fndroid/clash_for_windows_pkg/releases",target:"_blank",rel:"noopener noreferrer"},y=n("\u4F20\u9001\u95E8 \u27A1\uFE0F"),L=t(`<p>\u63D0\u4F9B\u7684\u662F <code>.tar.gz</code> \u7684\u6267\u884C\u6587\u4EF6\u3002\u4E0B\u9762\u662F\u672C\u4EBA\u7684\u5B89\u88C5\u65B9\u5F0F\uFF0C\u4EC5\u505A\u53C2\u8003\uFF0C\u53EF\u6839\u636E\u4E2A\u4EBA\u4E60\u60EF\u9009\u62E9\u5B89\u88C5\u65B9\u5F0F\uFF1A</p><p>\u4E8C\u8FDB\u5236\u8F6F\u4EF6\u6211\u901A\u5E38\u90FD\u4F1A\u7EDF\u4E00\u653E\u5728 <code>\${HOME}/Applications</code> \u4E2D\u3002</p><ul><li>\u9996\u5148\u521B\u5EFA\u4E00\u4E2A\u5B89\u88C5\u7684\u8F6F\u4EF6\u7684\u6587\u4EF6\u5939</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p ~/Application/clash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u5C06\u4E0B\u8F7D\u7684\u6587\u4EF6\u89E3\u538B\u5230\u8BE5\u6587\u4EF6\u5939\u4E2D</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> -xzvf Clash.for.Windows-0.19.12 -C ~/Application/clash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u521B\u5EFA\u542F\u52A8\u6587\u4EF6\u7684\u8F6F\u8FDE\u63A5</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ln</span> -s ./Clash<span class="token punctuation">\\</span> for<span class="token punctuation">\\</span> Windows-0.19.12-x64-linux/cfw ./clash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u6BCF\u6B21\u542F\u52A8\u5E94\u7528\u90FD\u4F7F\u7528\u8FD9\u4E2A\u8F6F\u94FE\u63A5\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5F53\u9700\u8981\u5347\u7EA7\u5E94\u7528\u65F6\uFF0C\u53EA\u9700\u8981\u521B\u5EFA\u65B0\u7684\u8F6F\u94FE\u63A5\uFF0C\u6307\u5411\u65B0\u7684\u542F\u52A8\u6587\u4EF6\u3002\u6700\u540E\u7684\u6548\u679C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ tree . -L 1
.
\u251C\u2500\u2500 clash -&gt; ./Clash for Windows-0.19.12-x64-linux/cfw
\u251C\u2500\u2500 Clash for Windows-0.19.12-x64-linux
\u2514\u2500\u2500 Clash for Windows-0.19.2-x64-linux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6DFB\u52A0\u684C\u9762\u56FE\u6807</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> ~/.local/share/applications/clw.desktop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>[Desktop Entry]
Name=Clash for Linux
Icon=/home/emery/Applications/icon/clash_icon.png  # \u66FF\u6362\u4E3A\u81EA\u5DF1\u7684\u76EE\u5F55
Comment=Clash for Linux
Exec=&quot;/home/emery/Applications/Clash/clash&quot; %u  # \u66FF\u6362\u4E3A\u81EA\u5DF1\u7684\u76EE\u5F55
Type=Application
Categories=Network
Terminal=false
StartupNotify=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8BBE\u7F6E\u4E3A\u624B\u52A8</li></ul><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u6CE8\u610F\uFF1A\u8BBE\u7F6E\u624B\u52A8\u540E\uFF0C\u5982\u679C\u6CA1\u6709\u5F00\u542F CLW\uFF08\u5982\u91CD\u542F\u540E\u6CA1\u6709\u6253\u5F00\uFF09\uFF0C\u6CA1\u6709\u5207\u6362\u56DE\u81EA\u52A8\uFF0C\u7CFB\u7EDF\u4F1A\u65E0\u6CD5\u4E0A\u7F51\u3002</p></div><p><img src="`+d+'" alt="clash"></p><p><img src="'+r+'" alt="proxy"></p><ul><li>\u5B89\u88C5\u63D2\u4EF6\u540E\u53EF\u5728 dock \u63A7\u5236\u680F\u5FEB\u901F\u5207\u6362\u4EE3\u7406</li></ul><p><img src="'+u+'" alt="dock-proxy"></p><h2 id="\u{1F4E1}-qv" tabindex="-1"><a class="header-anchor" href="#\u{1F4E1}-qv" aria-hidden="true">#</a> \u{1F4E1} Qv</h2>',21);function W(N,A){const s=c("ExternalLinkIcon");return l(),o("div",null,[v,h,_,e("div",m,[g,e("p",null,[b,e("a",x,[f,i(s)]),k])]),e("p",null,[w,e("a",C,[y,i(s)])]),L])}var q=a(p,[["render",W],["__file","network.html.vue"]]);export{q as default};
