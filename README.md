# fatfishzhou.github.io

个人主页（静态站点，无需后端），用于展示项目经历、研究方向、论文成果与联系方式。

当前站点结构：
- `index.html`：中文首页，突出两条主线、精选项目、研究成果与联系方式
- `projects/`：按主题浏览项目库
- `projects/robotics/`：机器人与具身智能项目证据页
- `projects/ml/`：深度学习与时序建模项目页
- `research/`：论文状态、研究主题与能力迁移
- `about/`：个人定位、能力结构与适配角色
- `contact/`：联系方式、材料入口与建议联系内容
- `en/`：英文入口页

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

## 后续优先更新项
- `projects/robotics/index.html`：补齐真实模块边界、指标、代码和视频证据。
- `projects/ml/index.html`：补更完整的方法摘要、结果与论文链接。
- `research/index.html`：补正式论文题目、期刊/会议信息与时间点。
- `assets/`：替换为最终版 `CV.pdf`、`RS.pdf`，必要时补项目配图或架构图。
