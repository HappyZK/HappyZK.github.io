import{aQ as ae,d as x,K as de,L as se,t as l,E as v,S as i,G as t,U as le,af as ie,X as ce,P as be,a$ as ue,F as c,b0 as fe,b1 as ve,H as ge,I as y,ab as pe,n as z,O as me,a1 as f,ad as he,b2 as Ce,M as m,a6 as xe}from"./index-e19f6b4d.js";function ze(e,n,r){var o=-1,d=e.length;n<0&&(n=-n>d?0:d+n),r=r>d?d:r,r<0&&(r+=d),d=n>r?0:r-n>>>0,n>>>=0;for(var s=Array(d);++o<d;)s[o]=e[o+n];return s}function ye(e,n,r){var o=e.length;return r=r===void 0?o:r,!n&&r>=o?e:ze(e,n,r)}var Se="\\ud800-\\udfff",ke="\\u0300-\\u036f",$e="\\ufe20-\\ufe2f",Re="\\u20d0-\\u20ff",we=ke+$e+Re,Be="\\ufe0e\\ufe0f",Te="\\u200d",Pe=RegExp("["+Te+Se+we+Be+"]");function S(e){return Pe.test(e)}function Le(e){return e.split("")}var k="\\ud800-\\udfff",Me="\\u0300-\\u036f",Ee="\\ufe20-\\ufe2f",_e="\\u20d0-\\u20ff",je=Me+Ee+_e,Oe="\\ufe0e\\ufe0f",Ie="["+k+"]",h="["+je+"]",C="\\ud83c[\\udffb-\\udfff]",Ae="(?:"+h+"|"+C+")",$="[^"+k+"]",R="(?:\\ud83c[\\udde6-\\uddff]){2}",w="[\\ud800-\\udbff][\\udc00-\\udfff]",Fe="\\u200d",B=Ae+"?",T="["+Oe+"]?",He="(?:"+Fe+"(?:"+[$,R,w].join("|")+")"+T+B+")*",Ne=T+B+He,Ve="(?:"+[$+h+"?",h,R,w,Ie].join("|")+")",Ue=RegExp(C+"(?="+C+")|"+Ve+Ne,"g");function We(e){return e.match(Ue)||[]}function Je(e){return S(e)?We(e):Le(e)}function Ke(e){return function(n){n=ae(n);var r=S(n)?Je(n):void 0,o=r?r[0]:n.charAt(0),d=r?ye(r,1).join(""):n.slice(1);return o[e]()+d}}var Ze=Ke("toUpperCase");const qe=Ze;function De(e,n){return x({name:qe(e),setup(){var r;const o=(r=de(se,null))===null||r===void 0?void 0:r.mergedIconsRef;return()=>{var d;const s=(d=o==null?void 0:o.value)===null||d===void 0?void 0:d[e];return s?s():n}}})}const Xe=De("close",l("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},l("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},l("g",{fill:"currentColor","fill-rule":"nonzero"},l("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),Ge=v("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[i("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),t("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),le("disabled",[t("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),t("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),t("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),t("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),t("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),i("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),i("round",[t("&::before",`
 border-radius: 50%;
 `)])]),Qe=x({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return ie("-base-close",Ge,ce(e,"clsPrefix")),()=>{const{clsPrefix:n,disabled:r,absolute:o,round:d,isButtonTag:s}=e;return l(s?"button":"div",{type:s?"button":void 0,tabindex:r||!e.focusable?-1:0,"aria-disabled":r,"aria-label":"close",role:s?void 0:"button",disabled:r,class:[`${n}-base-close`,o&&`${n}-base-close--absolute`,r&&`${n}-base-close--disabled`,d&&`${n}-base-close--round`],onMousedown:u=>{e.focusable||u.preventDefault()},onClick:e.onClick},l(be,{clsPrefix:n},{default:()=>l(Xe,null)}))}}}),Ye=t([v("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[ue({background:"var(--n-color-modal)"}),i("hoverable",[t("&:hover","box-shadow: var(--n-box-shadow);")]),i("content-segmented",[t(">",[c("content",{paddingTop:"var(--n-padding-bottom)"})])]),i("content-soft-segmented",[t(">",[c("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),i("footer-segmented",[t(">",[c("footer",{paddingTop:"var(--n-padding-bottom)"})])]),i("footer-soft-segmented",[t(">",[c("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),t(">",[v("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[c("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),c("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),c("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),c("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),c("content","flex: 1; min-width: 0;"),c("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[t("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),c("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),v("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[t("img",`
 display: block;
 width: 100%;
 `)]),i("bordered",`
 border: 1px solid var(--n-border-color);
 `,[t("&:target","border-color: var(--n-color-target);")]),i("action-segmented",[t(">",[c("action",[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),i("content-segmented, content-soft-segmented",[t(">",[c("content",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),i("footer-segmented, footer-soft-segmented",[t(">",[c("footer",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),i("embedded",`
 background-color: var(--n-color-embedded);
 `)]),fe(v("card",`
 background: var(--n-color-modal);
 `,[i("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),ve(v("card",`
 background: var(--n-color-popover);
 `,[i("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),eo={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},oo=Object.assign(Object.assign({},y.props),eo),no=x({name:"Card",props:oo,setup(e){const n=()=>{const{onClose:a}=e;a&&he(a)},{inlineThemeDisabled:r,mergedClsPrefixRef:o,mergedRtlRef:d}=ge(e),s=y("Card","-card",Ye,Ce,e,o),g=pe("Card",d,o),u=z(()=>{const{size:a}=e,{self:{color:p,colorModal:P,colorTarget:L,textColor:M,titleTextColor:E,titleFontWeight:_,borderColor:j,actionColor:O,borderRadius:I,lineHeight:A,closeIconColor:F,closeIconColorHover:H,closeIconColorPressed:N,closeColorHover:V,closeColorPressed:U,closeBorderRadius:W,closeIconSize:J,closeSize:K,boxShadow:Z,colorPopover:q,colorEmbedded:D,colorEmbeddedModal:X,colorEmbeddedPopover:G,[m("padding",a)]:Q,[m("fontSize",a)]:Y,[m("titleFontSize",a)]:ee},common:{cubicBezierEaseInOut:oe}}=s.value,{top:re,left:ne,bottom:te}=xe(Q);return{"--n-bezier":oe,"--n-border-radius":I,"--n-color":p,"--n-color-modal":P,"--n-color-popover":q,"--n-color-embedded":D,"--n-color-embedded-modal":X,"--n-color-embedded-popover":G,"--n-color-target":L,"--n-text-color":M,"--n-line-height":A,"--n-action-color":O,"--n-title-text-color":E,"--n-title-font-weight":_,"--n-close-icon-color":F,"--n-close-icon-color-hover":H,"--n-close-icon-color-pressed":N,"--n-close-color-hover":V,"--n-close-color-pressed":U,"--n-border-color":j,"--n-box-shadow":Z,"--n-padding-top":re,"--n-padding-bottom":te,"--n-padding-left":ne,"--n-font-size":Y,"--n-title-font-size":ee,"--n-close-size":K,"--n-close-icon-size":J,"--n-close-border-radius":W}}),b=r?me("card",z(()=>e.size[0]),u,e):void 0;return{rtlEnabled:g,mergedClsPrefix:o,mergedTheme:s,handleCloseClick:n,cssVars:r?void 0:u,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender}},render(){const{segmented:e,bordered:n,hoverable:r,mergedClsPrefix:o,rtlEnabled:d,onRender:s,embedded:g,tag:u,$slots:b}=this;return s==null||s(),l(u,{class:[`${o}-card`,this.themeClass,g&&`${o}-card--embedded`,{[`${o}-card--rtl`]:d,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:n,[`${o}-card--hoverable`]:r}],style:this.cssVars,role:this.role},f(b.cover,a=>a&&l("div",{class:`${o}-card-cover`,role:"none"},a)),f(b.header,a=>a||this.title||this.closable?l("div",{class:`${o}-card-header`,style:this.headerStyle},l("div",{class:`${o}-card-header__main`,role:"heading"},a||this.title),f(b["header-extra"],p=>p&&l("div",{class:`${o}-card-header__extra`,style:this.headerExtraStyle},p)),this.closable?l(Qe,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),f(b.default,a=>a&&l("div",{class:`${o}-card__content`,style:this.contentStyle,role:"none"},a)),f(b.footer,a=>a&&[l("div",{class:`${o}-card__footer`,style:this.footerStyle,role:"none"},a)]),f(b.action,a=>a&&l("div",{class:`${o}-card__action`,role:"none"},a)))}});export{no as N,Qe as a,De as r};
