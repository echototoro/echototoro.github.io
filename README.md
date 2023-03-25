# echototoro.github.io
Powered by [Hexo](https://github.com/hexojs/hexo) + [NexT](https://github.com/theme-next/hexo-theme-next), hosted by GitHub Pages.

### Hexo的命令
>1. `[内容]`选填；`<内容>`必填。
>2. 以下命令需要进入`blog`路径中进行（`cd blog`）。

1. 新建一篇（发布/草稿）文章

    ```shell
    hexo new [layout] <title>
    # e.g. hexo new 歌词海报
    ```
    ><details>
    ><summary><code>[layout]</code>可以选择<code>scaffolds</code>文件夹下的多种模式</summary>
    >
    >1. `post`：（默认）发布
    >2. `draft`：草稿，不会发布。（需要用命令`hexo publish <filename>`把`_drafts`移动到`_posts`）
    ></details>
2. 启动本地开发服务器

    ```shell
    hexo server # 或：hexo s
    # 浏览器打开：http://localhost:4000/
    # 在命令行用 ctrl+c 关闭服务器
    ```

    >增加`-p 数字`可以指定端口号。
3. 发布（生成静态文件、并且部署网站）

    ```shell
    hexo g -d   # 或：hexo d -g

    # 可能需要输入github的账户名、密码
    # 或用压缩发布：npm run publish
    ```
4. 清理缓存（发布前后或本地服务器看不到更新内容时）

   ```shell
   hexo clean
   ```
5. 列出网站列表信息

    ```shell
    hexo list <type>
    ```
    >`<type>`必选以下之一：`page`、`post`、`route`、`tag`、`category`。

### 配置
1. Hexo总体配置：`_config.yml`
2. themes的配置：`themes/next/_config.yml`
3. themes的微调：`themes/next/`的资源文件

### <details>
<summary>移植、升级博客</summary>
1. 保留文章资源和配置

    1. 文章资源：`source/`下的所有文件

        >`scaffolds/`下是新建文件的模板
    2. 配置（Hexo和themes）：`_config.yml`
    3. 一些构建文件，如：`package.json`、`gulpfile.js`
    4. 其他在主题代码中的改动
2. 新建博客配置：

    ```shell
    # 1. 新建Hexo配置
    hexo init [folder]

    # 2. 进入文件夹
    cd blog

    # 3. 安装Hexo依赖
    npm install

    # 4. 把保留文章资源和配置复制进来（手动复制）

    # 5. 安装主题和插件（不需要npm安装）

    # 6. 按照Hexo的命令进行发布
    ```
</details>

>配置文档地址：[Hexo配置](https://hexo.io/zh-cn/docs/)、[NexT配置](https://theme-next.org/docs/)。
