import{_ as n}from"./nvidia-install-a344db90.js";import{_ as t,M as o,p as c,q as d,R as e,t as a,N as _,a1 as s}from"./framework-96b046e1.js";const i={},l=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,` _____________
< 驱动安装 >
 -------------
        \\   ^__^
         \\  (..)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`)])],-1),h=e("p",null,"对于新硬件，推荐尽量安装新系统，或升级内核版本，以保证硬件的兼容性。",-1),p={href:"https://ubuntu.com/about/release-cycle#ubuntu-kernel-release-cycle",target:"_blank",rel:"noopener noreferrer"},u=s('<h2 id="🫑-驱动显卡" tabindex="-1"><a class="header-anchor" href="#🫑-驱动显卡" aria-hidden="true">#</a> 🫑 驱动显卡</h2><h3 id="核心显卡" tabindex="-1"><a class="header-anchor" href="#核心显卡" aria-hidden="true">#</a> 核心显卡</h3><p>核心显卡通常不需要额外安装驱动。如果使用的是新硬件，请尽量安装新版系统或者手动安装新内核，以确保得到支持。</p><h3 id="独立显卡" tabindex="-1"><a class="header-anchor" href="#独立显卡" aria-hidden="true">#</a> 独立显卡</h3><p>推荐使用系统自带软件 <code>软件和更新</code> 安装显卡驱动。打开应用后，点击 <code>附加驱动</code> 选项，会对所有可选的附加驱动进行搜索。</p><p><img src="'+n+'" alt="nvidia-install"></p><p>其中，<code>Nouveau</code> 为英伟达显卡开源驱动（默认安装），选择需要的 <code>NVIDIA drive</code> 驱动选项，点击 <code>应用更改</code>。</p><p>等待进度条结束后，重启电脑，即完成了显卡驱动的安装。</p><h2 id="🌽-网卡驱动" tabindex="-1"><a class="header-anchor" href="#🌽-网卡驱动" aria-hidden="true">#</a> 🌽 网卡驱动</h2><p>主流网卡驱动通常会内置，不需要额外安装。</p><ul><li>MT7921：新版内核已经内置驱动</li></ul><h2 id="🥕-其他" tabindex="-1"><a class="header-anchor" href="#🥕-其他" aria-hidden="true">#</a> 🥕 其他</h2>',12);function f(x,m){const r=o("ExternalLinkIcon");return c(),d("div",null,[l,h,e("p",null,[a("可以在此处查看系统的最高内核支持："),e("a",p,[a("传送门"),_(r)])]),u])}const N=t(i,[["render",f],["__file","driver.html.vue"]]);export{N as default};
