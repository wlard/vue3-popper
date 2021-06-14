import{r as n,o as a,c as s,b as t,w as p,d as o,a as e}from"./app.e1040520.js";const c='{"title":"Installation","description":"","frontmatter":{},"headers":[{"level":2,"title":"Installation","slug":"installation"},{"level":3,"title":"Global","slug":"global"},{"level":3,"title":"Component","slug":"component"},{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"What about styles?","slug":"what-about-styles"},{"level":3,"title":"I don\'t want to use CSS variables","slug":"i-don-t-want-to-use-css-variables"}],"relativePath":"guide/getting-started.md","lastUpdated":1623706930826}',l={},u=t("h2",{id:"installation"},[t("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),o(" Installation")],-1),i=t("div",{class:"warning custom-block"},[t("p",{class:"custom-block-title"},"WARNING"),t("p",null,"Vue Popper is currently in 0.x status. It is already ready for use, but API may still change and features will be added between minor releases.")],-1),k=t("p",null,"You can install Vue Popper by opening your terminal in your project an running the following command:",-1),r=t("div",{class:"language-bash"},[t("pre",null,[t("code",null,[t("span",{class:"token function"},"yarn"),o(),t("span",{class:"token function"},"add"),o(" vue3-popper\n")])])],-1),d=t("div",{class:"language-bash"},[t("pre",null,[t("code",null,[t("span",{class:"token function"},"npm"),o(" i vue3-popper\n")])])],-1),g=e('<h3 id="global"><a class="header-anchor" href="#global" aria-hidden="true">#</a> Global</h3><p>You can import and register the component globally:</p><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Popper <span class="token keyword">from</span> <span class="token string">&quot;vue3-popper&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\napp<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;Popper&quot;</span><span class="token punctuation">,</span> Popper<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="component"><a class="header-anchor" href="#component" aria-hidden="true">#</a> Component</h3><p>Or use it on a case by case basis:</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popper</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>Trigger element<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#content</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>This is the Popper content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popper</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> Popper <span class="token keyword">from</span> <span class="token string">&quot;vue3-popper&quot;</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span>\n      Popper<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>You can add Popper to any of your elements or components. Just wrap them with <code>Popper</code> and use the <code>#content</code> slot for your popover:</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popper</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>Trigger!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#content</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>This is the content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popper</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h3 id="what-about-styles"><a class="header-anchor" href="#what-about-styles" aria-hidden="true">#</a> What about styles?</h3><p><code>Popper</code> comes with a list of predefined CSS variables. You can overwrite these variables to suit your needs.</p><h4 id="css-variables"><a class="header-anchor" href="#css-variables" aria-hidden="true">#</a> CSS variables</h4><table><thead><tr><th>CSS variable</th><th>Default value</th></tr></thead><tbody><tr><td><code>--popper-theme-background-color</code></td><td>#ffffff</td></tr><tr><td><code>--popper-theme-background-color-hover</code></td><td>#ffffff</td></tr><tr><td><code>--popper-theme-text-color</code></td><td>inherit</td></tr><tr><td><code>--popper-theme-border</code></td><td>1px solid #efefef</td></tr><tr><td><code>--popper-theme-border-radius</code></td><td>6px</td></tr><tr><td><code>--popper-theme-padding</code></td><td>16px</td></tr><tr><td><code>--popper-theme-shadow</code></td><td>0 6px 30px -6px rgba(0, 0, 0, 0.25)</td></tr></tbody></table><p>Using these variables, you could for example create a <code>theme.css</code> file:</p><div class="language-css"><pre><code><span class="token selector">:root</span> <span class="token punctuation">{</span>\n  <span class="token property">--popper-theme-background-color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>\n  <span class="token property">--popper-theme-background-color-hover</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>\n  <span class="token property">--popper-theme-text-color</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>\n  <span class="token property">--popper-theme-border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n  <span class="token property">--popper-theme-border-radius</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>\n  <span class="token property">--popper-theme-padding</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>\n  <span class="token property">--popper-theme-shadow</span><span class="token punctuation">:</span> 0 6px 30px -6px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.25<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>Import it:</p><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&quot;./App.vue&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">&quot;./theme.css&quot;</span><span class="token punctuation">;</span> <span class="token comment">// Magic happens here</span>\n\n<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>And your Popper is styled!</p><h3 id="i-don-t-want-to-use-css-variables"><a class="header-anchor" href="#i-don-t-want-to-use-css-variables" aria-hidden="true">#</a> I don&#39;t want to use CSS variables</h3><p>That&#39;s fine, you can always just apply your own styles, just make sure it&#39;s <code>scoped</code> and you use the <code>:deep</code> selector:</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popper</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>Trigger!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#content</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>This is the content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popper</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n  <span class="token selector">:deep(.popper)</span> <span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> #3a3a3a<span class="token punctuation">;</span>\n    <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>\n    <span class="token property">border-radius</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>\n    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>\n    <span class="token property">text-transform</span><span class="token punctuation">:</span> uppercase<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token selector">:deep(.popper #arrow::before)</span> <span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> #3a3a3a<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',21);l.render=function(o,e,c,l,h,m){const f=n("CodeBlock"),y=n("CodeGroup");return a(),s("div",null,[u,i,k,t(y,null,{default:p((()=>[t(f,{title:"YARN",active:""},{default:p((()=>[r])),_:1}),t(f,{title:"NPM"},{default:p((()=>[d])),_:1})])),_:1}),g])};export default l;export{c as __pageData};
