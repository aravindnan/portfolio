# Portfolio redesign: direction

This file sets the direction for the redesign: brief, concept and art direction system. Every later build pass should read it first so the decisions stay consistent.

Status: **direction proposed, not built.** A clickable prototype of the concept is in `content/direction/index.html`.

---

## Phase 0: Brief

- **Subject:** Aravind Nandakumar. Software engineer at CodeWalnut, Bangalore (since Jan 2025). Before that: React developer at Netstratum, Kochi, and a UI/UX design intern at Youth Empowerment Foundation. MCA from Christ University. From Kochi, Kerala.
- **Audience:** hiring managers and design leads looking for a **product designer or design engineer**, plus studios that need someone who can carry a screen from Figma to production.
- **The site's job:** get hired as *a designer who builds*. A visitor should understand both halves within 5 seconds of landing.
- **Real assets:** six shipped works with live URLs and full screenshots (`_capture/`), source repos for each, the original TMS Figma file and UI photos, and case study drafts (`content/CASE-STUDIES.md`).
- **Assumptions (to confirm):**
  - your role on Gateways and Revelations: identity and site, or site only?
  - a portrait photo for About
  - whether Agentic LMS can be shown publicly

## Phase 1: Concepts

Three concepts from different territories. Scores run 1 to 5. For portability, lower is better: it measures how easily the idea could be moved to someone else.

### A. Redline: the spec and the build, one seam apart
*Territory: the material of the profession.*
- **Idea:** every work is one screen split by a draggable seam. On one side is the design spec (redlines, spacing, type specs). On the other is the shipped, running page.
- **Signature:** drag the seam across the Cirrh0 hero, and the measurements give way to the real product.
- **Emotion:** "oh, he drew it *and* built it."
- **Screenshot:** a half-redlined Cirrh0 screen with the seam mid-drag.
- **Anchor:** you are both the person who wrote the spec and the one who shipped it. The TMS repo holds both the `.fig` file and the v2 product.
- **Scores:** originality 3 · fit 5 · feasibility 4 · portability 3.
- **Risk:** any design engineer could claim this. It also needs hand-authored redlines for every cover.

### B. Seeded: the portfolio drawn by your own generative code
*Territory: a formal or generative system.*
- **Idea:** your generative practice becomes the identity. Every project gets a live cover grown from its own data: FIB-4 curves for Cirrh0, Kanban flow for TMS, lightning for Gateways, halftone for Revelations.
- **Signature:** your name drawn as a particle field, reseeded on click.
- **Emotion:** curiosity, play.
- **Screenshot:** the name mid-reseed.
- **Anchor:** Generative Designs (25 p5.js experiments) is real work of yours.
- **Scores:** originality 4 · fit 3 · feasibility 3 · portability 2.
- **Risk:** the generative covers compete with the real screens. Hiring managers want to see the product.

### C. Chapters: the site re-skins itself for every project ✅ chosen
*Territory: a metaphor for how you work.*
- **Idea:** you design whole themes. Olympus for Gateways, the Marvel universe for Revelations, a calm clinic for Cirrh0, an editorial school for Agentic. As you scroll the work, **the entire portfolio takes on each project's own palette and typographic voice**, then returns to your own neutral look in between.
- **Signature:** the **chapter wipe**. The next project's ground colour wipes up from the bottom like a stage curtain. The fixed name, the nav and the cursor re-set into that project's look in the same motion. Every piece of the site follows one variable (the chapter), so it all changes together.
- **Emotion:** range, delivered with control.
- **Screenshot:** halfway through the wipe from Gateways (black and gold) into Revelations (pink on black).
- **Anchor:** the six real palettes and type voices of six sites you designed and shipped. The re-skin itself proves the developer half: one set of design tokens driving a whole site.
- **Scores:** originality 4 · fit 5 · feasibility 4 (CSS variables plus clip-path, no WebGL needed) · portability 2.

