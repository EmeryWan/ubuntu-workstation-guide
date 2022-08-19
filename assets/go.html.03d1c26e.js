import{_ as a,o as n,c as s,d as e}from"./app.71d826ec.js";const i={},t=e(`<div class="language-text ext-text"><pre class="language-text"><code> ___________________________
&lt; \u5728 ubuntu \u4E2D\u5B89\u88C5 GO \u73AF\u5883 &gt;
 ---------------------------
        \\   ^__^
         \\  (**)\\_______
            (__)\\       )\\/\\
             U  ||----w |
                ||     ||
</code></pre></div><h2 id="ppa" tabindex="-1"><a class="header-anchor" href="#ppa" aria-hidden="true">#</a> PPA</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> add-apt-repository ppa:longsleep/golang-backports
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> golang-go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="snap" tabindex="-1"><a class="header-anchor" href="#snap" aria-hidden="true">#</a> snap</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> snap <span class="token function">install</span> --classic go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><ul><li>https://github.com/golang/go/wiki/Ubuntu</li></ul>`,7),l=[t];function c(d,o){return n(),s("div",null,l)}var r=a(i,[["render",c],["__file","go.html.vue"]]);export{r as default};
