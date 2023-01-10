import{_ as s,M as i,p as _,q as a,R as t,t as e,N as o,a1 as l}from"./framework-96b046e1.js";const r="/ubuntu-workstation-guide/images/docs/tip/github/type.png",c="/ubuntu-workstation-guide/images/docs/tip/github/add.png",h={},u=t("div",{class:"language-text","data-ext":"text"},[t("pre",{class:"language-text"},[t("code",null,` ____________________________
< 国内加速 Github 的技巧 >
 ----------------------------
        \\   ^__^
         \\  (..)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`)])],-1),d=t("h2",{id:"介绍",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),e(" 介绍")],-1),p=t("p",null,[e("国内的网络环境使用 "),t("code",null,"Github"),e(" 不太友好。我们可以通过修改 "),t("code",null,"host"),e(" 的方式加速 "),t("code",null,"GitHub"),e(" 访问，解决图片无法加载以及访问速度慢的问题。")],-1),g={href:"https://github.com/521xueweihan/GitHub520",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"GitHub hosts",-1),m=t("h2",{id:"使用",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#使用","aria-hidden":"true"},"#"),e(" 使用")],-1),x={href:"https://github.com/oldj/SwitchHosts",target:"_blank",rel:"noopener noreferrer"},f=t("code",null,"SwitchHosts",-1),w=t("code",null,"hosts",-1),k=l('<div class="custom-container warning"><p class="custom-container-title">🚧 注意</p><p>请注意是要使用 <strong>追加</strong> 还是 <strong>覆盖</strong> 模式，以免本地 hosts 丢失。</p></div><p><img src="'+r+'" alt="type"></p><p>具体操作步骤，添加一条规则：</p><ul><li><p>类型：<strong>远程</strong></p></li><li><p>方案名：GitHub（可以自行命名）</p></li><li><p>URL 地址：（三选一）</p><ul><li>https://raw.hellogithub.com/hosts</li></ul></li><li><p>自动更新：1个小时（推荐）</p></li></ul><p><img src="'+c+'" alt="add"></p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ul><li>🔗 https://github.com/521xueweihan/GitHub520</li></ul>',7);function G(H,v){const n=i("ExternalLinkIcon");return _(),a("div",null,[u,d,p,t("p",null,[e("这个项目中 "),t("a",g,[e("GitHub520"),o(n)]),e("，提供了最新的 "),b,e(" 地址。")]),m,t("p",null,[e("这里推荐使用 "),t("a",x,[f,o(n)]),e(" 配置 "),w,e("，操作简单，支持跨平台。")]),k])}const V=s(h,[["render",G],["__file","github.html.vue"]]);export{V as default};
