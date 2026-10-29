# కటికపల్లి గ్రామ పంచాయతీ — ప్రచార వెబ్‌సైట్

Static site (no build step, no dependencies): index.html, style.css, script.js.

## Run on localhost
    cd katikapalli-site
    python3 -m http.server 8000
Then open http://localhost:8000 (Windows: use `py -m http.server 8000`).

## Deploy later (any one of these)
- Netlify / Cloudflare Pages / GitHub Pages: drag-and-drop or connect the folder; publish dir = this folder. Then point your domain's DNS to it.
- Any shared host: upload the 3 files to public_html.

## Editing
index.html is generated from template.html; edit text directly in index.html for small changes.
Phone number appears in the hero, contact section and footer links (tel:+919036047478, wa.me/919036047478).
