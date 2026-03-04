# The Chalet Blog - Complete Folder Structure

```
The-Chalet-Blog/
├── public/
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Header/
│   │   │   │   ├── Header.tsx                (Navigation header component)
│   │   │   │   ├── Header.module.scss        (Header styles with reference classes)
│   │   │   │   └── index.ts                  (Export file)
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.tsx                (Footer component)
│   │   │   │   ├── Footer.module.scss        (Footer styles)
│   │   │   │   └── index.ts                  (Export file)
│   │   │   └── index.ts                      (Layout exports)
│   │   ├── pages/
│   │   │   ├── LandingPage/
│   │   │   │   ├── LandingPage.tsx           (Main landing showcase)
│   │   │   │   ├── LandingPage.module.scss   (Animation-rich styles)
│   │   │   │   └── index.ts
│   │   │   ├── AboutPage/
│   │   │   │   ├── AboutPage.tsx             (About section)
│   │   │   │   ├── AboutPage.module.scss
│   │   │   │   └── index.ts
│   │   │   ├── PortfolioPage/
│   │   │   │   ├── PortfolioPage.tsx         (Projects showcase)
│   │   │   │   ├── PortfolioPage.module.scss
│   │   │   │   └── index.ts
│   │   │   ├── ContactPage/
│   │   │   │   ├── ContactPage.tsx           (Contact form)
│   │   │   │   ├── ContactPage.module.scss
│   │   │   │   └── index.ts
│   │   │   └── index.ts                      (Pages exports)
│   │   └── index.ts                          (Components exports)
│   ├── hooks/
│   │   └── index.ts                          (useNavigation, useScrollPosition)
│   ├── types/
│   │   └── index.ts                          (PageType, Project, Skill, etc.)
│   ├── utils/
│   │   └── index.ts                          (classNames, formatDate, debounce, etc.)
│   ├── App.tsx                               (Main app with navigation logic)
│   ├── App.module.scss                       (App-level styles)
│   ├── main.tsx                              (React entry point)
│   ├── index.css                             (Global styles)
│   ├── assets/
│   └── (other existing files)
├── package.json                              (Updated with sass dependency)
├── eslint.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── index.html
├── README.md
└── PROJECT_STRUCTURE.md                      (This documentation)
```

## Quick Reference

### Component Structure Pattern
Each component follows this pattern:

**Component File (Component.tsx):**
```tsx
import { FC } from 'react';
import styles from './Component.module.scss';

const Component: FC = () => {
  return (
    <div className={styles.container}>
      {/* Content */}
    </div>
  );
};

export default Component;
```

**Styles File (Component.module.scss):**
```scss
.container {
  // Your styles and animations here
}

.element {
  // Scoped to this component only
  
  &:hover {
    // Animations and transitions
  }
}
```

**Export File (index.ts):**
```ts
export { default as Component } from './Component';
```

### Navigation Flow
```
App.tsx (State: currentPage)
  ↓
Header (Navigation Controls)
  ↓
Pages (LandingPage, AboutPage, PortfolioPage, ContactPage)
  ↓
Footer (Social Links & Info)
```

## Key Features

✅ **Modular SCSS**: Each component has its own scoped styles
✅ **TypeScript Ready**: Full type definitions and safety
✅ **Clear Navigation**: SPA navigation with Header controls
✅ **Clean Imports**: Index files for simplified imports
✅ **Scalable**: Easy to add new pages and components
✅ **Modern Stack**: React 19 + TypeScript + Vite + SCSS Modules

## Next Steps

1. **Run npm install** to install dependencies (including sass)
2. **Run npm run dev** to start development
3. **Customize styles** in .module.scss files with your animations and colors
4. **Update content** in component .tsx files
5. **Add images** to the assets folder
6. **Build with npm run build** when ready for production

All files are ready to use with proper module SCSS references. Just add your CSS animations and styling! 🚀