### D. Kasavu: the page as a length of Kerala handloom
*Territory: place and culture.*
- **Idea:** the gold zari border of Kochi's kasavu cloth is the site's single structural line. A gold thread down the left edge tracks your scroll. Every work is framed top and bottom by a woven border that weaves in as it arrives. Your name is also set large in Malayalam (അരവിന്ദ്).
- **Signature:** the borders weaving across the screen as each work enters.
- **Emotion:** rooted, calm, personal.
- **Anchor:** you're from Kochi, and no one else's portfolio carries this.
- **Scores:** originality 4 · fit 3 · feasibility 5 · portability 1.
- **Risk:** it says a lot about *you* and little about *designer plus developer*.

**Prototypes of all four:** `content/direction/concepts.html` links to each one.

**Why C:** it shows design range and engineering discipline in the same gesture, and every frame of it is made from your actual work.

**Borrowed from A:** case study pages split every project into a **Design** spread and a **Build** spread, so the two halves are explicit in every story.

## Concept card

```
Idea:        A portfolio that takes on each project's look as you scroll through it.
Metaphor:    A stage with six sets; the curtain is the next project's ground colour.
Signature:   Chapter wipe: clip-path curtain in the next palette + type re-set, one driver variable.
Emotion:     "This person designs whole themes, and engineers them as one system."
Motion verb: Wipe and re-set. Surfaces wipe in from below; type re-sets in place; nothing bounces.
Screenshot:  Mid-wipe between Gateways (black/gold) and Revelations (pink/black).
```

## Phase 2: Art direction system

### Palette: home (yours)
| Role | Hex | Use |
|---|---|---|
| ground | `#E9E9E4` | cool paper grey, not cream |
| ink | `#111111` | all text |
| muted | `#5C5C57` | meta only (dates, captions) |
| line | `#C9C9C2` | rare: table rules in About only |
| accent | `#1E3BEF` | cobalt: links, focus ring, the one CTA |
| curtain | `#111111` | page transitions |

### Palette: projects
Taken from each shipped site. Each project sets the same four tokens (`--ground`, `--ink`, `--accent`, `--wdth/--wght/--slnt`).

| Project | ground | ink | accent | Type voice (Archivo axes) |
|---|---|---|---|---|
| Cirrh0 | `#FFFFFF` | `#1A1A1A` | `#A50E0E` | wdth 100, wght 800 (calm, heavy, clinical) |
| Agentic Practices | `#F3EEEA` | `#161616` | `#D0412A` | wdth 100, wght 900, tight tracking (editorial) |
| TMS | `#0F2E3A` | `#E8EFF1` | `#9CC6D0` | wdth 112, wght 600 (systematic) |
| Gateways 2024 | `#0A0A0A` | `#F2E4C4` | `#E2B565` | wdth 125, wght 300 (monumental, wide, marble) |
| Revelations 2024 | `#121212` | `#FFFFFF` | `#F8CFDB` | wdth 62, wght 900, italic (comic, condensed) |
| Generative Designs | `#FAFAFA` | `#0A0A0A` | `#0A0A0A` | wdth 87, wght 200 (a thin line, a pen plotter) |

Agentic's ground and accent come straight from its live site. It's the one place a warm paper tone appears, and it's there because the work uses it.

### Type
- **One family: Archivo** (Google Fonts, variable: `wdth` 62–125, `wght` 100–900, italic). Its width axis carries the concept: each project sets the project titles at its own width and weight, so the type itself changes character without loading six fonts.
- **Scale (fluid):**
  - display: `clamp(64px, 13vw, 220px)`, tracking −0.045em, leading 0.86
  - h2: `clamp(36px, 5vw, 72px)`, tracking −0.03em, leading 0.95
  - body: 17px/1.55
  - meta: 13px/1.4, tabular numbers
- Display type is a design element. Your name hangs off the left margin with a negative indent, and project titles bleed to the grid edge.

