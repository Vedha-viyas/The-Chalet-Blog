# The Chalet Blog - Modern SPA Portfolio

A modern, animation-rich single-page application (SPA) blog portfolio built with React, TypeScript, and SCSS modules.

## Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── Header/           # Navigation header component
│   │   │   ├── Header.tsx
│   │   │   ├── Header.module.scss
│   │   │   └── index.ts
│   │   ├── Footer/           # Footer component
│   │   │   ├── Footer.tsx
│   │   │   ├── Footer.module.scss
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── pages/
│   │   ├── LandingPage/      # Main landing page with animations
│   │   │   ├── LandingPage.tsx
│   │   │   ├── LandingPage.module.scss
│   │   │   └── index.ts
│   │   ├── AboutPage/        # About page
│   │   │   ├── AboutPage.tsx
│   │   │   ├── AboutPage.module.scss
│   │   │   └── index.ts
│   │   ├── PortfolioPage/    # Portfolio/projects page
│   │   │   ├── PortfolioPage.tsx
│   │   │   ├── PortfolioPage.module.scss
│   │   │   └── index.ts
│   │   ├── ContactPage/      # Contact form page
│   │   │   ├── ContactPage.tsx
│   │   │   ├── ContactPage.module.scss
│   │   │   └── index.ts
│   │   └── index.ts
│   └── index.ts
├── hooks/
│   └── index.ts              # Custom React hooks (useNavigation, useScrollPosition)
├── types/
│   └── index.ts              # TypeScript type definitions
├── utils/
│   └── index.ts              # Utility functions (classNames, formatDate, etc.)
├── App.tsx                   # Main app component with routing logic
├── App.module.scss           # App-level styles
├── main.tsx                  # React entry point
├── index.css                 # Global styles
└── assets/                   # Static assets (images, fonts, etc.)
```

## Features

- **Component-Based Architecture**: Reusable, modular components
- **SCSS Modules**: Scoped styling with CSS modules for each component
- **SPA Navigation**: Client-side routing without page reloads
- **TypeScript**: Full type safety for better development experience
- **Modern Setup**: Vite for fast development and building
- **Custom Hooks**: Reusable React hooks for common functionality
- **Utility Functions**: Helper functions for common tasks

## Getting Started

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Component Styling

Each component has three files:
- `ComponentName.tsx` - React component
- `ComponentName.module.scss` - SCSS module with reference classes
- `index.ts` - Export file for clean imports

### Adding Styles

Each `.module.scss` file contains reference classes. Add your CSS animations and styling:

```scss
// ComponentName.module.scss
.className {
  // Your styles here
  
  &:hover {
    // Hover state animations
  }
}
```

Then use them in your component:
```tsx
import styles from './ComponentName.module.scss';

// Usage
<div className={styles.className}>Content</div>
```

## Adding New Pages

1. Create a new folder in `src/components/pages/`
2. Create three files:
   - `PageName.tsx`
   - `PageName.module.scss`
   - `index.ts`
3. Export from `src/components/pages/index.ts`
4. Add navigation logic in `App.tsx`

## Customization

### Global Styles
Edit `src/index.css` for global styling and CSS variables.

### Colors and Variables
Add CSS variables in `index.css`:
```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
}
```

### Navigation
Update navigation items in `Header.tsx` based on your page structure.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm lint` - Run ESLint

## Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **SCSS** - Styling with modules
- **Vite** - Build tool and dev server
- **ESLint** - Code quality

## Performance Tips

- Use CSS animations in SCSS modules for better performance
- Lazy load components if needed
- Optimize images in assets folder
- Keep bundle size small by tree-shaking unused code

## Browser Support

Supports all modern browsers with ES6+ support.

## License

MIT License - feel free to use this template for your projects

---

**Happy coding!** 🎉 Start by customizing the landing page with your animations and skills.
