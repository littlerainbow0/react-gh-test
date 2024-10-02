# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# react-gh-test

推送過程

查看当前文件状态： 使用以下命令查看当前工作区的文件状态，确认有哪些文件还没有被追踪或提交：

bash
複製程式碼
git status
添加文件到暂存区： 如果有未追踪的文件或修改的文件，你需要将它们添加到 Git 的暂存区。可以使用以下命令添加所有文件：

bash
複製程式碼
git add .
如果你只想添加特定文件，可以指定文件名：

bash
複製程式碼
git add <file_name>
提交更改： 添加文件后，接下来需要提交这些更改。提交时你可以写一条描述性的信息，说明这次提交的内容：

bash
複製程式碼
git commit -m "你的提交信息"
推送到 GitHub： 提交成功后，你可以将这些更改推送到远程仓库。你之前已经设置好了远程仓库关联，现在可以直接推送：

bash
複製程式碼
git push
如果这是你第一次推送，也可以使用以下命令：

bash
複製程式碼
git push -u origin main
-u 参数会将本地分支与远程分支关联起来，之后就可以直接使用 git push 推送更改，而不需要指定远程分支。


