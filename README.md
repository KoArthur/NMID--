<div style="background-color:#FDF5E6;padding:20px;">

# <font color="#800080">第一次任务学习收获</font>:closed_book:

#### 我的个人[网站](https://devolopcode.github.io):globe_with_meridians:

```markdown
https: //devolopcode.github.io
```

#### 在本地创建仓库并远程同步<font color="#FFA500">步骤</font>

- 配置用户

  ```markdown
  git config --global user.name "[user]"
  git config --global user.email "[address@example.com]"
  ```

- 在本地创建一个仓库和分支并远程同步

  ```markdown
  git init
  git add README.md
  git commit -m "信息"
  git branch -M [branch]
  git remote add origin https://github.com/[repository]/.git
  git push -u origin [branch]
  ```

- 上传项目

  ```markdown
  git add .
  git commit -m "信息"
  git push -u origin [branch]
  ```

- SSL 问题解决办法

  ```markdown
  git config --global https.proxy
  or
  git config --global --unset https.proxy
  ```

#### 常用 git <font color="#FFA500">指令</font>

- 新建代码库

  ```markdown
  git init #在当前目录新建一个 Git 代码库
  git init [project-name] #新建一个目录，将其初始化为 Git 代码库
  git clone [url] #下载一个项目和它的整个代码历史
  ```

- 配置

  ```markdown
  git config --list #显示当前的 Git 配置
  git config -e --global #编辑 Git 配置文件
  git config --global user.name "[user]"
  git config --global user.email "[address@example.com]" #设置提交代码时的用户信息
  ```

- 添加/删除文件

  ```markdown
  git add [file1] [file2] ... #添加指定文件到暂存区
  git add [dir] #添加指定目录到暂存区，包括子目录
  git add . #添加当前目录的所有文件到暂存区
  git rm [file1] [file2] ... #删除工作区文件，并且将这次删除放入暂存区
  git rm --cached [file] #停止追踪指定文件，但该文件会保留在工作区
  git mv [file-original] [file-renamed] #改名文件，并且将这个改名放入暂存区
  ```

- 代码提交

  ```markdown
  git commit -m [message] #提交暂存区到仓库区
  git commit [file1] [file2] ... -m [message] #提交暂存区的指定文件到仓库区
  git commit -a #提交工作区自上次 commit 之后的变化，直接到仓库区
  git commit -v #提交时显示所有 diff 信息
  git commit --amend -m [message] #使用一次新的 commit，替代上一次提交,如果代码没有任何新变化，则用来改写上一次 commit 的提交信息
  git commit --amend ... #重做上一次 commit，并包括指定文件的新变化
  ```

- 分支

  ```markdown
  git branch #列出所有本地分支和远程分支
  git branch -r #列出所有远程分支
  git branch -a 列出所有本地分支和远程分支
  git branch [branch-name] #新建一个分支，但依然停留在当前分支
  git checkout -b [branch] #新建一个分支，并切换到该分支
  git branch [branch] [commit] #新建一个分支，指向指定 commit
  git branch --track [branch] [remote-branch] #新建一个分支，与指定的远程分支建立追踪关系
  git checkout [branch-name] #切换到指定分支，并更新工作区
  git branch --set-upstream [branch] [remote-branch] #建立追踪关系，在现有分支与指定的远程分支之间
  git merge [branch] #合并指定分支到当前分支
  git cherry-pick [commit] #选择一个 commit，合并进当前分支
  git branch -d [branch-name] #删除分支
  git push --delete origin [branch] #删除远程分支
  git push --set-upstream origin [branch]
  git push -u origin [branch] #上传本地分支并设置分支关联关系
  git branch -u origin/[branch]
  git branch --set-upstream-to=origin/test #设置本地分支与远程分支关联关系
  git branch --unset-upstream [branch] #取消本地分支关联关系
  git branch -vv #查看对应关系
  ```

