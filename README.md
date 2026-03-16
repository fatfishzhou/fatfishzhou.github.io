# fatfishzhou.github.io

个人主页（静态站点，无需后端），用于博士/科研/机器人方向展示：简介、精选项目、分级项目清单、论文、CV/Research Statement 下载。

## 发布到 GitHub Pages（User Pages）
1. 在 GitHub 新建仓库：`fatfishzhou.github.io`（必须是这个名字）。
2. 将本目录内容提交并推送到该仓库的默认分支（`main`）。
3. GitHub 仓库 Settings -> Pages：选择从 `main` 分支部署（root）。
4. 访问：`https://fatfishzhou.github.io/`

## 本地预览（可选）
这是纯静态站点，任意静态服务器都可以：
```bash
python3 -m http.server 8000
```
然后打开 `http://localhost:8000/`。

## 你需要改的地方（优先级）
- `index.html` / `en/index.html`：一句话定位、研究兴趣、联系方式。
- `projects/robotics/index.html`：把机器狗项目的 TODO 换成真实内容（模块边界 + 指标 + 代码/视频链接）。
- `assets/`：替换为你最终版 `CV.pdf`、`RS.pdf`（并在首页更新文件名）。

