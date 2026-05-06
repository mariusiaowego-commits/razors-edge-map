# 📚 Literary Maps · 文学地图集 - 当前开发状态

**最后更新**: 2026-05-06
**当前阶段**: 项目扩展为文学地图集，新增卡拉马佐夫兄弟骨架

---

## 📂 项目位置

- **main 分支**: `/Users/mt16/dev/literary-maps/` (单文件 inline 数据架构)
- **remote**: `git@github.com:mariusiaowego-commits/literary-maps.git` (SSH)
- **GitHub**: https://github.com/mariusiaowego-commits/literary-maps

---

## 🗺️ 地图列表

### The Razor's Edge · 刀锋 ✅
- **路径**: `razors-edge/index.html`
- **版本**: v2.1 (2026-05-06)
- **状态**: 完整可用
- **内容**: 21 航点 / 7 角色 / 5+ 路线 / 15+ 事件
- **功能**: 时间轴滑块 / tabbed sidebar / 键盘快捷键 / Status Objects 模态框

### The Brothers Karamazov · 卡拉马佐夫兄弟 🚧
- **路径**: `karamazov/index.html`
- **版本**: skeleton (2026-05-06)
- **状态**: 骨架页面，待填充内容
- **计划**: 角色路线 / 航点 / 事件 / 哲学主题可视化

---

## 📦 待提交改动

无。main 和 origin/main 完全同步。

---

## 🔄 最近提交（main）

| Commit | 内容 |
|--------|------|
| `5fa67a8` | docs: update STATUS.md to v2.1, clean up old handoff files |
| `70e2ce4` | docs: v2.1 dev log |
| `7fad480` | Merge PR #1: feat(uiux): v2.1 |
| `af9b886` | feat(uiux): v2.1 — Elliott route, sidebar consolidation, UI/UX audit |
| `b9fcd2f` | docs: add 260505-handoff.md |

---

## 🚀 下一步开发计划

### 卡拉马佐夫兄弟 (P0)
- 角色数据：Dmitry / Ivan / Alyosha / Fyodor / Smerdyakov / Zosima
- 航点：Skotoprigonevsk / Moscow / monastery / Mokroe / Petersburg
- 路线：各角色轨迹
- 事件：弑父案 / 审判 / 佐西马长老 / 伊凡的对话

### 刀锋 (P1)
- Benares / Trivandrum popup 标签内容深化
- Ramakrishna 路线可视化
- Status Objects 物品图片补充

---

## ⚠️ 注意事项

- 每个地图独立，互不干扰
- Leaflet 版本固定 1.9.4，升级前检查 breaking changes
- 所有数据当前硬编码在各自 index.html 内（inline data 架构）

---

## 🔧 技术栈

- Leaflet.js 1.9.4 (CDN: unpkg)
- 底图: Esri NatGeo
- 纯前端单文件，无框架、无构建工具
- 测试: 浏览器直接打开 index.html

---

## 📝 开发规范

- 单文件项目，无需构建步骤，所有 JS/CSS 内联在 index.html
- 每个小说一个目录，独立 index.html
- 提交信息格式: `feat:` / `fix:` / `docs:` / `chore:`
- PR 流程: 改代码 → 本地浏览器测试 → 报结果 → 用户确认 → 提 PR
- **开发收尾**: 每次 session 结束前更新 `STATUS.md`
