# SriMart E-commerce Website

SriMart is a complete, professional, and fully responsive e-commerce front-end application built using HTML5, CSS3, and vanilla JavaScript (ES6+). It serves as a comprehensive portfolio project demonstrating modern web development practices without relying on external frameworks.

## 🚀 Features

- **Responsive Design**: Mobile-first approach using CSS Grid & Flexbox. Looks great on all devices.
- **Dark/Light Theme**: Built-in theme toggler using CSS variables. Preference is saved across sessions.
- **Dynamic Product Data**: Dummy data loaded from a JSON-like array for realistic rendering.
- **Authentication**: Client-side login and registration forms with validation and session management.
- **Product Discovery**: 
  - Live search suggestions.
  - Sidebar filtering (Price, Category, Brand, Rating).
  - Sort by relevance, price, and rating.
  - Grid and List view toggles.
- **Shopping Cart & Wishlist**: Add/remove items, adjust quantities, apply dummy coupons, and move items between cart and wishlist.
- **Checkout Flow**: Multi-step checkout process (Delivery -> Payment -> Summary).
- **User Account**: Profile page and Order History view.
- **UI Enhancements**: Sticky navbar, scroll-to-top button, toast notifications, and scroll animations (IntersectionObserver).
- **Data Persistence**: Uses `localStorage` to save cart, wishlist, orders, user sessions, and theme preferences.

### 🌟 Phase 2 Upgrades
- **Advanced Payment Simulation**: Detailed mock checkout including Card (Luhn validation), UPI (dummy delay), Net Banking, Wallet, and COD options, featuring realistic success/failure states.
- **Map Integration**: Interactive Leaflet.js map on the checkout page with reverse geocoding via Nominatim to auto-fill delivery addresses. Also includes a dedicated Store Locator page.
- **Enhanced Navigation**: Desktop Mega-Menu and secondary category bar populated dynamically from structured category data.
- **Nested Filtering & Breadcrumbs**: Advanced sidebar filtering supporting nested subcategories with URL parameter routing.
- **Interactive Discoverability**: Quick-View modals for products and a "Recently Viewed" slider tracked via local storage.

### 🚀 Phase 3 Upgrades
- **Exact Product Data**: Real-world curated products for Groceries, Phones, and Audio with accurate, high-quality images and full specifications.
- **Advanced Filtering Logic**: URL-persisted filter state, live price slider filtering, dynamic brand extraction based on current category, filter chips, and strict AND-logic combinations.
- **Smart Back Navigation**: Reusable back-navigation component injected dynamically across all inner pages with history tracking and fallback routing.
- **Relevant Recommendations**: Enhanced related-products algorithm weighing category, subcategory, brand, and price proximity; "Frequently Bought Together" logic based on cart contents.

### ✨ Phase 4 Upgrades
- **Interactive Reviews & Ratings**: Submit star ratings, text, and photo previews. Includes rating breakdowns and "Verified Purchase" badges linked to order history.
- **Live Order Tracking**: Visual timeline for simulated order progression (Placed → Delivered). Includes live Leaflet map tracking for "Out for Delivery" status.
- **Smarter Search**: Advanced autocomplete with fuzzy matching (Levenshtein distance) to handle typos, category grouping, and recent/trending search tracking.
- **PWA & Offline Support**: Service worker caching and web app manifest allowing the site to be installed as an app and serve cached content offline with a graceful fallback banner.
- **Accessibility & SEO**: Semantic ARIA tags, keyboard navigability improvements, contrast checks, and full Meta/Open Graph tags on all pages for perfect link previews.

## 📁 File Structure

```text
srimart/
├── html/                   # All HTML pages
│   ├── index.html          # Home page
│   ├── ...                 # Other pages
├── css/                    # Modular CSS files
├── js/                     # Modular JavaScript
│   ├── reviews.js          # Product reviews logic
│   └── ...                 # Other scripts
├── assets/                 # Images & icons
├── manifest.json            # PWA App Manifest
├── sw.js                    # Service Worker for offline caching
└── README.md
```

## 🛠️ How to Run & Deploy

### Local Development
To test all features (especially the Service Worker and PWA offline support), you **must serve the site over HTTP(S)**. Simply opening `index.html` via `file://` will block service worker registration.
We recommend using [VS Code Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) or Python:
```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000/` (or run `start-server.bat` on Windows).

### Deploying to GitHub Pages
Since this is a frontend-only project, it is fully ready to be hosted for free on GitHub Pages:
1. Push the repository to GitHub.
2. Go to your repository **Settings** > **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select the `main` branch and `/ (root)` folder, then click **Save**.
5. Wait a minute for the build to complete. Your PWA-ready store will be live!

*Note: The service worker is registered from the root and controls the complete site, including all pages inside `/html/`.*

## 🎨 Technologies Used

- **HTML5** for semantic structure.
- **CSS3** (Vanilla) for styling, variables, animations, Flexbox, and Grid layouts.
- **JavaScript (ES6+)** for DOM manipulation, logic, and state management.
- **Font Awesome** for scalable vector icons.
- **Leaflet.js** for interactive maps and live tracking.
- **Google Fonts** (Inter) for modern typography.
- **LocalStorage API** for client-side data persistence.
- **Service Workers & Web App Manifest** for PWA offline capabilities.

---
*Built as a showcase portfolio project.*
