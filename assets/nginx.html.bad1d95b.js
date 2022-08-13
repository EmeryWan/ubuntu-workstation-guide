import{_ as t,o as r,c as d,a as e,b as i,e as n,d as s,r as _}from"./app.d352cd5b.js";const c={},o=n(`<div class="language-text ext-text"><pre class="language-text"><code> ________________________________
&lt; \u5728 ubuntu \u4E2D\u5B89\u88C5 Nginx \u670D\u52A1\u5668 &gt;
 --------------------------------
        \\   ^__^
         \\  (==)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
</code></pre></div><h2 id="apt-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#apt-\u5B89\u88C5" aria-hidden="true">#</a> APT \u5B89\u88C5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo apt install nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="zip" tabindex="-1"><a class="header-anchor" href="#zip" aria-hidden="true">#</a> ZIP</h2>`,4),l={href:"https://nginx.org/",target:"_blank",rel:"noopener noreferrer"},u=s("\u4E0B\u8F7D\u5730\u5740"),x=n(`<h2 id="\u4F7F\u7528-docker-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-docker-\u5B89\u88C5" aria-hidden="true">#</a> \u4F7F\u7528 Docker \u5B89\u88C5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker pull nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u542F\u52A8\u5BB9\u5668</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker run --name some-nginx -v /some/content:/usr/share/nginx/html:ro -d nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4);function h(g,p){const a=_("ExternalLinkIcon");return r(),d("div",null,[o,e("p",null,[e("a",l,[u,i(a)])]),x])}var m=t(c,[["render",h],["__file","nginx.html.vue"]]);export{m as default};
