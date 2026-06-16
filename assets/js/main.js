/* ============================================================
   ShibaInuChan — AI Architect | site interactions
   - i18n (JA inline / EN dictionary)
   - theme toggle (dark/light)
   - hero node-network canvas
   - terminal typing animation
   - scroll: progress, reveals, active nav, counters, to-top
   - product card glow tracking
   - email obfuscation + copy
   - a small shiba easter egg
   ============================================================ */
(function () {
  "use strict";

  var doc = document;
  var root = doc.documentElement;

  /* ---------------- i18n ---------------- */

  var EN = {
    // meta / nav
    "nav.about": "About",
    "nav.method": "Method",
    "nav.products": "Products",
    "nav.tools": "Tools",
    "nav.profile": "Profile",
    "nav.contact": "Contact",

    // hero
    "hero.title": "Problems into structure.<br><span class=\"accent\">Structure into products.</span>",
    "hero.lead": "I structure problems with <strong>COA (Cognitive OS Architecture)</strong> — a reasoning framework refined through over a year of real-world practice — then turn that structure into working products with <strong>Claude Code</strong>. Finance, real estate, 3D printing, Web3: different domains, one method.",
    "hero.cta1": "View products",
    "hero.cta2": "Get in touch",

    // about
    "about.label": "01 — About",
    "about.title": "I don't start with technology.<br>I start with <em>problems</em>.",
    "about.p1": "Every product on this page began with the same question: not “what can I build?” but “what problem do I have — and do I actually know what a good answer looks like?”",
    "about.p2": "Before writing a single line of code, I structure the problem with <span class=\"hl\">COA (Cognitive OS Architecture)</span>, a reasoning framework I've spent over a year refining through real-world practice. Claude Code then turns that structure into working products.",
    "about.p3": "This isn't about domain expertise in any one field. It's a method: <strong>find a problem you have the judgment to evaluate, structure it with COA, build it with Claude Code.</strong> A repeatable method.",
    "about.quoteJa": "An AI Architect is not someone who writes code for a living, but someone who uses AI to engineer solutions that matter.",
    "about.stat1": "Products shipped",
    "about.stat2": "Domains crossed — finance, real estate, 3D printing, Web3",
    "about.stat3": "Years refining COA in real-world practice",

    // dividers
    "div1.sub": "Once the structure is set, the product doesn't wander.",
    "div1.cap": "Method over domain expertise.",
    "div2.sub": "And then — off to find the next problem.",
    "div2.cap": "Same method, next domain.",

    // method
    "method.label": "02 — Method",
    "method.title": "COA — a cognitive OS<br>that runs <em>before</em> the code.",
    "method.intro": "COA (Cognitive OS Architecture) never asks an LLM for an instant answer. Each session runs through a structured cognitive pipeline, phase by phase — turning vague problems into verifiable structure and strategy.",
    "method.s1.title": "Find the problem",
    "method.s1.desc": "Choose a problem you have the judgment to evaluate — not just something buildable. A product can only be steered where your own judgment reaches.",
    "method.s2.title": "Structure it with COA",
    "method.s2.desc": "Web research, situation structuring, assumption surfacing, strategy generation — the problem is decomposed through a phased cognitive pipeline before any code exists.",
    "method.s3.title": "Build with Claude Code",
    "method.s3.desc": "Once the structure is set, implementation belongs to AI. Claude Code turns structure into working products, while I stay focused on design and judgment.",
    "method.pipeTitle": "<b>COA</b> — Cognitive pipeline",
    "method.pipe.in": "Problem",
    "method.pipe.p1ja": "Web research",
    "method.pipe.p2ja": "Situation structuring",
    "method.pipe.p3ja": "Assumption surfacing",
    "method.pipe.p4ja": "Strategy generation",
    "method.pipe.out": "Strategy / Product",

    // products
    "products.label": "03 — Core Products",
    "products.title": "Products born from COA",
    "products.intro": "Same method, different domains. Each one started from a problem I could judge with my own eyes.",

    "axis.tag": "Strategy-analysis SaaS",
    "axis.tagline": "A cognitive OS, as a subscription.",
    "axis.desc": "Rather than prompting an LLM directly, AXIS-COA runs every session through the COA cognitive pipeline — <b>web research, situation structuring, assumption surfacing, and strategy generation</b>. Input your context, challenges, and goals; AXIS-COA handles the rest. Supabase handles auth and persistence, Stripe powers plan-based subscription billing, and a FastAPI webhook layer keeps plans in sync in real time. Hosted on Render.",
    "axis.visit": "Open the app",

    "terrain.tag": "Real-estate investment analysis",
    "terrain.tagline": "Not “buy or pass” — “under what conditions does this work?”",
    "terrain.desc": "A platform that combines real transaction data from Japan's MLIT (Reinfolib), elevation and disaster risk (GSI), facility and station data (Yahoo! Local Search), and population trends (e-Stat) with Claude-powered COA analysis. Instead of a binary verdict, it surfaces <b>the conditions under which an investment becomes viable</b> — price negotiation targets, financing structures, exit-strategy triggers.",
    "terrain.visit": "Open demo",

    "katachi.tag": "Photo to 3D model",
    "katachi.tagline": "One photo becomes a shape you can hold.",
    "katachi.visit": "Open the app",
    "katachi.desc": "3D printers and modeling tools are powerful but built for professionals — most people who'd love a 3D-printed memento of their pet or child have no way to create the data. katachi closes that gap: <b>upload one photo, get a free gray-mesh preview, then purchase a print-ready textured GLB/STL</b>. The deeper goal is bridging “people who want something made” and “people who own a 3D printer.”",

    "relief.tag": "Photo to CNC relief",
    "relief.tagline": "Turn a photo into relief you can carve.",
    "relief.desc": "A tool that converts a photo into a grayscale depth map and transfers it as a relief onto a flat plate or an existing STL surface. It outputs <b>B-spline IGES, CNC-ready G-code, and a preview PNG</b> — ready to hand straight to a CNC router or mill. Where katachi builds form up with 3D printing, Relief-Forge carves it away: the same question — a photo into a physical object — solved through a different output.",
    "relief.visit": "View on GitHub",

    // tools
    "tools.label": "04 — Personal Tools",
    "tools.title": "Solving my own problems first",
    "tools.intro": "Smaller tools built for my own day-to-day problems — same method, smaller scope.",
    "tools.t1.sub": "US & Japan macro indicators",
    "tools.t1.desc": "CPI, yield curves and rate spreads auto-fetched from FRED twice daily via GitHub Actions, with monthly Claude-generated structural analysis.",
    "tools.t2.sub": "Asset-price LINE notifications",
    "tools.t2.desc": "Scrapes prices for investment trusts, equities, crypto and gold with BeautifulSoup4, and pushes a morning summary to LINE every weekday.",
    "tools.t3.sub": "Personal asset tracker",
    "tools.t3.desc": "A MoneyForward-like tracker. Traditional and alternative assets (crypto, gold) tracked separately, with monthly snapshots and chart visualization.",
    "tools.t4.sub": "Thinking → slides workspace",
    "tools.t4.desc": "A Claude Code workspace that turns COA outputs (or any structured thinking) into slide decks — HTML-to-PPTX conversion, template-based editing, and a content-design workflow.",

    // experiments
    "exp.label": "05 — Experiments",
    "exp.title": "Experimenting with the next structure",
    "exp.status": "PROTOTYPE",
    "exp.name": "Regional Community Points System",
    "exp.desc": "Blockchain-based loyalty points for local communities, built on Polygon — designed from the ground up to avoid securities-law and token-regulation risk, with a LINE bot interface for non-crypto-native participants.",

    // profile
    "profile.label": "06 — Profile",
    "profile.title": "Four lenses on every problem",
    "profile.intro": "The title is AI Architect. Beneath it are four lenses for judging whether an answer is actually good.",
    "profile.l1.desc": "Skin in the game. I face the markets with my own money — which is exactly why I can judge whether a finance or real-estate product's answer is good.",
    "profile.l2.desc": "Weighing technical possibility against regulatory risk, and keeping only the structures that survive both.",
    "profile.l3.desc": "Putting problems into words, and designing the path for value to actually reach people.",
    "profile.l4.desc": "Structuring information and weaving it into forms that make sense — the lens at the very core of COA.",

    // contact
    "contact.label": "07 — Contact",
    "contact.title": "Tell me about your problem.",
    "contact.text": "Product development, COA-powered strategy analysis and sparring, collaborations — feel free to reach out. Your problem doesn't need to be in words yet; structuring it is my job.",
    "contact.email": "Send an email",
    "contact.note": "// replies usually within a few days",

    // footer
    "footer.quote": "“Every product here started not with ‘what can I build?’ but ‘what problem do I have — and do I actually know what a good answer looks like?’”",
    "footer.role": "AI ARCHITECT",
    "footer.made": "Structured with <b>COA</b> × built with <b>Claude Code</b>",

    // misc
    "toast.woof": "Woof! Thanks for visiting 🐕",
    "aria.toTop": "Back to top",
    "aria.theme": "Toggle color theme",
    "aria.lang": "Switch language",
    "aria.menu": "Open menu"
  };

  var currentLang = "ja";

  function applyLang(lang) {
    currentLang = lang;
    root.lang = lang;
    root.setAttribute("data-lang", lang);

    var nodes = doc.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute("data-i18n");
      if (el.dataset.ja === undefined) el.dataset.ja = el.innerHTML; // stash JA original
      if (lang === "en" && EN[key] !== undefined) {
        el.innerHTML = EN[key];
      } else {
        el.innerHTML = el.dataset.ja;
      }
    }

    var langBtn = doc.getElementById("lang-toggle");
    if (langBtn) {
      langBtn.textContent = lang === "ja" ? "EN" : "JA";
      langBtn.setAttribute("aria-label", lang === "ja" ? "Switch to English" : "日本語に切り替える");
    }
    try { localStorage.setItem("sic-lang", lang); } catch (e) { /* private mode */ }
  }

  function t(key) {
    if (currentLang === "en" && EN[key]) return EN[key];
    var ja = {
      "toast.woof": "ワン!ようこそ 🐕"
    };
    return ja[key] || EN[key] || key;
  }

  /* ---------------- theme ---------------- */

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    var meta = doc.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "light" ? "#faf6ef" : "#0a0d12");
    try { localStorage.setItem("sic-theme", theme); } catch (e) { /* ignore */ }
    doc.dispatchEvent(new CustomEvent("themechange"));
  }

  /* ---------------- toast ---------------- */

  var toastTimer = null;
  function toast(msg) {
    var el = doc.getElementById("toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove("show"); }, 2400);
  }

  /* ---------------- hero canvas: node network ---------------- */

  function initCanvas() {
    var canvas = doc.getElementById("hero-canvas");
    if (!canvas || !canvas.getContext) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    var ctx = canvas.getContext("2d");
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var W = 0, H = 0;
    var nodes = [];
    var mouse = { x: -9999, y: -9999 };
    var running = true;
    var accent = "#e8954a";
    var lineRGB = "232, 228, 220";

    function readColors() {
      var cs = getComputedStyle(root);
      accent = (cs.getPropertyValue("--accent") || "#e8954a").trim();
      lineRGB = root.getAttribute("data-theme") === "light" ? "29, 33, 41" : "232, 228, 220";
    }

    function resize() {
      var rect = canvas.parentElement.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    function seed() {
      var count = Math.min(90, Math.max(30, Math.floor((W * H) / 16000)));
      nodes = [];
      for (var i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 1.6 + 0.8,
          warm: Math.random() < 0.18 // a few shiba-orange nodes
        });
      }
    }

    function step() {
      if (!running) return;
      ctx.clearRect(0, 0, W, H);

      var linkDist = 130;
      var i, j, n, m, dx, dy, d2;

      for (i = 0; i < nodes.length; i++) {
        n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -20) n.x = W + 20; else if (n.x > W + 20) n.x = -20;
        if (n.y < -20) n.y = H + 20; else if (n.y > H + 20) n.y = -20;
      }

      // links
      for (i = 0; i < nodes.length; i++) {
        n = nodes[i];
        for (j = i + 1; j < nodes.length; j++) {
          m = nodes[j];
          dx = n.x - m.x;
          dy = n.y - m.y;
          d2 = dx * dx + dy * dy;
          if (d2 < linkDist * linkDist) {
            var a = (1 - Math.sqrt(d2) / linkDist) * 0.16;
            ctx.strokeStyle = "rgba(" + lineRGB + ", " + a.toFixed(3) + ")";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
          }
        }
        // link to mouse
        dx = n.x - mouse.x;
        dy = n.y - mouse.y;
        d2 = dx * dx + dy * dy;
        if (d2 < 160 * 160) {
          var ma = (1 - Math.sqrt(d2) / 160) * 0.5;
          ctx.strokeStyle = accent;
          ctx.globalAlpha = ma;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }

      // dots
      for (i = 0; i < nodes.length; i++) {
        n = nodes[i];
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        if (n.warm) {
          ctx.fillStyle = accent;
          ctx.globalAlpha = 0.85;
        } else {
          ctx.fillStyle = "rgba(" + lineRGB + ", 0.4)";
          ctx.globalAlpha = 1;
        }
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      requestAnimationFrame(step);
    }

    var hero = doc.getElementById("hero");
    hero.addEventListener("pointermove", function (e) {
      var rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });
    hero.addEventListener("pointerleave", function () {
      mouse.x = -9999;
      mouse.y = -9999;
    });

    doc.addEventListener("visibilitychange", function () {
      var wasRunning = running;
      running = !doc.hidden;
      if (running && !wasRunning) requestAnimationFrame(step);
    });
    doc.addEventListener("themechange", readColors);

    var resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    });

    readColors();
    resize();
    requestAnimationFrame(step);
  }

  /* ---------------- terminal typing ---------------- */

  function initTerminal() {
    var body = doc.getElementById("term-body");
    if (!body) return;

    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    var SCRIPT = [
      { html: "<span class=\"p\">$</span> coa run --input \"problem\"", type: true },
      { html: "<span class=\"dim\">loading cognitive os architecture...</span>", delay: 350 },
      { html: "[1/4] web research <span class=\"dim\">..........</span> <span class=\"ok\">done</span>", delay: 600 },
      { html: "[2/4] situation structuring <span class=\"dim\">...</span> <span class=\"ok\">done</span>", delay: 600 },
      { html: "[3/4] assumption surfacing <span class=\"dim\">....</span> <span class=\"ok\">done</span>", delay: 600 },
      { html: "[4/4] strategy generation <span class=\"dim\">.....</span> <span class=\"ok\">done</span>", delay: 700 },
      { html: "&nbsp;", delay: 250 },
      { html: "<span class=\"ok\">✓</span> structure ready — handing off to <span class=\"p\">claude code</span>", delay: 400 },
      { html: "<span class=\"p\">$</span> claude \"build it\"", type: true, delay: 700 }
    ];

    if (reduced) {
      var fragAll = "";
      SCRIPT.forEach(function (l) { fragAll += "<div class=\"term-line\">" + l.html + "</div>"; });
      body.innerHTML = fragAll;
      return;
    }

    var li = 0;

    function typeLine(line, done) {
      var el = doc.createElement("div");
      el.className = "term-line";
      body.appendChild(el);

      if (!line.type) {
        el.innerHTML = line.html;
        done();
        return;
      }
      // typed effect: strip tags progressively is complex — type plain, swap to rich
      var tmp = doc.createElement("div");
      tmp.innerHTML = line.html;
      var plain = tmp.textContent || "";
      var k = 0;
      var caret = "<span class=\"caret\"></span>";
      (function tick() {
        k++;
        el.innerHTML = escapeHtml(plain.slice(0, k)) + caret;
        if (k < plain.length) {
          setTimeout(tick, 34 + Math.random() * 40);
        } else {
          el.innerHTML = line.html;
          done();
        }
      })();
    }

    function escapeHtml(s) {
      return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    function next() {
      if (li >= SCRIPT.length) {
        var c = doc.createElement("div");
        c.className = "term-line";
        c.innerHTML = "<span class=\"caret\"></span>";
        body.appendChild(c);
        return;
      }
      var line = SCRIPT[li++];
      setTimeout(function () {
        typeLine(line, next);
      }, line.delay || 120);
    }

    // start when hero visible
    var io = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        io.disconnect();
        next();
      }
    }, { threshold: 0.3 });
    io.observe(body);
  }

  /* ---------------- scroll: progress / header / to-top ---------------- */

  function initScrollUI() {
    var bar = doc.getElementById("progress-bar");
    var header = doc.getElementById("site-header");
    var toTop = doc.getElementById("to-top");
    var ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var y = window.scrollY || root.scrollTop;
        var max = root.scrollHeight - window.innerHeight;
        if (bar) bar.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
        if (header) header.classList.toggle("scrolled", y > 8);
        if (toTop) toTop.classList.toggle("show", y > 600);
        ticking = false;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (toTop) {
      toTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  /* ---------------- reveals + counters ---------------- */

  function initReveals() {
    var els = doc.querySelectorAll(".reveal, .reveal-l, .reveal-r, .reveal-fade");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("in-view"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  function initCounters() {
    var nums = doc.querySelectorAll("[data-count]");
    if (!nums.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        io.unobserve(entry.target);
        var el = entry.target;
        var target = parseInt(el.getAttribute("data-count"), 10) || 0;
        var start = null;
        var dur = 1400;
        function frame(ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.firstChild.nodeValue = String(Math.round(eased * target));
          if (p < 1) requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
      });
    }, { threshold: 0.6 });
    nums.forEach(function (el) { io.observe(el); });
  }

  /* ---------------- nav: active section + mobile menu ---------------- */

  function initNav() {
    var links = Array.prototype.slice.call(doc.querySelectorAll(".nav-link[href^='#']"));
    var sections = links
      .map(function (a) { return doc.getElementById(a.getAttribute("href").slice(1)); })
      .filter(Boolean);

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        links.forEach(function (a) {
          a.classList.toggle("active", a.getAttribute("href") === "#" + id);
        });
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach(function (s) { io.observe(s); });

    // mobile menu
    var toggle = doc.getElementById("nav-toggle");
    var header = doc.getElementById("site-header");
    if (toggle && header) {
      toggle.addEventListener("click", function () {
        var open = header.classList.toggle("nav-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
      links.forEach(function (a) {
        a.addEventListener("click", function () {
          header.classList.remove("nav-open");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
      doc.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && header.classList.contains("nav-open")) {
          header.classList.remove("nav-open");
          toggle.setAttribute("aria-expanded", "false");
          toggle.focus();
        }
      });
    }
  }

  /* ---------------- scroll-scrubbed effects ----------------
     Pinning itself is done with CSS position:sticky (product stack, stats).
     On top of that: divider parallax (object-fit:cover art), the floating
     centered label tracking open, and covered cards scaling away.
     Uses GSAP ScrollTrigger when the CDN loaded; otherwise an equivalent
     vanilla scroll engine. */

  function initScrollFx() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    var dividers = Array.prototype.slice.call(doc.querySelectorAll(".divider"));
    var cards = Array.prototype.slice.call(doc.querySelectorAll(".product-card"));
    var desktop = window.matchMedia("(min-width: 921px)");

    // sticky top offsets of the product stack (must match the CSS)
    function cardPinTop(i) { return 68 + 18 + i * 16; }

    if (window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);
      var gsap = window.gsap;

      dividers.forEach(function (sec) {
        var img = sec.querySelector(".divider-bg");
        var label = sec.querySelector(".divider-label");
        if (img) {
          gsap.fromTo(img, { yPercent: -8 }, {
            yPercent: 8,
            ease: "none",
            scrollTrigger: { trigger: sec, start: "top bottom", end: "bottom top", scrub: true }
          });
        }
        if (label) {
          gsap.fromTo(label, { letterSpacing: "0.16em", opacity: 0.5 }, {
            letterSpacing: "0.44em",
            opacity: 1,
            ease: "none",
            scrollTrigger: { trigger: sec, start: "top 85%", end: "center 45%", scrub: true }
          });
        }
      });

      if (desktop.matches) {
        cards.forEach(function (card, i) {
          if (i >= cards.length - 1) return;
          gsap.fromTo(card, { scale: 1 }, {
            scale: 0.95,
            transformOrigin: "center top",
            ease: "none",
            scrollTrigger: {
              trigger: cards[i + 1],
              start: "top 90%",
              end: "top " + cardPinTop(i) + "px",
              scrub: true
            }
          });
        });
      }

      window.addEventListener("load", function () { window.ScrollTrigger.refresh(); });
      return;
    }

    // ---- vanilla fallback (same effects, no dependency) ----
    var items = [];
    dividers.forEach(function (sec) {
      items.push({
        kind: "divider",
        sec: sec,
        img: sec.querySelector(".divider-bg"),
        label: sec.querySelector(".divider-label")
      });
    });
    cards.forEach(function (card, i) {
      if (i < cards.length - 1) items.push({ kind: "card", card: card, next: cards[i + 1], pinTop: cardPinTop(i) });
    });
    if (!items.length) return;

    function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }

    var ticking = false;
    function update() {
      ticking = false;
      var vh = window.innerHeight;
      items.forEach(function (it) {
        if (it.kind === "divider") {
          var r = it.sec.getBoundingClientRect();
          if (r.bottom < -120 || r.top > vh + 120) return;
          var p = clamp01((vh - r.top) / (vh + r.height));
          if (it.img) it.img.style.transform = "translate3d(0," + ((p - 0.5) * 16).toFixed(2) + "%,0)";
          if (it.label) {
            var lp = clamp01((p - 0.2) / 0.45);
            it.label.style.letterSpacing = (0.16 + lp * 0.28).toFixed(3) + "em";
            it.label.style.opacity = (0.5 + lp * 0.5).toFixed(3);
          }
        } else if (desktop.matches) {
          var rn = it.next.getBoundingClientRect();
          var prog = clamp01((vh * 0.9 - rn.top) / (vh * 0.9 - it.pinTop));
          it.card.style.transform = prog > 0 ? "scale(" + (1 - prog * 0.05).toFixed(4) + ")" : "";
          it.card.style.transformOrigin = "center top";
        } else if (it.card.style.transform) {
          it.card.style.transform = "";
        }
      });
    }
    function request() {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request, { passive: true });
    update();
  }

  /* ---------------- product card glow follows pointer ---------------- */

  function initCardGlow() {
    if (window.matchMedia("(hover: none)").matches) return;
    var cards = doc.querySelectorAll(".product-card");
    cards.forEach(function (card) {
      card.addEventListener("pointermove", function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
        card.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
      });
    });
  }

  /* ---------------- email (obfuscated) ---------------- */

  function buildAddr() {
    // assembled at runtime to keep scrapers away
    var u = ["info"].join(".");
    var d = ["motoyasu-kato", "com"].join(".");
    return u + "@" + d;
  }

  function initEmail() {
    var mailBtn = doc.getElementById("email-btn");
    if (!mailBtn) return;
    var setHref = function () {
      mailBtn.setAttribute("href", "mailto:" + buildAddr() + "?subject=" +
        encodeURIComponent(currentLang === "ja" ? "サイトからのお問い合わせ" : "Inquiry from your website"));
    };
    setHref();
    // keep the subject in the current language
    mailBtn.addEventListener("mouseenter", setHref);
    mailBtn.addEventListener("focus", setHref);
    mailBtn.addEventListener("touchstart", setHref, { passive: true });
  }

  /* ---------------- shiba easter egg ---------------- */

  function initEasterEgg() {
    var logo = doc.getElementById("logo");
    if (!logo) return;
    var clicks = 0;
    var timer = null;
    logo.addEventListener("click", function (e) {
      // logo links to #hero; still count
      clicks++;
      clearTimeout(timer);
      timer = setTimeout(function () { clicks = 0; }, 1800);
      if (clicks >= 5) {
        clicks = 0;
        pawRain();
        toast(t("toast.woof"));
      }
    });

    function pawRain() {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      var n = 24;
      for (var i = 0; i < n; i++) {
        var s = doc.createElement("span");
        s.className = "paw-fall";
        s.textContent = "🐾";
        s.style.left = Math.random() * 100 + "vw";
        s.style.fontSize = 14 + Math.random() * 18 + "px";
        s.style.animationDuration = 2.2 + Math.random() * 2.4 + "s";
        s.style.animationDelay = Math.random() * 0.9 + "s";
        doc.body.appendChild(s);
        s.addEventListener("animationend", function () { this.remove(); });
      }
    }
  }

  function consoleArt() {
    try {
      console.log(
        "%c\n  ▲ ▲\n (・ᴥ・)   ShibaInuChan — AI Architect\n  shiba    problems → structure → products\n\n" +
        "%cCOA (Cognitive OS Architecture) × Claude Code\nhttps://github.com/ShibaInuChan\n",
        "color:#e8954a; font-family:monospace; font-size:13px; font-weight:bold;",
        "color:#9aa4b0; font-family:monospace; font-size:11px;"
      );
    } catch (e) { /* no console */ }
  }

  /* ---------------- footer year ---------------- */

  function initYear() {
    var y = doc.getElementById("year");
    if (y) y.textContent = String(new Date().getFullYear());
  }

  /* ---------------- boot ---------------- */

  function boot() {
    // toggles
    var themeBtn = doc.getElementById("theme-toggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        var cur = root.getAttribute("data-theme") === "light" ? "light" : "dark";
        applyTheme(cur === "light" ? "dark" : "light");
      });
    }
    var langBtn = doc.getElementById("lang-toggle");
    if (langBtn) {
      langBtn.addEventListener("click", function () {
        applyLang(currentLang === "ja" ? "en" : "ja");
      });
    }

    // restore saved lang (theme is restored by the inline head script)
    var savedLang = null;
    try { savedLang = localStorage.getItem("sic-lang"); } catch (e) { /* ignore */ }
    if (savedLang === "en") {
      applyLang("en");
    } else {
      applyLang("ja");
    }

    initScrollUI();
    initReveals();
    initCounters();
    initNav();
    initCanvas();
    initTerminal();
    initScrollFx();
    initCardGlow();
    initEmail();
    initEasterEgg();
    initYear();
    consoleArt();
  }

  if (doc.readyState === "loading") {
    doc.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
