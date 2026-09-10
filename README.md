# SHANTI INTERIOR — Free Static Website

## Files
- `index.html` — complete website
- `style.css` — premium black/gold design
- `script.js` — mobile menu, map config and GitHub Pages WhatsApp fallback
- `assets/shanti-poster.jpg` — uploaded Shanti Interior poster used as starter visual

## Deploy on Netlify (recommended)
1. Create a GitHub repository and upload all files/folders.
2. In Netlify, choose **Add new project / Import an existing project** and select the GitHub repository.
3. Build command: leave blank.
4. Publish directory: `.` (root).
5. Deploy.
6. Netlify will detect the `project-enquiry` form. Form submissions can be viewed in the Netlify dashboard.
7. Add a custom domain later if desired.

## Deploy on GitHub Pages
1. Open repository Settings → Pages.
2. Choose deployment from the main branch and `/root`.
3. Save.
4. Your site will be available at `https://YOURUSERNAME.github.io/REPOSITORY-NAME/`.
5. The visual site works normally. Because GitHub Pages is static hosting, the enquiry form uses a WhatsApp fallback instead of Netlify Forms.

## Before going live
- Replace gallery placeholders with real project/site photos.
- Add catalogue PDF files and change the three `View Catalogue` links in `index.html`.
- Replace the office address and map query in `script.js` with the exact office location.
- Add the final Instagram QR/image if you want it displayed.
- Optional: add a custom `.com`/`.in` domain later and point it to Netlify.
