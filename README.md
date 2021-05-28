<div style="background-color:#FDF5E6;padding:20px;">

# <font color="#800080">第一次任务学习收获</font>:closed_book:

#### 我的个人[网站](https://devolopcode.github.io):globe_with_meridians:

```markdown
https: //devolopcode.github.io
```

#### 创建新分支<font color="#FFA500">指令</font>

```markdown
echo "# test" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M branchname
git remote add origin https://github.com/repository/.git
git push -u origin branchname
```

#### markdown<font color="#FFA500">指令</font>

- `标题`

  ```markdown
  # 一级标题

  ## 二级标题

  ### 三级标题

  #### 四级标题

  ##### 五级标题

  ###### 六级标题
  ```

  标题也可以通过在下一行加多个\=或\-来实现

- 文字样式

  ```markdown
  _我是斜体_
  **我是粗体**
  **_我是斜体加粗体_**
  ```

- 摘要或引用
  样式

  > 摘要或引用
  >
  > > 数据结构
  > >
  > > > 树
  > > >
  > > > > 二叉树
  > > > >
  > > > > > 平衡二叉树
  > > > > >
  > > > > > > 满二叉树

  ```
  > 摘要或引用
  >
  > > 数据结构
  > >
  > > > 树
  > > >
  > > > > 二叉树
  > > > >
  > > > > > 平衡二叉树
  > > > > >
  > > > > > > 满二叉树
  可以通过这种方式嵌套
  ```

- 列表

  - 嵌套列表

    - 嵌套列表

      - 嵌套列表

  1. 1.
     2.

  2. 1.
     2.
  3.

  ```markdown
  无序

  - 内容 1
  - 内容 2
  - 内容 3

  +和\*(星号)也能实现无序

  有序

  1. 内容 1
  2. 内容 2
  3. 内容 3

  嵌套

  - 嵌套列表

    - 嵌套列表

      - 嵌套列表

  1. 1.
     2.
  2. 1.
     2.
  3. 有序列表嵌套功能只需要在次级列表前面加一个空格，无序要换两行，加三个空格
  ```

- 分割线

  ***

  ```markdown
  ---

  \*\*\*

  三个-或\*（星号），如果上面有内容，一定要隔开一行，不然上边内容会被识别为标题
  ```

