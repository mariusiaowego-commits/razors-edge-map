# 🗺️ razors-edge-map 刀锋地图 - 当前开发状态

**最后更新**: 2026-05-06
**当前阶段**: v2.1 UI/UX 审计完成，Elliott 路线扩展完成

---

## 📂 项目位置

- **main 分支**: `/Users/mt16/dev/razors-edge-map/` (单文件 inline 数据架构)
- **remote**: `git@github.com:mariusiaowego-commits/razors-edge-map.git` (SSH)
- **GitHub**: https://github.com/mariusiaowego-commits/razors-edge-map
- **PR #1**: https://github.com/mariusiaowego-commits/razors-edge-map/pull/1 (merged)

---

## ✅ 已完成功能

### 核心架构
- [x] Leaflet.js 1.9.4 单文件交互地图（所有 JS/CSS 内联，file:// 直接打开）
- [x] v2.1 多角色文学架构：5+ 条路线 / 21 个航点 / 15+ 个事件 / 毛姆叙述者视角
- [x] 暗色航海主题（深海军蓝 + 金色点缀）
- [x] 1 个底图：NatGeo（Ocean/OSM 已清理）
- [x] 统一 tabbed sidebar（Routes / Characters 标签页）
- [x] 键盘快捷键：Q(Quote) L(Routes) C(Characters) ESC(关闭)

### 航点（21个）
| ID | 城市 | 年份 | 角色 | 关键事件 |
|----|------|------|------|----------|
| geo-paris | Paris 巴黎 | 1919-1929 | Larry, Isabel, Maugham, Elliott | 起点 |
| geo-chicago | Chicago 芝加哥 | 1919 | Larry, Isabel, Gray | 解除婚约 |
| geo-suez | Suez 苏伊士 | 1919-1924 | Larry, Sophie | 精神觉醒 |
| geo-cairo | Cairo 开罗 | 1920 | Larry | 灵性入口 |
| geo-colombo | Colombo 科伦坡 | 1921 | Larry | 中转站 |
| geo-madras | Madras 马德拉斯 | 1921 | Larry | 修行中心 |
| geo-hyderabad | Hyderabad 海得拉巴 | 1921 | Larry | 苏菲派相遇 |
| geo-goa | Goa 果阿 | 1921 | Larry | 整合 |
| geo-kashmir | Kashmir 克什米尔 | 1922 | Larry | 湿婆开悟 ★ |
| geo-kolkata | Kolkata 加尔各答 | 1922 | Larry | 慈悲对峙 |
| geo-benares | Benares 贝纳勒斯 | 1922 | Larry, Maugham | 印度神圣中心 ★ |
| geo-trivandrum | Trivandrum 特里凡得琅 | 1922-1923 | Larry | 罗摩克里希那中心 ★ |
| geo-mumbai | Mumbai 孟买 | 1923 | Larry | 离开东方 |
| geo-london | London 伦敦 | 1923-1924 | Larry, Isabel, Gray, Sophie, Maugham, Elliott | 回归重聚 ★ |
| geo-gibraltar | Gibraltar 直布罗陀 | 1924 | Larry, Sophie, Elliott | 巡航喘息 |
| geo-sevilla | Seville 塞维利亚 | 1924 | Larry, Sophie, Maugham | 安达卢西亚十字路口 |
| geo-malaga | Malaga 马拉加 | 1924 | Sophie, Elliott | 最后弥撒 |
| geo-illinois | Illinois 伊利诺伊 | 1919 | Sophie, Larry | 悲剧起源 |
| geo-rome | Rome 罗马 | 1920-1925 | Elliott | 意大利社交圈 ★ |
| geo-antibes | Cap d'Antibes | 1921-1927 | Elliott | 里维埃拉夏季社交 |
| geo-nice | Nice 尼斯 | 1929 | Elliott, Maugham | Elliott 去世 ★ |

### 角色（7个）
Larry(L) / Isabel(I) / Sophie(S) / Gray(G) / Elliott(E) / **Suzanne(R)** / **Sri Ramakrishna(R)**

Suzanne 和 Ramakrishna 默认隐藏，通过图例切换显示。

### 交互功能
- [x] 时间轴滑块（1919-1929 可拖动，拖动时显示 timeline-brief 叙事摘要）
- [x] 4 标签 popup（地理 / 情节 / 毛姆视角 / 面子<Status Objects>）
- [x] 角色面板（左侧面版，含 bio / arc / 动机 / 引语）
- [x] 图例可交互（点击切换路线显示）
- [x] Status Objects 全目录模态框（图例按钮触发）
- [x] EPIGRAPH 引语面板（Landor 诗作，替代旧 poetry panel）
- [x] 人物路线飞至（flyToYear / flyToWaypoint / toggleRoute）

### 数据内容
- [x] STATUS_OBJECTS 数据库（物品卡片：type / owner / location / novel_scene / story / historical_context）
- [x] 毛姆叙述文本（maugham + maugham_zh 双语）
- [x] 引语数组 QUOTES（speaker / text / zh / chapter）
- [x] Larry 印度哲学引语 ×10（Shiva / Vedanta / 吠檀多 / 陀思妥耶夫斯基 / moksha）

---

## 📦 待提交改动

无。main 和 origin/main 完全同步。

---

## 🔄 最近提交（main）

| Commit | 内容 |
|--------|------|
| `70e2ce4` | docs: v2.1 dev log |
| `7fad480` | Merge PR #1: feat(uiux): v2.1 — Elliott route expansion, sidebar consolidation, full UI/UX audit fixes |
| `af9b886` | feat(uiux): v2.1 — Elliott route expansion, sidebar consolidation, full UI/UX audit fixes |
| `b9fcd2f` | docs: add 260505-handoff.md |
| `ef5241c` | debug: add alerts in toggleRoute to trace route removal failure |

---

## 🚀 下一步开发计划

### 优先级 P1
- Benares / Trivandrum popup 标签内容填充（目前有框架但可深化）
- Ramakrishna 路线可视化（当前 visible:false，可选实现）
- Status Objects 物品图片补充（当前 thumbnail placeholder）

### 优先级 P2
- 各航点历史照片集成
- 人物关系图 SVG 面板

### 优先级 P3
- 多语言支持 EN/CN/JP 三语切换
- PDF 导出 / 打印模式

---

## 🧪 测试命令

```bash
cd /Users/mt16/dev/razors-edge-map/
open index.html              # 浏览器直接打开（file:// 兼容）
python3 -m http.server 8765 # 可选：本地 HTTP 服务器
```

---

## 📝 开发规范

- 单文件项目，无需构建步骤，所有 JS/CSS 内联在 index.html
- 提交信息格式: `feat:` / `fix:` / `docs:` / `chore:`
- PR 流程: 改代码 → 本地浏览器测试 → 报结果 → 用户确认 → 提 PR
- **开发收尾**: 每次 session 结束前更新 `STATUS.md` 和 `DEVELOPMENT_PLAN.md`

---

## 🔧 技术栈

- Leaflet.js 1.9.4 (CDN: unpkg)
- 底图: Esri NatGeo / Esri Ocean / OpenStreetMap
- 纯前端单文件，无框架、无构建工具
- 测试: 浏览器直接打开 `index.html`

---

## ⚠️ 注意事项

- Leaflet 版本固定 1.9.4，升级前检查 breaking changes
- 所有数据当前硬编码在 `index.html` 内（inline data 架构）
- flyToYear() 范围 1919-2029，新航点需确保 year_start 在范围内
