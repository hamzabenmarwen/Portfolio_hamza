# Aziz Khaldi Portfolio — Complete Transformation Spec

**Reference:** [https://azizkhaldi.com/](https://azizkhaldi.com/)  
**Last audited:** 10 Sep 2026 (live HTML/CSS + `/`, `/works/`, `/about-me/`, `/contact/`, `/project/...`)  
**Your codebase:** Vite + React 19 + React Router + Tailwind + Framer Motion + GSAP + Lenis + Three.js  
**Goal:** Rebuild *your* site in this visual language and interaction model. Keep Hamza’s content, photos, projects, and voice. Do not copy Aziz’s copy, photos, or identity.

---

## 0. The one thing that matters

Your current theme in `src/index.css` is labeled “Aziz Khaldi Inspired Dark Theme.” The live Aziz site is **not dark**.

| Token | Aziz (actual) | You (current) |
|---|---|---|
| Canvas | Light gray `#E7E7E7` | Black `#000000` |
| Ink / surfaces | Near-black `#1E1E1E` | White on black |
| Accent | Acid lime `#D4F534` | Gold `#C9A227` |
| Mood | Editorial, playful, Awwwards | Luxury serif, cinematic |
| Display type | Cabinet Grotesk + Gilda Display / Lora | Playfair Display |
| Body type | Cabinet Grotesk | Inter |

Until the palette, type, and **light canvas** change, the site will not feel like his — no matter how many section layouts you copy.

---

## 1. Product anatomy

### 1.1 Stack (reference)

- **Framework:** Next.js **Pages Router** (`/_next/static/chunks/pages/index-…`, `pages/_app-…`)
- **Styling:** Tailwind 3.4.4 + CSS modules (`curve_background__fvaWJ`, `curveRoute`)
- **Fonts (next/font + Google):**
  - **Cabinet Grotesk** — primary UI (weights 200, 400, 500, 700, 800, 900)
  - **Gilda Display** — editorial serif moments
  - **Lora** — serif body / about
  - **Righteous** + **Megrim** — decorative / loader / marquee flavor
- **Motion:** GSAP-style scroll (word wrappers, timeline `will-change`, clip-path text), Framer-like page curves, CSS marquee
- **Cursor:** Custom (`cursor-none` on `.target`, `cursor-default` on home)
- **Audio:** Nav “Sound” control (wave SVG animation, 7s looping path)
- **Analytics:** Google Analytics `G-Q8FMQP6TFK`
- **SEO:** `application/ld+json` Person schema, OG image = portrait
- **Hosting:** Hostinger (`platform: hostinger`, `hcdn`)
- **Awards:** Fixed Awwwards ribbon, right edge, mid-viewport
- **A11y:** `@media (prefers-reduced-motion: reduce)` kills animation duration

You do **not** need to migrate to Next.js. Map this to the existing Vite app.

### 1.2 Information architecture

| Route (Aziz) | Purpose | Your equivalent |
|---|---|---|
| `/` | Long homepage: Hero → About → Services → Featured work → Experience → Footer | `src/pages/Home.jsx` already concatenates sections |
| `/works/` | Full project index (“My Work”) | `src/pages/Work.jsx` |
| `/about-me/` | Long-form about, stats, tech arsenal, CTA | `src/pages/About.jsx` |
| `/contact/` | Dedicated contact page (not only a footer form) | Missing as a route. You have `#contact` on Home + Navbar hash |
| `/project/:slug` | Full case study (client, stack, role, scroll story) | `src/pages/ProjectDetail.jsx` |

**Add a real `/contact` route.** His Contact nav item is a page, not an in-page jump. Your Navbar currently mixes routes (`/`, `/work`, `/about`) with `#contact`. Match him: four first-class pages.

### 1.3 Homepage section order (strict)

1. **Preloader / curve overlay** — full-viewport `#111111`, giant “Hello!” in Righteous/Cabinet, then curve wipe
2. **Fixed header** — logo left, Work + Contact + Sound + hamburger right
3. **Hero** — full viewport, huge first-name typography, sitting portrait, bottom tagline
4. **About band** — two-column intro + portrait crop + **count-up stats**
5. **Services** — 4 equal bordered squares in a **horizontal row** (desktop)
6. **Featured work** — 2×2 image cards (not a text list)
7. **Experience** — vertical timeline, company as giant type, dates left
8. **Double diagonal marquee** — lime-on-black strips, opposite rotation
9. **Footer** — LINKS / SOCIALS / LOCAL TIME / VERSION + pill phone/email + huge first name

Your Home currently is: Hero → About → Skills → Projects (list) → Experience → Contact.  
**Move Skills off the homepage** (they live on About as “Technology Arsenal”). **Move Contact off the homepage** (dedicated page). Keep a short “what I do” services row instead of proficiency bars.

---

## 2. Design tokens (implement these exactly)

Put these in `src/index.css` `:root` and `tailwind.config.js`. His Tailwind names:

```js
// tailwind.config.js — theme.extend.colors
main: '#E7E7E7',   // canvas (bg-main, text-main on dark)
sec:  '#1E1E1E',   // ink / dark surfaces (bg-sec, text-sec)
thr:  '#D4F534',   // accent lime (bg-thr, text-thr)
```

### 2.1 Color roles

| Role | Hex | Usage |
|---|---|---|
| Canvas | `#E7E7E7` | `body` background, homepage, works, about, contact |
| Ink | `#1E1E1E` | Primary text, dark footer, dark buttons, curve overlay sibling `#111111` |
| Overlay / transition | `#111111` | Page-transition curtain (`bg-[#111111]`) |
| Accent | `#D4F534` | Hover fills, marquee bars, timeline progress, selected states, focus |
| Muted on light | `#4B5563` / `#6B7280` | Secondary copy (`text-gray-600`, `text-gray-500`) |
| Muted on dark | `#D1D5DB` / `#9CA3AF` | Footer links (`text-gray-300`, hover `text-gray-400`) |
| Hairline | `#9CA3AF` | Service card borders (`border-gray-400`) |
| White | `#FFFFFF` | Type on dark buttons, footer name, loader text |

**Do not keep gold.** Gold + black is a different brand. Lime on light gray is the signature.

**Body background transition:** CSS `transition: background-color 0.8s cubic-bezier(0.4, 0, 0.2, 1)`. Project pages can invert to dark (`#1E1E1E` canvas, light type) while the rest stay light. His `.project-details:before` does an 0.8s background morph.

### 2.2 Type system

| Role | Family | Fallback | Where |
|---|---|---|---|
| UI / nav / body | Cabinet Grotesk | Arial | Almost everything |
| Editorial headlines (optional) | Gilda Display | Times | Hero last-name / about titles if you want extra craft |
| About body | Lora | Georgia | Long paragraphs on About |
| Loader / playful display | Righteous | Cabinet | “Hello!” transition word |
| Decorative | Megrim | — | Optional, sparse |

**Load Cabinet Grotesk** from Fontshare (free) or a licensed woff2. Do not keep Playfair as the hero face.

**Scale (from live classes):**

| Element | Mobile | Desktop |
|---|---|---|
| Hero first name | ~`text-4xl`–`6xl` | up to `lg:text-[10rem]` / `xl:text-[30rem]` for footer name |
| Section titles | `text-3xl`–`4xl` | `md:text-6xl`–`7xl`, `lg:text-8xl` |
| Body | `text-base`–`lg` | `lg:text-xl`, `leading-relaxed` |
| Nav | `text-sm`–`base` | Cabinet, not tiny caps |
| Footer mega name | `text-[8rem]` | `lg:text-[20rem]` / `xl:text-[30rem]`, `leading-[10rem]` → `lg:leading-[28rem]` |
| Letter-spacing | Hero tagline uses huge tracking (`letter-spacing-[1em]` class on a bottom label) | |

**Weight:** body 400, nav 400–500, headlines 700–800, mega name 700–900. Avoid “font-light Playfair” everywhere — his look is **bold grotesque**, not thin serif.

### 2.3 Spacing & layout

- Header padding: `p-4 md:p-8`, `pt-[1.5rem] md:pt-[2.5rem]`
- Section vertical: `py-12` → `lg:py-28` / `lg:py-40` (generous, not cramped)
- Content max: Tailwind container with extra breakpoints at **1400 / 1600 / 1920 / 2560**
- Horizontal padding: `px-4 md:px-8 lg:px-16 xl:px-[6rem]`
- Service cards: square-ish `w-full sm:w-[350px] md:w-[450px] lg:w-[480px]` with `p-6 sm:p-8 md:p-10`
- Radius: pills `rounded-full`, cards mostly **square corners** or slight `rounded-xl` on images, **not** rounded-2xl everywhere
- Hairlines: 1px gray, not gold

### 2.4 Motion tokens

| Token | Value |
|---|---|
| Page curve delay | overlay opacity `0s linear 0.1s` then SVG curve |
| Standard ease | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Your existing cinematic ease | `[0.76, 0, 0.24, 1]` — keep for big reveals |
| Word reveal | words start `translateY(115px)` inside clip polygon; duration ~0.5s staggered |
| Image hover | `scale(1.05)`–`1.1`, 500–700ms |
| Button hover | fill wipe to white or lime, 500ms |
| Marquee | CSS infinite, two layers `rotate-12` / `-rotate-12` (desktop `6deg` / `-6deg`) |
| Count-up stats | GSAP/Framer from 0 when in view |
| Timeline | line `will-change: transform, opacity`; dots scale from center |
| Reduced motion | honor `prefers-reduced-motion` |

### 2.5 Chrome

- **Scrollbar hidden:** `::-webkit-scrollbar { display: none }` + `scrollbar-width: none`
- **Antialiased** body
- **Custom cursor** on interactive `.target` (`cursor: none !important`)
- **GPU helpers:** `will-change-transform`, `translateZ(0)`, `backface-visibility: hidden` on images/hero letters
- Selection: optional lime highlight

---

## 3. Global chrome (every page)

### 3.1 Preloader + page transition (“curve route”)

Live classes: `page curveRoute`, `curve_background__fvaWJ`, overlay `h-[100vh] w-full fixed … bg-[#111111]`.

**Behavior:**

1. First load: dark overlay `#111` covers the viewport.
2. Centered word **“Hello!”** (or your equivalent: **“Hamza”** / **“Hey.”**) in large white grotesque (`lg:text-4xl xl:text-6xl font-righteous`).
3. Overlay uses `clip-path` / SVG **bottom curve** that drops away (`height: calc(100vh + 600px)` in the CSS module — extra height is the bulge).
4. On **internal navigation**, same curtain: flash the **destination name** (“Work”, “About”, “Contact”) instead of Hello, then curve out.

Your `CurtainTransition` in `App.jsx` is a split top/bottom shutter with Playfair. **Replace** with:

- Single dark panel + SVG path at the bottom (quadratic curve)
- Destination label centered
- Then reveal light page underneath

Implement in `src/components/PageTransition.jsx` (currently unused by App — App inlines `CurtainTransition`). Unify on one component.

### 3.2 Header / Navbar

Live: `w-full justify-between items-center flex z-[60] p-4 md:p-8 … font-cabinetGrotesk`

**Left**

- Small **mark / monogram** image, ~`h-[1.8rem] w-[1.7rem]` (lg slightly larger). His is `AzizLogoBlack.png` — a compact black glyph on light pages. You: simple **H** mark or existing logo, **black on light**, invert to white on dark pages.

**Right cluster (desktop)**

- Text links: **Work**, **Contact** (not Home — logo is Home)
- **Sound** control: square ~`3.5rem`, animated SVG waveform (`@keyframes wave` morphing path, 7s). Click toggles mute. This maps to your `AudioPlayer.jsx` — **move it into the header**, don’t float it separately.
- **Menu** hamburger: `absolute top-0 right-0 w-[3.5rem] h-[3.5rem]`, 2–3 bars, `z-[80]`

**Mobile**

- Logo + hamburger + sound. Work/Contact live inside the overlay menu.

**Fullscreen menu (you already have this)**

Keep the overlay, restyle:

- Light or dark full-bleed (his menu is large type, not tiny caps)
- Huge stacked links: Home, Work, About, Contact
- Footer of menu: email + socials
- Staggered `y: 100%` clip reveals (you already do this)

**Do not** use 11px uppercase gold tracking for desktop nav. Use readable Cabinet at ~16px, color `#1E1E1E`, hover gray.

### 3.3 Custom cursor

Your `CustomCursor.jsx` is gold dot + ring. Restyle:

- Default: small dark dot + larger delayed ring, **mix-blend-mode: difference** (his CSS includes `mix-blend-difference`)
- Hover on links: scale ring up (~60px), optional label (“View”, “Open”)
- Hide on touch / `md` breakpoint (you already `hidden md:block`)
- Hide default cursor on `a, button` (you already `cursor: none` on body)

### 3.4 Sound

- Ambient loop, user-gesture gated (you already do this).
- Visible **Sound / Mute** in the header, not a mystery FAB.
- Waveform SVG animates only when playing.

### 3.5 Footer (shared)

Your `Footer.jsx` is already structurally close. Restyle to light-or-dark **ink footer** (`bg-sec` `#1E1E1E`, light type):

**Top row (flex wrap):**

| Column | Content |
|---|---|
| LINKS | Home, Work, About, Contact — small caps gray labels, white items |
| SOCIALS | Email, LinkedIn, WhatsApp, GitHub |
| LOCAL TIME | Live clock, your timezone `Africa/Tunis` |
| VERSION | `{year} © Edition` |
| Actions (right) | Two **pills**: phone filled `bg-sec` + white border, email outlined. Hover: invert to white fill / dark text (`hover:bg-white hover:text-sec`) |

**Bottom:** gigantic **HAMZA** (first name only), bold grotesque, `select-none`, almost overflowing the viewport. This is the emotional closer.

**Back-to-top:** circular button, often bottom-right. Keep yours; restyle border to white/20 on dark footer.

---

## 4. Homepage — section by section

### 4.1 Hero (`src/components/Hero.jsx`)

**Layout (desktop):** full `h-screen`, centered composition, `overflow-hidden`.

**Elements observed:**

1. **Oversized first name** as the main graphic (Cabinet/Gilda, very large, tight leading). Not three stacked lines of “Hamza / Ben / Marouen” in thin Playfair.
2. **Portrait:** casual sitting photo (`me-sitting.png`), not a floating studio headshot with gold grain. Place it as a **physical object** overlapping the type (person sitting in/on the letters). You already have `hamzaaaa.png` — crop/compose it to sit in the type, with clip-path reveal.
3. **Bottom-center tagline** in Cabinet, wide tracking: his is a one-liner about being a full-stack developer crafting fast/scalable/immersive work. Yours should be **one sentence**, not a paragraph + “Available for work” pill + local time in the hero.
4. **Scroll hint** near bottom (`Scroll` appears once in DOM). Small, not a tall gold gradient line.
5. **No** vertical Github/LinkedIn/email rails on the sides. Socials belong in footer/menu.
6. **No** grain overlay + gold available-dot. The canvas is clean gray.

**Copy formula (write your own):**

> I’m Hamza — a Full-Stack & AI developer building fast, useful products (web, microservices, RAG) with care for craft.

**Motion:** letter/word clip reveals on load **after** the Hello curtain exits. Parallax on the portrait (`useTransform` is fine). Hero can fade/scale slightly on scroll (you already do this).

### 4.2 About band (`src/components/About.jsx` on Home)

**Not** a numbered “01 About” luxury label.

**Structure:**

- Optional **top SVG curve** (`about_top_curve`) separating hero from about — a white/gray bulge.
- **Left:** 2–3 short paragraphs. First person, outcome-led. His home about talks *what he builds* (SaaS, AI, 3D) then *how he thinks* (user goals → engagement).
- **Right:** framed portrait or the same sitting image, modest size.
- **Stats row:** two big numbers with labels:
  - Years of experience (count-up)
  - Projects completed (count-up)
- Words wrapped in `.word-wrapper` with `overflow: hidden` and `.word { display: inline-block }` — **word-by-word** mask, not line-by-line Playfair.

**Your stats (honest):** internships / years coding / shipped projects — keep truthful numbers, animate from 0.

Remove the 4-up “What I Do” grid from this component **or** restyle it into the Services section below. Don’t duplicate.

### 4.3 Services (`new component` or restyle About’s grid)

Four **large bordered squares in a row** (stack on mobile). Equal size ~480×480 on large screens. `border-gray-400`, padding 2–2.5rem, `text-sec`, `transition-all duration-500`.

His four:

1. Full Stack Development  
2. UI/UX Design & Frontend  
3. SaaS Platform Development  
4. API & System Architecture  

**Your four (content, same object):**

1. Full-stack web (React, Node, Spring, Laravel)  
2. AI systems (RAG, FastAPI, forecasting)  
3. Microservices & APIs (Docker, SQL, gateways)  
4. Product UI (React, Tailwind, motion)

**Hover:** subtle bg shift, maybe lime hairline, cursor scale. No gold circles.

### 4.4 Featured work (`src/components/Projects.jsx`)

**This is the biggest layout mismatch.**

You: numbered **text list** + floating thumbnail that follows the mouse.  
Him: **2×2 (or 2-column) image grid**, each card:

- Image `aspect-[4/3]`, `overflow-hidden`
- Hover: image `scale-110`, overlay title
- Title + **category chip** (AI Assistant, 3D Visualisation, Property Booking…)
- Click → `/project/:slug`

Home shows **four** featured projects only (VexLogic AI, VexLogic Business, Comra, Superhost). Full catalog is `/works`.

**Your featured four (suggestion):** Assiette Gourmande, Mon Cabinet, Service APV, Gestion des Ventes — rest on `/work`.

**Do not** use mouse-follow previews. Use static large photographs. If a project lacks a strong screenshot, make one before shipping this layout — the grid dies without imagery.

CTA under the grid is optional; he lets the Works page carry the rest.

### 4.5 Experience (`src/components/Experience.jsx`)

You are already close (timeline + giant company names). Restyle:

- Light canvas, dark type (not black page + gold blob SVG on the right — **remove the gold curve decoration**)
- Left: dates (`May 2025 – Present` style)
- Right: **Company as huge grotesque headline**, then role `(Part-time)` / `(Full-time)` / internship type, then 1–2 sentence description
- Vertical line + dots that **scale in** (`transform-origin: center`), progress line fills as you scroll
- Items start `opacity: 0` then fade (his `.experience-content`, `.timeline-dot { opacity: 0 }`)

Keep your real internships. Don’t invent full-time titles.

### 4.6 Double marquee

Two full-width bars, `bg-sec` (`#1E1E1E`), `text-main` / lime, `font-righteous` or Cabinet bold:

- Top strip `rotate-12` (lg `rotate-6`)
- Bottom strip `-rotate-12` (lg `-rotate-6`)
- Absolute, overlapping the seam between Experience and Footer
- Repeated phrases, e.g. “Handcrafted Digital Solutions · Driven by Passion, Built with Code · …”

Write **your** phrases. Infinite CSS `translateX`. `whitespace-nowrap`, `overflow-hidden` parent.

### 4.7 No homepage contact form

Contact is a **page**. Footer pills are enough on Home.

---

## 5. Work index (`src/pages/Work.jsx`)

**Header**

- Split title: “My” (small or second line) + “Work” huge
- Intro paragraph (you already copied this sentence — rewrite so it’s yours)
- Optional lime/black marquee “FEATURED PROJECT” — you already have one; restyle colors

**Grid**

- Vertical stack of large **image + text** rows, alternating left/right (`flex-row` / `flex-row-reverse`) — you already do this
- Image: 16:9 or 4:3, hover scale, **white circular “View”** in the center (you have this)
- Meta: category · year
- Title in Cabinet bold, not italic Playfair
- Short description + pill tags
- Entire row is a link to the case study

Light background. No gold hover titles.

---

## 6. Project case study (`src/pages/ProjectDetail.jsx`)

His template (from `/project/vexlogic-ai-assistant`):

1. **Hero title** split across lines (“VexLogic” / “AI Assistant”)
2. Eyebrow: “Showcasing creativity Through outstanding project”
3. **“Scroll to Explore”**
4. Short product paragraph (what it is, for whom)
5. Meta row: **Client** · **Platform** (e.g. Go, Next.js, RAG)
6. Full-bleed or large screenshots (scroll-linked, `.scroll-img`)
7. **Tech stack** — wrapped chips (OpenAI, Stripe, Docker, …)
8. **Role** — title + bullet **Key Responsibilities** (team size, Git workflow, features owned)
9. Optional next-project link
10. Shared footer

**Background:** many case studies go **dark** (`#1E1E1E`) with light type and lime chips, then footer. Implement a `theme="dark"` wrapper for this route so navbar logo/links invert.

Your detail page already has client, role, duration, tech, images. Reorder to match the narrative: **title → pitch → meta → gallery → stack → role/responsibilities → next**.

---

## 7. About page (`src/pages/About.jsx`)

Long scrolling light page. Structure from `/about-me/`:

1. **Title** “About Me”
2. **Opening** (warm, human, 1 paragraph) + **marquee** of “FULL-STACK DEVELOPER UI & UX DESIGNER.”
3. **Three long paragraphs** covering: who you are, how you work, what makes you useful. Include **measurable outcomes** if you have them (he cites 40% latency, 80% automation). Only use numbers you can defend.
4. **Three capability blocks:**
   - Full-stack architecture
   - AI & integrations
   - 3D / interactive *or* for you: Microservices / DevOps
5. **Proven Impact** — 4 stats with short captions (you: internships, projects, stack breadth, etc.)
6. **Technology Arsenal** — grouped chips (not proficiency bars):
   - Languages & Frameworks
   - AI & Data
   - Databases
   - DevOps
   - UI
7. **CTA band:** “Ready to build something…” + link to Contact
8. Marquee again + Footer

Keep Education (his home doesn’t emphasize school; your About can — put it **after** impact/skills so the page still feels like a senior product page, not a CV dump).

Photo: large, casual, with slight parallax (you already have this). Drop the floating “3 Internships” gold ring.

---

## 8. Contact page (new `src/pages/Contact.jsx`)

**Hero headline (two lines, huge):**

> Let’s Get in Touch and Turn  
> Your Ideas into Reality!

Use your own wording if you want, but keep the **scale**: this page is a poster, not a form tucked under a section number.

**Form (left or center, large fields):**

| Field | `name` |
|---|---|
| First Name | `firstName` |
| Last Name | `lastName` |
| Email | `email` |
| Description | `description` |

Submit = pill button, hover invert. Wire to existing EmailJS in `Contact.jsx` (split first/last into `from_name`).

**Aside / bottom:**

- Local time
- Phone, email
- LinkedIn / GitHub
- Short identity line: name + “Full-stack Developer”

No tiny floating labels on gold underlines. Use big placeholders, light inputs on gray canvas, dark text.

Update `Navbar` Contact → `/contact`. Keep EmailJS keys where they are; don’t commit new secrets.

---

## 9. Micro-interactions checklist

- [ ] Magnetic or at least `hover:scale-105` on pills
- [ ] Link underline grow (you have `.link-underline` — recolor to ink/lime)
- [ ] Image Ken Burns on hover (1.05–1.1, 500ms+)
- [ ] Word/line mask reveals on first viewport entry (`once: true`)
- [ ] Count-up for stats
- [ ] Timeline draw + dot pop
- [ ] Dual opposing marquees
- [ ] Curve page transition with route title
- [ ] Header sound waveform
- [ ] Cursor blend-mode difference
- [ ] Button fill from one side (you have `.btn-primary` — retarget to lime/black)
- [ ] Footer name slides up on view
- [ ] `prefers-reduced-motion` short-circuit

---

## 10. Content voice (write like him, as you)

**Do**

- First person, short sentences
- Pair craft + outcome (“fast, scalable”, “people actually use”)
- Name the stack in prose (Next/React/Node — you: React/FastAPI/Docker)
- Categories on work (not only tech tags): “AI platform”, “Medical SaaS”, etc.

**Don’t**

- Copy his bio, stats, or project names
- Fake Awwwards, 5 years full-time, or clients you didn’t have
- Keep “digital craft” Playfair poetry if the rest becomes grotesque/lime — pick one voice: **confident builder**, not luxury magazine

**SEO** (from his `<head>`)

- Unique `<title>`: `Hamza Ben Marouen | Software Engineer Portfolio`
- Meta description ~160 chars
- OG image = your portrait
- JSON-LD `Person`: name, jobTitle, email, telephone, sameAs (LinkedIn, GitHub, WhatsApp)
- `lang="en"`, viewport `width=device-width, initial-scale=1, maximum-scale=5`

---

## 11. File-by-file change map (your repo)

| File | Change |
|---|---|
| `tailwind.config.js` | Add `main` / `sec` / `thr`, Cabinet + Gilda/Lora fonts, extra screens 1400+ |
| `src/index.css` | Light body `#E7E7E7`, remove gold tokens, scrollbar hide, reduced-motion, word/line helpers |
| `index.html` | Fonts (Cabinet Grotesk, Gilda/Lora), title/description |
| `src/App.jsx` | Add `/contact` route; swap curtain for curve transition; pass theme (light/dark) |
| `src/components/Navbar.jsx` | Logo mark, Work + Contact + Sound + Menu; ink color |
| `src/components/AudioPlayer.jsx` | Embed in navbar as waveform button |
| `src/components/CustomCursor.jsx` | Difference blend, lime/black, no gold |
| `src/components/Loader.jsx` | Dark `#111` + “Hello”/name + curve; drop gold % Playfair |
| `src/components/PageTransition.jsx` | SVG curve overlay + route title |
| `src/components/Hero.jsx` | Light hero, type+portrait composition, one tagline, no side rails |
| `src/components/About.jsx` | Home about band + stats count-up; remove gold services or move |
| `src/components/Skills.jsx` | Remove from Home; migrate chips to About page |
| `src/components/Projects.jsx` | 2×2 image cards, 4 featured |
| `src/components/Experience.jsx` | Light timeline, drop gold SVG blob |
| `src/components/Contact.jsx` | Either delete from Home or reuse fields on Contact **page** |
| `src/components/Footer.jsx` | `bg-sec`, lime-less pills, mega HAMZA in Cabinet |
| `src/pages/Home.jsx` | Hero → About → Services → Work grid → Experience → Marquee → (Footer in App) |
| `src/pages/Work.jsx` | Light, Cabinet titles, keep alt image rows |
| `src/pages/About.jsx` | Arsenal + impact + education; light |
| `src/pages/Contact.jsx` | **Create** poster + 4-field form |
| `src/pages/ProjectDetail.jsx` | Dark theme case study template |
| `src/pages/NotFound.jsx` | Same type/color system |

---

## 12. Implementation order (so it actually starts looking like him)

1. **Tokens + fonts + body background** — 80% of the “feel”
2. **Navbar + footer + curve transition + cursor + sound**
3. **Hero composition**
4. **Services squares + featured 2×2 grid**
5. **Experience + marquees**
6. **Work / About / Contact / Project pages**
7. **Polish:** reduced motion, OG/JSON-LD, image quality, mobile hamburger, theme invert on project pages

Do not start with new Three.js. His homepage wow is **type, photo, curve, lime, and scroll** — not a 3D canvas.

---

## 13. Mobile notes

- Awwwards ribbon scales to 0.8 / 0.7
- Hero type shrinks; portrait may stack under name
- Service cards become a vertical stack, still ~square
- Featured grid: 1 column
- Marquee rotation increases on small screens (`rotate-12` vs `lg:rotate-6`)
- Form fields full width
- Custom cursor off
- Header padding `p-4`
- Footer columns wrap; mega name still huge (`text-[8rem]` is OK if `overflow-hidden` on footer)

---

## 14. What you already have (don’t throw away)

- Router + curtain idea → upgrade to **curve**
- Custom cursor → recolor / blend
- Audio → move into header
- Footer IA (LINKS / SOCIALS / TIME / VERSION / pills / mega name) → **recolor + type**
- Work page alternating image rows → keep
- Project detail data model → keep, restyle
- EmailJS → keep
- Lenis / GSAP already in `package.json` → use for word reveals and timeline (Aziz’s markup is GSAP-shaped)

---

## 15. Definition of done

The site reads as the same **family** as azizkhaldi.com when you screenshot side-by-side:

- Light gray page, not black
- Acid lime, not gold
- Cabinet Grotesk, not Playfair-on-everything
- Hello/curve navigation
- Header: logo · Work · Contact · Sound · Menu
- Hero: huge name + sitting portrait + one line
- Four square services
- Four image projects on home
- Ink footer with colossal first name
- Dedicated Contact poster page
- Case studies that look like product stories

Personal content stays 100% Hamza.
