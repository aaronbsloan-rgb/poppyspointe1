# Poppy’s Pointe website — v1 

Static marketing site. Book buttons go to Campspot:
https://www.campspot.com/book/poppyspointe

## Pages
- index.html
- cabins.html
- rv.html
- groups.html
- activities.html
- area.html
- faq.html
- contact.html

## How to preview
Open `index.html` in a browser, or from this folder:

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080

## How to put it on poppyspoint.com
1. Back up the current WordPress / site files.
2. Upload this folder’s contents to the web root (public_html or equivalent).
3. If the old site is WordPress, you can point the domain to a new host (Netlify, Cloudflare Pages, or a simple GoDaddy folder) instead of fighting the old theme.
4. Add a 301 from poppyspointe.net → poppyspoint.com.

Netlify drop: drag this whole folder onto https://app.netlify.com/drop and you get a live preview URL in 30 seconds.

## Replacing placeholder photos
Put real files in `/images` using these names (or change the HTML `src`):

| File | Used on |
|---|---|
| hero-sunrise.jpg | Home hero (currently generated atmosphere) |
| cabin-exterior.jpg | Real property photo already in place |
| pool.jpg | Real property photo already in place |
| lake-ramp.jpg | Area / RV atmosphere — replace with your ramp |
| area-hillcountry.jpg | Area page — replace with your shoreline |
| rv-waterfront.jpg | Missing — add this |
| bungalow.jpg | Missing |
| lodge.jpg | Missing |
| grand-lodge.jpg | Missing |
| grand-lodge-living.jpg | Missing |

Striped boxes on the site say the exact filename to drop in.

## Rates
Shown as “from” using last published Campspot starting points:
- RV from $35
- Cabins from $105–$135
- Grand Lodge from $400

Update copy when you change pricing. Campspot remains the source of truth.

## After photos land
Send the folder (or a Drive link). Interiors and waterfront pads should replace generated/atmosphere shots so nothing looks like a different resort.
