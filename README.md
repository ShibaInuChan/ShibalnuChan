<h1 align="center">ShibaInuChan</h1>

<p align="center">
  <strong>AI Architect</strong><br/>
  Investor &times; Web3 Researcher &times; WEB Marketer &times; Editor
</p>

<p align="center">
  <a href="https://motoyasu-kato.com/">🌐 motoyasu-kato.com</a>
</p>

---

## About Me

I don't start with technology — I start with problems I deeply understand.

Using **COA (Cognitive OS Architecture)**, a reasoning framework I've spent over a year refining through real-world practice, I structure problems before writing a single line of code. Claude Code then turns that structure into working products.

This isn't about domain expertise in any one field. It's a method: find a problem you have the judgment to evaluate, structure it with COA, build it with Claude Code. The products below span finance, real estate, and physical fabrication (3D printing and CNC) — different domains, same method.

> *"AI Architect — not someone who writes code for a living, but someone who uses AI to engineer solutions that matter."*

---

## Core Products

### ♟️ AXIS-COA
> Subscription SaaS for strategic analysis — powered by Cognitive OS Architecture, a proprietary reasoning framework built on top of Claude

🔗 [coa-app.onrender.com](https://coa-app.onrender.com)

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Claude API](https://img.shields.io/badge/Claude_API-CC785C?style=flat-square&logo=anthropic&logoColor=white)
![Streamlit](https://img.shields.io/badge/Streamlit-FF4B4B?style=flat-square&logo=streamlit&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=flat-square&logo=stripe&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=flat-square&logo=render&logoColor=black)
![Tavily](https://img.shields.io/badge/Tavily-2563EB?style=flat-square&logoColor=white)

Rather than prompting an LLM directly, AXIS-COA runs each session through Cognitive OS Architecture — a structured cognitive pipeline executing across four discrete phases: web research, situation structuring, assumption surfacing, strategy generation and strategy crystallization. Input your context, challenges, and goals; AXIS-COA handles the rest. Supabase handles auth and persistence; Stripe powers subscription billing with plan-based limits, backed by a FastAPI webhook layer for real-time plan sync. Hosted on Render.

---

### 🗺️ TERRAIN-COA
> Real estate investment analysis platform — combines GSI map tiles, COA reasoning, and real transaction data from Japan's MLIT to structure "what conditions would make this investment work"

🔗 [terrain-iq.vercel.app](https://terrain-iq.vercel.app/)

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)
![MapLibre GL JS](https://img.shields.io/badge/MapLibre_GL_JS-396CB2?style=flat-square&logo=maplibre&logoColor=white)
![Claude API](https://img.shields.io/badge/Claude_API-CC785C?style=flat-square&logo=anthropic&logoColor=white)
![Reinfolib](https://img.shields.io/badge/Reinfolib-4A5568?style=flat-square&logoColor=white)
![GSI APIs](https://img.shields.io/badge/GSI_APIs-2E7D32?style=flat-square&logoColor=white)
![Yahoo! Local Search](https://img.shields.io/badge/Yahoo!_Local_Search-6001D2?style=flat-square&logo=yahoo&logoColor=white)
![e-Stat](https://img.shields.io/badge/e--Stat-00549F?style=flat-square&logoColor=white)

Rather than a binary buy/don't-buy verdict, TERRAIN-COA presents the **conditions under which an investment becomes viable** — price negotiation targets, financing structures, exit strategy triggers. Real transaction data (Reinfolib), elevation/disaster risk (GSI), facility and station data (Yahoo! Local Search), and population trends (e-Stat) are combined with a Claude-powered COA analysis (Market → Asset → Strategy → Risk → Boundary).

---

### 🐾 katachi — 「かたち」
> Turn a single photo into a 3D model — for pets and children, with consumer-grade simplicity

🔗 [katachi-delta.vercel.app](https://katachi-delta.vercel.app/)

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tripo API](https://img.shields.io/badge/Tripo_API-FF6B35?style=flat-square&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=flat-square&logo=stripe&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

Today, 3D printers and 3D modeling tools are powerful but built for professionals — most people who'd love a 3D-printed memento of their pet or child have no way to create the data. katachi closes that gap: upload one photo, get a free gray-mesh preview, and purchase a textured GLB/STL ready for printing. Pet/child photos were chosen as the entry point because the emotional motivation is strong and immediate — but the underlying goal is bridging the gap between "people who want something made" and "people who have a 3D printer."

---

### 🪵 Relief-Forge
> Convert a photo into a CNC-ready relief — carved, not printed

🔗 [github.com/ShibaInuChan/Relief-Forge](https://github.com/ShibaInuChan/Relief-Forge)

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![NumPy](https://img.shields.io/badge/NumPy-013243?style=flat-square&logo=numpy&logoColor=white)
![Pillow](https://img.shields.io/badge/Pillow-4B8BBE?style=flat-square&logoColor=white)
![IGES](https://img.shields.io/badge/IGES_B--spline-4A5568?style=flat-square&logoColor=white)
![G-code](https://img.shields.io/badge/G--code-5A6378?style=flat-square&logoColor=white)
![CNC](https://img.shields.io/badge/CNC-6F5BD0?style=flat-square&logoColor=white)

Where katachi builds form up with a 3D printer, Relief-Forge carves it away. Upload a photo and it becomes a grayscale depth map, then a relief transferred onto a flat plate or an existing STL surface — exported as B-spline IGES, CNC-ready G-code, and a preview PNG, ready to hand straight to a CNC router or mill. Same question as katachi — turning a photo into a physical object — solved through a different output.

---

## Personal Tools

Smaller tools built to solve my own day-to-day problems — same method, smaller scope.

### 📊 Investment Macro Dashboard
> US & Japan macroeconomic indicators with monthly AI-powered structural analysis

🔗 [investment-dashboard-sooty.vercel.app](https://investment-dashboard-sooty.vercel.app/)

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![Claude API](https://img.shields.io/badge/Claude_API-CC785C?style=flat-square&logo=anthropic&logoColor=white)
![Tavily](https://img.shields.io/badge/Tavily-2563EB?style=flat-square&logoColor=white)

US & Japan macroeconomic indicators (CPI, yield curves, rate spreads) auto-fetched from FRED twice daily via GitHub Actions, with monthly Claude-generated structural analysis.

---

### 📱 eMAXIS Price — Asset Notification LINE Bot
> Daily automated price alerts for investment trusts, equities, crypto, and gold

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![LINE API](https://img.shields.io/badge/LINE_API-00C300?style=flat-square&logo=line&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white)

Scrapes prices via BeautifulSoup4 and pushes a morning summary to LINE every weekday via GitHub Actions.

---

### 💰 Asset Management
> A MoneyForward-like personal asset tracker

🔗 [asset-management-nu-seven.vercel.app](https://asset-management-nu-seven.vercel.app/)

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-22B5BF?style=flat-square&logoColor=white)

Traditional and alternative assets (crypto, gold) tracked separately, with monthly snapshots and chart visualization.

---

### 📑 slides-workspace
> A Claude Code workspace for turning structured thinking into slide presentations

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![pptxgenjs](https://img.shields.io/badge/pptxgenjs-F2502C?style=flat-square&logoColor=white)
![Claude Code](https://img.shields.io/badge/Claude_Code-CC785C?style=flat-square&logo=anthropic&logoColor=white)

Turns COA outputs (or any structured thinking) into slide presentations — via HTML-to-PPTX conversion or template-based editing, with a content design workflow.

---

## Experiments

### 🪙 Regional Community Points System (Prototype)
> Blockchain-based loyalty points for local communities — zero legal risk by design

![Solidity](https://img.shields.io/badge/Solidity-363636?style=flat-square&logo=solidity&logoColor=white)
![Polygon](https://img.shields.io/badge/Polygon-8247E5?style=flat-square&logo=polygon&logoColor=white)
![Hardhat](https://img.shields.io/badge/Hardhat-FFF100?style=flat-square&logo=hardhat&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![LINE API](https://img.shields.io/badge/LINE_API-00C300?style=flat-square&logo=line&logoColor=white)

Blockchain-based loyalty points for local communities, on Polygon — designed from the ground up to avoid securities law and token regulation risk, with a LINE bot interface for non-crypto-native participants.

---

<p align="center">
  <em>Every product here started not with "what can I build?" but "what problem do I have — and do I actually know what a good answer looks like?"</em>
</p>
