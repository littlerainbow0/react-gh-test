# 專案資料夾結構說明: cmd > tree /F

* 使用VScode開啟資料夾，推薦下載plugin套件: Material Icon Theme

```markdown
react-gh-test-main
├─ ./
│  .gitignore
│  eslint.config.js   
│  index.html         客戶端查看的入口，引用main.jsx
│  main.jsx           入口JS，引用所有jsx, css
│  package-lock.json
│  package.json       * 可能會再改這邊的東西
│  README.md
│  tailwind.config.js
│  txt.txt
│  vite.config.js     * 可能會再改這邊的東西
│
├─public `已被static`  * 怕踩坑這裡不要動><
│      txt.txt
│      vite.svg
│
└─src `主要開發環境，請大家動這邊就好`
    │  App.css
    │  App.jsx
    │  index.css
    │  main.jsx
    │  txt.txt
    │  車廂svg放這裡
    │  前台會動的svg放這裡
    ├─assets          靜態檔案資料夾
    │  │  react.svg
    │  │
    │  └─icons        .svg, .png: 透明底的圖檔
    │  └─images       image/*:    圖檔
    │  └─scss         .scss:      共用、自訂的scss
    ├─components      .jsx, .css: header, footer, 車廂card等元件
    └─routes          .jsx:       各個頁面，如首頁、預約、會員登入等
```
* ./public/
```
此資料夾已經被Vite自動static，理論上/public/會放置靜態資料
可能採坑!!! 使用./public/images/...png，本地端可以正常運作，佈署會出問題
為了大家的路由使用習慣，把靜態檔案放在「.src/assets/靜態資料」
```

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

# git: react-gh-test

推送過程

查看当前文件状态： 使用以下命令查看当前工作区的文件状态，确认有哪些文件还没有被追踪或提交：


git status
添加文件到暂存区： 如果有未追踪的文件或修改的文件，你需要将它们添加到 Git 的暂存区。可以使用以下命令添加所有文件：


git add .
如果你只想添加特定文件，可以指定文件名：


git add <file_name>
提交更改： 添加文件后，接下来需要提交这些更改。提交时你可以写一条描述性的信息，说明这次提交的内容：


git commit -m "你的提交信息"
推送到 GitHub： 提交成功后，你可以将这些更改推送到远程仓库。你之前已经设置好了远程仓库关联，现在可以直接推送：


git push
如果这是你第一次推送，也可以使用以下命令：


git push -u origin main
-u 参数会将本地分支与远程分支关联起来，之后就可以直接使用 git push 推送更改，而不需要指定远程分支。


分支創建與合併
1. 创建自己的分支：
队员可以在当前代码库的基础上创建一个新的分支。建议每个队员都在自己独立的分支上工作，以便代码管理更加清晰，避免冲突。

git checkout -b linlin
(linlin 換成自己的名字～)

2. 查看当前分支：
队员可以使用以下命令查看当前所在的分支：
git branch
这个命令会列出本地的所有分支，当前所在的分支会有一个 * 标记。

3. 开发并提交代码：
在新分支上进行开发，完成修改后，添加并提交更改：
git add .
git commit -m "提交信息"

4. 推送到远程分支：
完成提交后，队员可以将自己的分支推送到远程仓库。推送新分支的命令如下：

git push -u origin linlin

-u 参数会让 Git 记住这个分支与远程的关联，之后该队员可以直接使用 git push 来推送更新。

5. 远程合并请求（Pull Request，PR）：
当队员完成工作后，他们通常会发起一个合并请求（Pull Request，PR），以便将分支合并到 main 或其他主分支上。具体操作步骤：

登录到 GitHub。
找到该仓库，并选择刚推送的分支。
点击 “New pull request” 按钮。
选择将该分支合并到主分支（例如 main）。
填写必要的说明，最后点击提交。
之后，项目维护者或其他成员可以审查代码并合并到主分支。

6. 其他队员更新本地代码：
在某个分支被合并到主分支后，其他队员可以切换回主分支并拉取最新代码，以确保代码保持同步：

bash
複製程式碼
git checkout main
git pull