### Grid and rhythm
- 12 columns, 24px gutter, 32px outer margin on desktop. 4 columns and 16px margins on phones.
- **Alignment rule:** all text starts on column 1 or column 7. Nothing else.
- Section rhythm alternates: a full-screen chapter, then a dense strip, then a full-screen chapter.

### Shape
- Radius 0 everywhere: screens, buttons, chips. Screenshots get no device chrome and no shadow; they sit flat on the ground.

### Motion language
- **Ease:** `cubic-bezier(.76,0,.24,1)` for wipes, `cubic-bezier(.2,.7,.2,1)` for small things.
- **Durations:** wipe 900ms, type re-set 600ms, hovers 280ms. Stagger 40ms.
- **Hover (primary targets):** project screens slide up 8px while their accent bar wipes in underneath. Links get an underline that wipes left to right. Never a colour swap alone.
- **Idle:** the active project's screenshot drifts slowly (±6px on a 12s loop, paused off screen).
- **Reduced motion:** no wipe. Projects swap with a 200ms crossfade and all content stays visible.

### Composition plan

**Home**
```
[nav]  Aravind Nandakumar                    Work  About  Contact
┌────────────────────────────────────────────────────────────────┐
│ ARAVIND                                                        │  h1, display, hangs left
│ NANDAKUMAR                                                     │
│ I design products, then build them.     Now: CodeWalnut, BLR  │  col 1 / col 7
│                                          From Kochi, Kerala    │
└────────────────────────────────────────────────────────────────┘
── chapter wipe ──
┌──────── project: Cirrh0 (full viewport, sticky) ─────────────────┐
│ Cirrh0                     ┌───────────────────────────────┐   │
│ Read your liver lab        │  real desktop screenshot      │   │
│ report.                    │                     ┌──────┐  │   │
│ Product · Design + Build   │                     │mobile│  │   │
│ 2025  → Case study         └─────────────────────┴──────┘  │   │
└────────────────────────────────────────────────────────────────┘
   × 6 projects, each wiping into the next
┌─ strip: back home ────────────────────────────────────┐
│ About (short)  portrait │ 3 lines of story │ Read more →        │
└────────────────────────────────────────────────────────────────┘
[footer] ARAVIND NANDAKUMAR (full-width) · email large · LinkedIn · GitHub
```

**Work (gallery):** filters (All · Product · Brand & events · Creative code). The grid is asymmetric: rows alternate 7+5 and 5+7 columns. Each tile shows its project's ground with the real screenshot inset. Hovering previews the project colour on the page edges.

**Case study:** opens fully in its own colours → overview strip (role, year, team, tools, live link) → **Design** spread (problem, decisions, screens) → **Build** spread (stack, one real code excerpt, what was hard) → full screen gallery (desktop and mobile, lightbox) → outcome → the next project wipes in from below.

**About:** a two-column spread. Portrait on columns 1–5; the story on 7–12; a timeline table (the one place `line` is used); a tools list split into "Design" and "Build"; résumé download.

**404:** "This page hasn't been built yet." The page cycles slowly through all six project grounds.

### Genericness test
*Would a generic model land here?*
- A generic answer is a dark grid of project cards with hover zoom and a gradient hero. **Changed:** no cards on the home page. Each project gets a full screen.
- A generic answer uses Inter or Space Grotesk. **Changed:** one variable family whose width axis carries the concept.
- A generic answer uses a horizontal scroll gallery. **Avoided:** projects scroll vertically and stay sticky.
- A generic About says "passionate about crafting experiences". **Changed:** the timeline and a Design and Build tools split. Copy rules are in `content/CASE-STUDIES.md`.

### Stack (proposed)
**Astro + MDX, with React islands** where needed. This is a content showcase where motion is the product. Case studies become MDX files, and the page-swap lifecycle suits the chapter wipe. GSAP and Lenis handle motion; no WebGL is needed. The current CRA app (CRA is deprecated) is replaced rather than ported; only the content moves over.
