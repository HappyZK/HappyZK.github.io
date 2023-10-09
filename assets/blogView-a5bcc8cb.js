import{d as b,u as y,r as i,o as x,D as k,aU as C,a as p,c as m,e as r,f as u,g as f,aV as S,w as T,al as A,aL as M,aW as D,aX as q,aY as B,A as V}from"./index-e19f6b4d.js";import{M as E}from"./index-d587c598.js";import{N}from"./Card-a868a8dd.js";const s=`# <center>Mark Down User Demo</center>

### 使用VSCode 编写 markdown必备插件

> VSCode 编写markdown 基础插件 MarkDown All in One
> VSCode 编写markdown 友好显示，格式转换 MarkDown Preview Enhanced（MPE)
> VSCode 编写markdown流程图 需插件支持 Markdown Preview Mermaid Support

### 字体、字号、颜色

<font face="黑体">我是黑体字</font>

<font face="微软雅黑">我是微软雅黑</font>

<font face="STCAIYUN">我是华文彩云</font>

<font color=#0099ff size=12 face="黑体">黑体</font>

<font color=gray size=5>gray</font>

<font color=#00ffff size=3>null</font>


### 文字样式

_斜体的文本_

*斜体的文本*

__粗体文本__

**粗体文本**

___加粗斜体___

***加粗斜体***

<font color=red> 红色字体 </font>

~~删除线文本~~

<u>下划线文本 </u>

==背景高亮==

脚注

脚注 | 脚注1 [^1] 脚注2[^2]

[^1]:这是一个脚注,解释上面的内容1
[^2]:这是一个脚注,解释上面的内容2

### 转义符  
markdown 的转义符为 \\

### 特殊字符
>	空格符	&nbsp;
<	小于号	&lt;
\\>	大于号	&gt;
&	和号	&amp;
￥	人民币	&yen;
©	版权	&copy;
®	注册商标	&reg;
°C	摄氏度	&deg;C
±	正负号	&plusmn;
×	乘号	&times;
÷	除号	&divide;
²	平方（上标²）	&sup2;
³	立方（上标³）	&sup3;

### 列表

+ 无序列表

- 无序列表
  * 无序列表1
    * 无序列表2
      * 无序列表3

有序列表 .后面 需要加空格
1. 有序列表1

2. 有序列表2

定义型列表表
:   1.(左侧有一个可见的冒号和四个不可见的空格）
:   2.(左侧有一个可见的冒号和四个不可见的空格）

### 区块/多级引用

>区块一
>> 区块二
>>> 区块三

> 请问 Markdwon 怎么用？ - 小白
>> 自己看教程！ - 愤青
>>> 教程在哪？ - 小白
>>>> 教程在哪？ - 小白


### 链接
[跳转百度](https://www.baidu.com)

### 图片
<!-- [外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-f2YzpiTA-1649945977852)(/image/wahaha.jpg)] -->
>图片限制宽高
<!-- <img src='https://img-blog.csdnimg.cn/20210111091358838.png' width=300px height=200px /> -->

>图片缩放
<!-- <img src='https://img-blog.csdnimg.cn/20210111091358838.png' width=40%/> -->

### 表格
> \\:- 左对齐， :-: 中心对齐，-: 右对齐

| 表头1      | 表头2      |
| :--------- | :--------- |
| 表头1内容  | 表头2内容  |
| 表头1内容2 | 表头2内容2 |

| 表头3      | 表头4      |
| ---------- | ---------- |
| 表头3内容  | 表头4内容  |
| 表头3内容2 | 表头4内容2 |

### html标签

#### 换行
第一行<br>第二行
#### 对齐方式
<p align="left">左对齐</p>
<p align="right">右对齐</p>
<p align="center">居中</p>
  align 方式:<br> left	把图像对齐到左边<br>right	把图像对齐到右边<br>middle	把图像与中央对齐<br>top	把图像与顶部对齐<br>bottom	把图像与底部对齐<br>
<center>居中</center>

#### 电脑按键
使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑

#### 折叠
<details>
<summary>展开查看规范</summary>
这是展开后的内容1
</details>

#### 锚点链接

[名称](#id)

<a href="#id">名称</a>

#### html方式编码支持
<div class="footer">
© 2004 Foo Corporation
</div>
例子：
<center>

<table>
<tr>
<th rowspan="2">值班人员</th>
<th>星期一</th>
<th>星期二</th>
<th>星期三</th>
</tr>
<tr>
<td>李强</td>
<td>张明</td>
<td>王平</td>
</tr>
</table>
</center>

### 任务列表

- [ ] 待完成
- [x] 已完成
- [ ] ~~未完成~~

<!-- ### 公式
#### <a href= "https://blog.csdn.net/weixin_42782150/article/details/104878759?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522164994222716782246433555%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=164994222716782246433555&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-2-104878759.142^v8^pc_search_result_cache,157^v4^control&utm_term=markdown+%E6%80%BB%E7%BB%93&spm=1018.2226.3001.4187">Markdown公式总结</a>
#### <a href="https://blog.csdn.net/qq_43808700/article/details/107345011?utm_source=app">katex最新教程</a> -->


<!-- 行级公式
$$ f(x)=\\int_{2}^{+\\infty} \\frac{dx}{x\\cdot \\sqrt[3]{x^2-3x+2}} $$

块级公式
\`\`\`math
f(x)=\\int_{2}^{+\\infty} \\frac{dx}{x\\cdot \\sqrt[3]{x^2-3x+2}}
\`\`\`

\`\`\` -->

### 代码注释
> 快捷键 ctrl + /
（注释在显示时是看不见的哦)
<!-- 这是一段注释的文字 -->
> hark 注释: hack方法就是利用markdown的解析原理来实现注释的。
> 
[//]: # (哈哈我是最强注释，不会在浏览器中显示。)
[^_^]: # (哈哈我是最萌注释，不会在浏览器中显示。)

### 缩进
【1】 &emsp;或&#8195; //全角
【2】 &ensp;或&#8194; //半角
【3】 &nbsp;或&#160;  //半角之半角

### 参考式

我经常去的几个网站[baidu][1]、[Leanote][2]。

[1]:http://www.baidu.com 
[2]:http://www.leanote.com

### 自动链接

&lt;http://www.baidu.com/&gt; 

&lt;[address@baidu.com](http://www.baidu.com/)&gt;

### 代码块
\`\`\`java
System.out.println("这是一个Java代码块");
\`\`\`

\`\`\`python
print("这是一个Python代码快")
\`\`\`

\`\`\`diff
// 数组去重(diff 显示 ，CodeReview 中经常使用)
const unique = (arr)=>{
-     return Array.from(new Set(arr))
+  return [...new Set(arr)]
}
\`\`\`
\`\` 方式包裹代码
C语言里的函数 \`scanf()\` 怎么使用？

缩进 4 个空格或是 1 个制表符

    #include &lt;stdio.h&gt;
    int main(void)
    {
      printf(&#34;Hello world\\n&#34;);
    }

\`\`\`c
#include stdio.h;
int main(void)
{
    printf(Hello world\\n;);
}
\`\`\`

\`\`\`javascript
var s = "JavaScript syntax highlighting";
alert(s);
\`\`\`

\`\`\`python
s = "Python syntax highlighting"
print s
\`\`\`

\`\`\`
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
\`\`\``,z={style:{display:"flex","flex-direction":"row","justify-content":"space-between",width:"100%"}},L={style:{width:"calc(100%)",padding:"16px"}},$=["onClick"],I={style:{cursor:"pointer"}},Y=b({__name:"blogView",setup(O){y(),new E;const w=i(),l=i(),o=i([]);async function g(a){w.value=s}async function _(){await V();const a=l.value.querySelectorAll(".v-md-editor-preview h2,h3,h4,h5,h6"),t=Array.from(a).filter(n=>!!n.innerText.trim());if(!t.length){o.value=[];return}const e=Array.from(new Set(t.map(n=>n.tagName))).sort();o.value=t.map(n=>({title:n.innerText,lineIndex:n.getAttribute("data-v-md-line"),indent:e.indexOf(n.tagName),height:n.offsetTop}))}const d=i(0),v=(a,t)=>{const{lineIndex:e}=a,n=l.value.querySelector(`.v-md-editor-preview [data-v-md-line="${e}"]`);n&&n.scrollIntoView({behavior:"smooth",block:"start"}),d.value=t},h=()=>{let a=null;return()=>{clearTimeout(a),a=setTimeout(()=>{let t=window.pageYOffset;const e=[];o.value.forEach(n=>{e.push(Math.abs(n.height-t))}),d.value=e.indexOf(Math.min.apply(null,e))},500)}};return x(async()=>{await g(),await _(),window.addEventListener("scroll",h())}),k(()=>{window.removeEventListener("scroll",h())}),setTimeout(()=>{},1e3),(a,t)=>{const e=C("v-md-preview");return p(),m("div",z,[r("div",L,[r("div",{ref_key:"editor",ref:l},[u(e,{class:"entry-content",text:f(s),"onUpdate:text":t[0]||(t[0]=n=>S(s)?s.value=n:null)},null,8,["text"])],512)]),r("div",null,[u(f(N),{style:{position:"sticky",top:"16px",width:"300px"}},{default:T(()=>[(p(!0),m(A,null,M(o.value,(n,c)=>(p(),m("div",{key:c,style:D({padding:`4px 8px 4px ${(n.indent+1)*16}px`}),onClick:P=>v(n,c),class:q(c===d.value?"title-active":"")},[r("a",I,B(n.title),1)],14,$))),128))]),_:1})])])}}});export{Y as default};
