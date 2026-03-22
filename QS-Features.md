# Qualitätssicherung – Features-Seite

**Datum:** 09.03.2026  
**Datei:** features.html

---

## ✅ Bestanden

| Prüfpunkt | Status |
|-----------|--------|
| Alle verlinkten HTML-Dateien existieren | ✅ |
| Alle Bilder referenziert (logo.png, screenshot-*.png) | ✅ |
| nav.css eingebunden, --page-pad Variablen genutzt | ✅ |
| Semantisches HTML (header, main, nav, section, footer) | ✅ |
| Breadcrumb mit aria-label | ✅ |
| Überschriften-Hierarchie (h1 → h2 → h3) | ✅ |
| Responsive Breakpoints konsistent (600, 700, 860, 900, 1060px) | ✅ |
| Mieter & Aufgaben: 2-Spalten-Layout auf Desktop (860px+) | ✅ |
| Hero-Schatten via Pseudo-Element (kein Abschneiden) | ✅ |
| Schema.org / Open Graph / Canonical vorhanden | ✅ |
| Meta description, og:image, og:locale | ✅ |

---

## 🔧 Kleine Verbesserungen (optional)

1. **Accessibility:** Dekorative SVGs in feat-oneliner und feat-pill haben teils `aria-hidden="true"`, teils nicht – einheitlich machen.
2. **feat-oneliner:** Einrückung der Kind-Elemente im Markup für Konsistenz.

---

## 📋 Link-Check

| Ziel | Existiert |
|------|-----------|
| index.html | ✅ |
| portfolio.html | ✅ |
| finanzen.html | ✅ |
| transaktionen.html | ✅ |
| nebenskosten.html | ✅ |
| aufgaben.html | ✅ |
| ratgeber.html | ✅ |
| faq.html | ✅ |
| ueber-uns.html | ✅ |
| kontakt.html | ✅ |
| datenschutz.html | ✅ |
| datenschutz-app.html | ✅ |
| impressum.html | ✅ |
| agb.html | ✅ |

---

## 📋 Asset-Check

| Bild | Existiert |
|------|-----------|
| logo.png | ✅ |
| screenshot-portfolio.png | ✅ |
| screenshot-immobilien.png | ✅ |
| screenshot-einheit-mieter.png | ✅ |
| screenshot-finanzen.png | ✅ |
| screenshot-transaktionen.png | ✅ |
| screenshot-aufgaben.png | ✅ |
| screenshot-finanzierung.png | ✅ |

---

## Layout-Übersicht

- **Hero:** Zentriert, 3 Phones (bei &lt;480px nur mittleres), One-Liner integriert
- **Portfolio-Block:** 2-Spalten ab 860px, Text links | Phone rechts
- **USP-Strip:** Full-Width, 3 Items horizontal ab 700px
- **Finanzen:** 2 Cards im Grid ab 700px
- **Mieter:** 2-Spalten ab 860px (Content | Phone), Tablet 600–859px: 3-Icon-Grid
- **Aufgaben:** 2-Spalten ab 860px (Content | Phone), Pills linksbündig
- **Showcase:** Dunkel, horizontales Scroll
- **Strip (CTA):** Teal-Gradient, zentriert

---

## Fazit

**Status: Freigabe** – Keine kritischen Fehler. Kleine A11y-Anpassungen möglich, aber nicht zwingend.