- 标签

  ```markdown
  git tag #列出所有 tag
  git tag [tag] 新建一个 tag 在当前 commit
  git tag [tag] [commit] #新建一个 tag 在指定 commit
  git show [tag] #查看 tag 信息
  git push [remote] [tag] #提交指定 tag
  git push [remote] --tags #提交所有 tag
  git checkout -b [branch] [tag] #新建一个分支，指向某个 tag
  ```

- 查看信息

  ```markdown
  git status #显示有变更的文件
  git log #显示当前分支的版本历史
  git log --stat #显示 commit 历史，以及每次 commit 发生变更的文件
  git log --follow [file]
  git whatchanged [file] #显示某个文件的版本历史，包括文件改名
  git log -p [file] #显示指定文件相关的每一次 diff
  git blame [file] #显示指定文件是什么人在什么时间修改过
  git diff #显示暂存区和工作区的差异
  git diff --cached [] #显示暂存区和上一个 commit 的差异
  git diff HEAD #显示工作区与当前分支最新 commit 之间的差异
  git diff [first-branch]...[second-branch] #显示两次提交之间的差异
  git show [commit]#显示某次提交的元数据和内容变化
  git show --name-only [commit] #显示某次提交发生变化的文件
  git show [commit]:[filename] #显示某次提交时，某个文件的内容
  git reflog #显示当前分支的最近几次提交
  ```

- 远程同步

  ```markdown
  git fetch [remote] #下载远程仓库的所有变动
  git remote -v #显示所有远程仓库
  git remote show [remote] #显示某个远程仓库的信息
  git remote add [shortname] [url] #增加一个新的远程仓库，并命名
  git pull [remote] [branch] #取回远程仓库的变化，并与本地分支合并
  git push [remote] [branch] #上传本地指定分支到远程仓库
  git push [remote] --force #强行推送当前分支到远程仓库，即使有冲突
  git push [remote] --all #推送所有分支到远程仓库
  git pull origin [branch] #同步远程仓库到本地，等于 git fetch+git merge
  git fetch origin [branch] #从远程仓库获取最新
  git merge origin [branch] #进行合并
  ```

- 撤销

  ```markdown
  git checkout [file] #恢复暂存区的指定文件到工作区
  git checkout [commit] [file] #恢复某个 commit 的指定文件到工作区
  git checkout . #恢复上一个 commit 的所有文件到工作区
  git reset [file] #重置暂存区的指定文件，与上一次 commit 保持一致，但工作区不变
  git reset --hard #置暂存区与工作区，与上一次 commit 保持一致
  git reset [commit] #重置当前分支的指针为指定 commit，同时重置暂存区，但工作区不变
  git reset --hard [commit] #重置当前分支的 HEAD 为指定 commit，同时重置暂存区和工作区，与指定 commit 一致
  git reset --keep [commit] #重置当前 HEAD 为指定 commit，但保持暂存区和工作区不变
  git revert [commit] #新建一个 commit，用来撤销指定 commit，后者的所有变化都将被前者抵消，并且应用到当前分支
  ```

- 压缩包

  ```markdown
  git archive #生成一个可供发布的压缩包
  ```

- SLL

  ```markdown
  git config --global https.proxy #查看 git 代理配置
  git config --global -l #查看 git 的所有配置
  ssh-keygen -t rsa -C "address@example.com" #生成 SLL
  git config --global --unset https.proxy #取消执行代理
  ```

- 使用 git 指令的好处

  能够方便修改文件结构

- 与 git 相关的文件

  ```markdown
  .gitconfig #git 配置文件
  .minttyrc #git 样式文件
  .viminfo #vim 配置文件
  .vimrc #vim 样式文件
  .bash_history #执行过的命令行记录
  ```

  这些文件默认都放在`c:\users\user\[user]`，vim 可以通过 Linux 命令打开