- 超链接

  这是我的个人[网站](https://devolopcode.github.io)的地址

  ```markdown
  [链接文字](地址)
  ```

- 代码块

  ````markdown
  ```语言（可以不加）
     不同语言会显示不同颜色
  ```

  ```javascript
  console.log("hello world");
  ```

  ```python
     print("hello world")
  ```
  ````

  也可以在文字两边各加个\`来`标记`文字

- 图片

  ![这是一个图片](/img/v2-47d2a3e3a7587bbade518e3eea88c9c5_720w.png "太开心")

  ```markdown
  ![图片无法显示时的文字](路径 "鼠标停在图片显示的文字")
  markdown 无法设置图片大小，如果要设置图片大小用 img 标签
  ```

- 表格

  1. 符号|是每一行的分割
  2. 通常一行没有回车符的文本就代表表格中的一行
  3. 表格头和表格体使用\-\-\-\-\-\-进行分割，其中\-的数量应该大于等于三个
  4. 在第三点钟的符号前后可以加入\:设定单元格的对齐方式

     - 不加\:时，表示默认的左对齐

     - 在前后都加\:时，表示水平居中对齐

     - 在尾部加\:时，表示右对齐

  5. 在单元格内换行时，可以使用<br/>进行换行操作
  6. 每一行的列数允许少于总列数

  | title          |     title1     |     title2     |         title3 |
  | :------------- | :------------: | :------------: | -------------: |
  | left           |     center     |     center     |          rignt |
  | 超长内容试一试 | 超长内容试一试 | 超长内容试一试 | 超长内容试一试 |

  ```markdown
  | title          |     title1     |     title2     |         title3 |
  | :------------- | :------------: | :------------: | -------------: |
  | left           |     center     |     center     |          rignt |
  | 超长内容试一试 | 超长内容试一试 | 超长内容试一试 | 超长内容试一试 |
  ```

- 自动转换

  可以使用<可识别内容>的语法，通过<>来完成自动转换

  <http://baidu.com>

  <address@example.com>

  ```markdown
  <http://baidu.com>
  <address@example.com>
  ```

- 高亮

  ==高亮==

  github 好像不支持高亮......

  ```markdown
  ==高亮==
  ```

- emoji🥰

  :smile: :point_up: :jack_o_lantern: :checkered_flag: :stuck_out_tongue: :open_hands:

  emoji 表情是通过简单编码来实现的，可以通过这个网站查询<https://www.emojiall.com/zh-hans>

  ```markdown
  :smile: :point_up: :jack_o_lantern: :checkered_flag: :stuck_out_tongue: :open_hands:
  ```

- 其他
  markdown 支持 html 标签，设置自定义样式时可以通过 html 标签来实现，markdown 对缩进换行都有严格要求，这样才能实现文档层级要求

#### <font color="#9932CC">krita</font> 学习

krita 官网：<https://krita.org/zh>

krita 介绍：Krita 这个自由开源数字绘画软件项目，从立项到现在已经经历了 20 多年的风风雨雨。和许多在业界久负盛名的项目不同，Krita 的成长之路异常艰辛。开发人员一代代薪火相传，无数志愿者来来去去。项目前期十几年如一日的门庭冷落，数度改名，在姐妹项目的包容下艰难存续，到后来被迫自寻出路，大胆地改变开发方向并自筹资金。在不知不觉中，Krita 已经成长为一款相对成熟，用户群体以百万计的行业软件。现在的它既是许多专业人士的谋生工具，也是众多爱好者自我表达的工具。

![krita](/img/2021-development-fund.png "krita")

- 快捷键

  - Ctrl\+N：快速新建画板

  - Ctrl\+Shift\+N：快速新建图层

  - Ctrl\+O：打开已有图像

  - Ctrl\+W：关闭当前图像

  - Ctrl\+S：保存当前图像

  - Ctrl\+Shift\+S：另存为

  - Ctrl\+Z：撤销操作

  - Ctrl\+笔尖点击：拾取画布颜色

  - Shift\+笔尖左右拖动：调整笔刷大小

  - 中间键\+笔尖悬空移动：画布视图缩放

  - Ctrl\+T：选中图层

- 图层和蒙版

  - 图层

    图层可以让你更好的控制作品的绘制过程，例如，你可以把图层的线稿跟颜色分开画在不同的图层上面，这样就算不小心把颜色画坏了，也不至于连线稿一起毁掉，你可以单独编辑每个图层，还可以为它们添加特殊效果，如图层样式、透明度、滤镜和变形等，Krita 会把上面的这些内容在图层组中进行合成，生成最终的图像。听起来挺厉害，但这也只是 Krita 丰富的图像处理功能的其中一种而已！

  - 蒙版和滤镜

    Krita 支持对图层内容进行非破坏性编辑。非破坏性编辑指的是尽管图层的显示效果发生了改变，但图像的原始数据并没有发生永久改变。Krita 只不过在原始图层上应用了一个实时生效的滤镜或者蒙版来改变图像的显示效果，只需隐藏这些滤镜或者蒙版图层，原始图像即可按原样显示。这在需要反复切换对比前后效果的绘画流程中极为有用。

  - 蒙版分类

    1. 滤镜蒙版

       可以给图片添加各种滤镜，并可以根据需要擦除部分区域的滤镜

    2. 选区蒙版

       配合选择功能创建选区

    3. 变形蒙版

       配合选择工具变形图像

    4. 透明度蒙版

       创建透明效果

    5. 智能填色蒙版

       添加颜色

- 颜色模型

  1. RGB：RGB 是我们接触最多的颜色空间，由三个通道表示一幅图像，分别为红色(R)，绿色(G)和蓝色(B)。这三种颜色的不同组合可以形成几乎所有的其他颜色。RGB 颜色空间利用三个颜色分量的线性组合来表示颜色，任何颜色都与这三个分量有关，而且这三个分量是高度相关的，所以连续变换颜色时并不直观，想对图像的颜色进行调整需要更改这三个分量才行。但是人眼对于这三种颜色分量的敏感程度是不一样的，在单色中，人眼对红色最不敏感，蓝色最敏感，所以 RGB 颜色空间是一种均匀性较差的颜色空间。如果颜色的相似性直接用欧氏距离来度量，其结果与人眼视觉会有较大的偏差。对于某一种颜色，我们很难推测出较为精确的三个分量数值来表示。

  2. HSV：基于上述理由，在图像处理中使用较多的是 HSV 颜色空间，它比 RGB 更接近人们对彩色的感知经验。非常直观地表达颜色的色调、鲜艳程度和明暗程度，方便进行颜色的对比。在 HSV 颜色空间下，比 BGR 更容易跟踪某种颜色的物体，常用于分割指定颜色的物体。HSV 表达彩色图像的方式由三个部分组成：Hue（色调、色相）Saturation（饱和度、色彩纯净度）Value（明度）

  3. HSL：HLS 和 HSV 比较类似，这里一起介绍。HLS 也有三个分量，hue（色相）、saturation（饱和度）、lightness（亮度）。

  4. CMYK：CMYK 颜色模型是一种应用相减原理的 色彩系统 。它的颜色来源于反射光线。当所有的颜色叠加在一起时会产生黑色，当没有任何颜色加入的时候为白色。CMYK 颜色模型包括青 (cyan)、品红 (magenta)、黄 (yellow)和黑 (black)，为避免与 Blue 混淆，黑色用 K 表示。 彩色打印、印刷等应用领域采用打印墨水、彩色涂料的反射光来显现颜色，是一种减色方式。

#### <font color="#008B8B">visual code</font> 插件

```markdown
Chinese(Simplified)Language Pack for Visual Studio Code
Atom One Dark Theme
Auto Rename Tag
Beautify
Bracket Pair Colorizer
Code alignment
CSS Peek
ESLint
filesize
IntelliSense for CSS class names in HTML
JavaScript(ES6)code snippets
JavaScript Snippets
macros
Material Icon Theme
npm
npm Intellisense
Path Intellisense
PHP DocBlocker
PHP Intelephense
PHP IntelliSense
Prettier-Code formatter
Sass/Less/Stylus/Pug/Jade/Typescript/Javascript Compile Hero Pro
Browser Preview
Color Highlight
open in browser
```

</div>
