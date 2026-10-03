# Bandage Storefront

Bandage is a responsive storefront demo built with React and TypeScript. It combines a retail-style landing page with product categories, a featured product grid, product detail dialogs, promotional content, and a blog section. Product and post data are fetched from the public [DummyJSON API](https://dummyjson.com/).

This repository is a front-end demonstration rather than a complete commerce service: it has no checkout, account system, or project-specific backend.

## Features

- **Storefront landing page:** promotional banner, navigation, category tiles, featured products, service highlights, about content, and footer.
- **Live catalog data:** product categories, product listings, individual product details, prices, ratings, and images come from DummyJSON.
- **Responsive product grid:** the catalog requests fewer products on smaller screens.
- **Product details:** select a product to view its image, category, price, and rating in a dialog.
- **Cart state:** Redux Toolkit stores selected products and quantities and exposes actions to add items, remove items, or empty the cart. The header displays the total quantity.
- **Blog content:** three posts and their comment counts are loaded from DummyJSON.
- **Local visual assets:** promotional imagery, social icons, and the Montserrat font are included under `src/assets`.

## Tech stack

- React 19 and TypeScript
- Vite 8 for the development server and production build
- Redux Toolkit and React Redux for application state
- RTK Query for API requests and caching
- Cloudflare Kumo components and Lucide icons
- Oxlint for linting

## Requirements

- Node.js compatible with the versions of Vite and TypeScript in `package.json`
- npm (or another Node package manager)
- Internet access while using the app, since catalog, post, and comment data are requested from DummyJSON

## Getting started

Clone the repository, then run the following commands from its root:

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal (usually `http://localhost:5173`). Open it in a browser. The app does not require environment variables or a separate server.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot module replacement. |
| `npm run build` | Run TypeScript project checks and create a production build in `dist/`. |
| `npm run preview` | Serve the built app locally for preview. Run `npm run build` first. |
| `npm run lint` | Run Oxlint on the project. |

## Project layout

```text
.
├── public/                 # Static public assets, including icons
├── src/
│   ├── assets/             # Images, SVGs, and font files
│   ├── components/         # Storefront sections and their styles
│   ├── hooks/              # Shared React hooks
│   ├── lib/
│   │   ├── cart.ts         # Cart slice and actions
│   │   ├── product.ts      # DummyJSON RTK Query APIs and hooks
│   │   ├── store.ts        # Redux store configuration
│   │   └── types.ts        # API and cart data types
│   ├── App.tsx             # Page composition
│   ├── index.css           # Global styles
│   └── main.tsx            # React entry point and Redux provider
├── index.html
├── package.json
└── vite.config.ts
```

## Data and state

The RTK Query services in `src/lib/product.ts` use these DummyJSON endpoints:

- `https://dummyjson.com/products` for product lists, searches, categories, and product details
- `https://dummyjson.com/posts` for featured posts
- `https://dummyjson.com/comments` for post comment counts

The Redux store is configured in `src/lib/store.ts`. Cart actions are defined in `src/lib/cart.ts`; cart state currently lives in memory and resets when the page is reloaded. The product dialog UI currently marks products as out of stock, so its add-to-cart controls are disabled in the rendered storefront.

## Making changes

- Add or update page sections in `src/components/` and compose them in `src/App.tsx`.
- Keep API request definitions and generated query hooks in `src/lib/product.ts`.
- Update shared API shapes in `src/lib/types.ts` when the data model changes.
- Put reusable state logic in Redux slices under `src/lib/` and register reducers and middleware in `src/lib/store.ts`.
- Store imported images and fonts under `src/assets/`; static files that should be served as-is can go in `public/`.

## Current scope

This is a storefront UI demo. Navigation links, subscription UI, and several calls to action are visual elements and are not wired to a full shopping, account, or subscription workflow. The cart has no checkout or persistence, and the current product dialog disables purchasing by showing an out-of-stock state. Product and blog content depend on DummyJSON being reachable.