#### markdown <font color="#FFA500">指令</font>

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

  _我是斜体_
  **我是粗体**
  **_我是斜体加粗体_**
  我是^上标^
  我是~下标~

  ```markdown
  _我是斜体_
  **我是粗体**
  **_我是斜体加粗体_**
  我是^上标^
  我是~下标~
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

  ![这是一个图片](img/v2-47d2a3e3a7587bbade518e3eea88c9c5_720w.png "太开心")

  ```markdown
  ![图片无法显示时的文字](路径 "鼠标停在图片显示的文字")
  ```

  markdown 无法设置图片大小，如果要设置图片大小用 img 标签

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

  上面六个表情对应的编码

  ```markdown
  :smile: :point_up: :jack_o_lantern: :checkered_flag: :stuck_out_tongue: :open_hands:
  ```

- 其他
  markdown 支持 html 标签，设置自定义样式时可以通过 html 标签来实现，markdown 对缩进换行都有严格要求，这样才能实现文档层级要求

#### <font color="#9932CC">krita</font> 学习

krita 官网：<https://krita.org/zh>

krita 介绍：Krita 这个自由开源数字绘画软件项目，从立项到现在已经经历了 20 多年的风风雨雨。和许多在业界久负盛名的项目不同，Krita 的成长之路异常艰辛。开发人员一代代薪火相传，无数志愿者来来去去。项目前期十几年如一日的门庭冷落，数度改名，在姐妹项目的包容下艰难存续，到后来被迫自寻出路，大胆地改变开发方向并自筹资金。在不知不觉中，Krita 已经成长为一款相对成熟，用户群体以百万计的行业软件。现在的它既是许多专业人士的谋生工具，也是众多爱好者自我表达的工具。

![krita](img/2021-development-fund.png "krita")

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

#### <font color="#1E90FF">Linux</font> 指令

- 学习书籍

  Linux 就该这么学 pdf<https://www.linuxprobe.com/docs/LinuxProbe.pdf>

- 帮助命令

  ```markdown
  指令 --help
  如：cd --help
  不过全是英文......
  ```

- 日期时间

  ```markdown
  date #输出日期时间，如 2021 年 05 月 29 日 22:05:35
  date "+%Y-%m-%d %H:%M:%S" #自定义日期时间格式，如 2021-05-29 22:06:31，+号必须添加，date 还有其他参数：%j 表示一年中的第几天
  %t 表示跳格
  date -s "20170901 8:30:00" #设置系统时间
  ```

- 切换目录

  ```markown
   cd 目录 #绝对路径或相对路径
   cd / #根目录
   cd - #返回之前所在目录
   cd .. #返回上级目录
   cd ../.. #返回上两级目录
   cd !$ #把上个命令的参数作为cd 的参数来使用
   pwd #查看当前目录
  ```

- 查看文件

  ```markdown
  ls -al #查看所有文件
  ls -a #查看隐藏文件
  ls -l #查看文件
  ls -A #忽略.和..文件
  ls -r #逆向排序
  ls -t #更新时间排序
  ls -S #大文件在前
  ls -R #展现所有文件夹的内容
  ls -lh #显示文件大小
  ```

  结果示例

  ```markdown
  -rw-r--r-- 1 fanli 197121 11018 May 28 23:53 README.md
  drwxr-xr-x 1 fanli 197121 0 May 28 22:32 img/
  ```

  最前面的\-代表是文件，d 则代表文件夹，后面的 rwx 分别代表读，写和可执行权限

- 创建文件和文件夹

  ```markdown
  touch 文件
  mkdir 目录
  mkdir -p 多级目录
  ```

- 删除文件和文件夹

  ```markdown
  rm 文件
  rmdir 空目录
  rm -rf 非空目录 #r：删除目录 f：不提示 一定要小心使用
  ```

- 读写文件

  读文件

  ```markdown
  cat 文件
  ```

  写文件

  ```markdown
  vim 文件
  ```

</div>
