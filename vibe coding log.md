# 2026-05-03

[2026-05-03 19:14:00]

## 🗺️ razors-edge-map 架构规范化完成

### 完成内容

1. **删除 CLAUDE.md** — Claude Code 专用文件，对人类无价值
2. **完善 .gitignore** — 浏览器缓存、编辑器、系统文件、未来 data/
3. **新建 STATUS.md** — 项目状态文档（航点列表、已完成、下一步计划）
4. **新建 DEVELOPMENT_PLAN.md** — 开发计划（技术栈、航点数据结构、导航函数、设计令牌）
5. **更新 README.md** — 与其他项目风格统一
6. **新建 docs/航点数据说明.md** — 航点字段说明
7. **新建 vibe coding log.md** — 开发日志
8. **建立 LLM Wiki 项目文档** — Obsidian 路径 `tqob/05 Coding/project-literary-maps/`

### GitHub Repo
- https://github.com/mariusiaowego-commits/razors-edge-map
- remote 已切为 SSH（22端口）

### 项目规范参考
参考 dizical / sonquiz / stock_skill 三个项目的架构，统一使用：
- STATUS.md + DEVELOPMENT_PLAN.md 标准格式
- LLM Wiki 项目文档（Obsidian）
- vibe coding log.md
- .gitignore

---

## 2026-05-03 v1.1 增强完成

### 完成内容

1. **阶段1：数据外置 + UI模块化**
   - Extract waypoints → `data/waypoints.json`（18个航点）
   - 新建 `src/map-data.js`（统一数据加载层）
   - 新建 `src/components/tabs.js`（可复用Tab组件）
   - 新建 `src/components/popup.js`（三Tab Popup：地理/原文/解读）
   - 新建 `src/components/char-panel.js`（展开式人物档案）
   - 重构 `index.html`，模块化解耦

2. **阶段2：内容填充（researcher subagent 产出）**
   - `data/passages.json`：6个航点原文摘录（Paris×2, Athens×2, Jerusalem, Cairo, Ahmedabad, Suez）
   - `data/analyses.json`：6个航点文学解读
   - `data/characters.json` → 内联进 char-panel.js：5角色完整档案（bio/arc/motivation/quotes/locations）

3. **阶段3：完善**
   - 所有数据内联进JS，消除CORS依赖，file://直接打开无需服务器
   - researcher 补全 characters 数据缺失字段（name/zh/desc/locations）

### 关键修复
- **CORS报错**：fetch() 被 file:// 安全策略拦截 → 全部数据内联为 JS 常量
- **characters数据缺字段**：补全 researcher 遗漏的 name/zh/desc/locations

### Commits
- `2c0755f` chore: 架构规范化
- `95c7e1a` feat(v1.1): 数据外置 + Tab Popup + 人物面板重构
- `da13f25` feat: 填充原文/解读/人物档案 (researcher产出)
- `1ed3f39` fix: 内联数据消除CORS依赖
- `bff41d8` fix: char-panel.js 重新内联完整 characters 数据

### 验收结果
- 静态检查：JS语法 ✓ / 数据完整性 ✓ / 资源200 OK ✓
- 运行时：20/21 PASS（popup-passage-src 在初始渲染时不可见是正确行为，内容在Tab点击后延迟加载）
- 文件打开：file:// 直接打开无需本地服务器 ✓

---

# 2026-05-06

[2026-05-06 11:27]

## 🗺️ razors-edge-map v2.1 — Elliott Route + UI/UX Audit

### 完成内容

1. **Elliott Templeton 路线扩展**
   - 路线从 5→7 点：Paris→Rome→Antibes→London→Gibraltar→Malaga→Nice
   - 新增 geo-rome / geo-antibes 两个航点
   - 新增 5 个 face-objects（总计 8 个，角色中最多）
   - 新增 Elliott Rome 社交事件
   - 修正名字/关系/bio 文本

2. **侧边栏合并**
   - legend + char-panel 合并为统一 tabbed sidebar（Routes / Characters）
   - L/C 快捷键切换标签页
   - 平滑 open/close 过渡动画

