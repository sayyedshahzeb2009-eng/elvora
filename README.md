# ELVORA

Premium 3D D2C home-organization experience.

## Features
- Editorial luxury homepage with motion and responsive layouts
- React Three Fiber interactive hero with graceful CSS fallback
- Product data layer and dynamic product pages
- Functional cart drawer with quantities and free-shipping progress
- Before/after touch + keyboard comparison
- Config-driven theme, navigation, content and motion settings
- SEO metadata, Open Graph, semantic HTML and product JSON-LD
- Reduced-motion and mobile performance safeguards
- Structured for future Shopify Liquid migration

## Tech stack
Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Three.js, React Three Fiber, Drei and Lucide React.

## Installation
```bash
npm install
npm run dev
```

## Customization
- Products: `src/data/products.ts`
- Collections: `src/data/collections.ts`
- Testimonials: `src/data/testimonials.ts`
- Brand/site copy: `src/config/site.ts`
- Colors + animation/3D settings: `src/config/theme.ts`
- Navigation: `src/config/navigation.ts`

## 3D models
The current experience uses a procedural R3F organizer so the repository works without binary assets. To add a GLB, place it in `public/models/` and swap the procedural object in `src/components/3d/hero-scene.tsx` for Drei's `useGLTF`. Keep `ENABLE_3D` disabled for low-power devices if required.

## Deployment
Deploy directly to Vercel after connecting the repository. No backend is required for the demo cart; production checkout should connect to a real commerce provider.

## Shopify migration
Components are intentionally separated from data. In a Shopify build, map sections such as Hero, SpaceGrid, ProductGrid, Story and Newsletter to Liquid sections, replace `src/data/products.ts` with Storefront API/Liquid product objects, and keep the presentation components largely unchanged.

## Notes
External Unsplash images are used as configurable editorial demo imagery. Replace them with owned/compressed assets before launch.