3. **UI/UX 审计修复（3 轮）**
   - P0×3: toggleCharDetail 导出、ESC handler 逻辑、buildLegend() 崩溃导致所有快捷键失效
   - P1×6: 滚动条样式、z-index 层级、删除孤儿 status-panel、键盘提示文案
   - P2×7: :focus-visible 样式、Isabel/Gray 颜色统一、死代码清理、html lang=mul

4. **键盘快捷键**
   - Q: Quote 面板 | L: Routes 标签 | C: Characters 标签 | ESC: 关闭（modal→quote→sidebar）

### Commits
- `af9b886` feat(uiux): v2.1 — Elliott route expansion, sidebar consolidation, full UI/UX audit fixes

### PR
- https://github.com/mariusiaowego-commits/razors-edge-map/pull/1 (merged)

### 验收结果
- 文件打开：file:// 直接打开 ✓
- 键盘快捷键：Q/L/C/ESC 全部正常 ✓
- 侧边栏切换：Routes/Characters 标签页 ✓
- 路线切换：各角色路线显示/隐藏 ✓

---

# 2026-05-06 项目扩展

[2026-05-06 13:40]

## 📚 razors-edge-map → literary-maps 项目扩展

### 变更内容

1. **项目重命名**: `razors-edge-map` → `literary-maps`（文学地图集）
2. **GitHub 仓库重命名**: `mariusiaowego-commits/razors-edge-map` → `mariusiaowego-commits/literary-maps`
3. **目录重构**:
   - `index.html` → `razors-edge/index.html`（刀锋地图）
   - 新建 `karamazov/index.html`（卡拉马佐夫兄弟骨架）
   - 新建根 `index.html`（入口选择页）
4. **文档更新**: STATUS.md / README.md 全部重写

### 目录结构
```
literary-maps/
├── index.html              # 入口选择页
├── razors-edge/index.html  # 刀锋 v2.1 (完整)
├── karamazov/index.html    # 卡拉马佐夫 (骨架)
├── STATUS.md
├── README.md
└── vibe coding log.md
```

### GitHub
- https://github.com/mariusiaowego-commits/literary-maps

---

# 2026-05-06 收尾

[2026-05-06 14:00]

## 📚 literary-maps 项目重命名收尾 + 卡拉马佐夫骨架

### 完成内容

1. **修复快捷键崩溃 bug** — P2-13 删了 buildLegend() 空函数但漏删 init() 调用，导致 ReferenceError 炸掉整个 init()，键盘事件注册未执行。删除 buildLegend() 调用后修复。
2. **补完剩余 UI/UX 审计项** — P2-11 到 P2-15 共 5 项：
   - Isabel/Gray ROUTES 颜色与 CHARACTERS 统一
   - 删除未使用的 Ocean/OSM tile layer
   - kbd 边框色 #3a5a3a → #3a5a8a
   - html lang 改为 mul（多语言）
3. **提交 PR #1 并合并** — feat(uiux): v2.1
4. **项目重命名全流程**:
   - 本地目录 razors-edge-map → literary-maps
   - GitHub 仓库重命名 (gh repo rename)
   - remote URL 更新为 SSH
   - 目录重构：razors-edge/ + karamazov/ + 入口 index.html
5. **卡拉马佐夫兄弟骨架页面** — 6 角色 / 8 航点 / 3 路线示例，暗色东正教主题
6. **全量文档同步**:
   - STATUS.md / README.md / DEVELOPMENT_PLAN.md 重写
   - vibe coding log 追加
   - LLM Wiki: project-literary-maps.md 新建，旧文件删除，index.md 更新
   - tqob/05 Coding/project-literary-maps/ 文件夹重命名 + 内容同步
   - coder MEMORY.md + USER.md 更新

### 踩坑记录

- **P2-13 连锁崩溃**: 删空函数时只看了函数定义，没 grep 调用方。教训：删任何函数前先搜 `function xxx` 和 `xxx(` 两处。
- **GitHub SSH 偶发超时**: `Connection closed by UNKNOWN port 65535`，重试一次即成功。

### 当前状态

- main 和 origin/main 同步 (0997ca3)
- 入口选择页可打开，刀锋地图完整可用
- 卡拉马佐夫骨架就绪，待填充内容

### GitHub
- https://github.com/mariusiaowego-commits/literary-maps
