# Quick Start Guide - The Chalet Blog

## Installation & Setup

```bash
# 1. Install dependencies (includes sass for SCSS support)
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:5173 in your browser
```

## Working with SCSS Modules

### Basic Component Setup

Each component follows this structure:

**Component.tsx:**
```tsx
import styles from './Component.module.scss';

const MyComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Title</h1>
    </div>
  );
};

export default MyComponent;
```

**Component.module.scss:**
```scss
.container {
  padding: 20px;
  background-color: #f5f5f5;
}

.title {
  font-size: 24px;
  color: #333;
}
```

### Adding Animations

```scss
// Component.module.scss

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animatedElement {
  animation: slideIn 0.5s ease-out;
}

.button {
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    background-color: #007bff;
  }
  
  &:active {
    transform: scale(0.95);
  }
}
```

### Using CSS Variables

**index.css (Global):**
```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --spacing-unit: 8px;
  --transition-speed: 0.3s;
}
```

**Component.module.scss:**
```scss
.button {
  background-color: var(--primary-color);
  padding: calc(var(--spacing-unit) * 2);
  transition: all var(--transition-speed) ease;
}
```

## Customizing the Landing Page

Edit `src/components/pages/LandingPage/LandingPage.module.scss`:

```scss
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.heroTitle {
  font-size: 3rem;
  font-weight: bold;
  color: white;
  animation: fadeInDown 1s ease-out;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Adding New Navigation

The Header component automatically handles navigation. To add a new page:

1. **Create new page folder:**
   ```
   src/components/pages/NewPage/
   ```

2. **Create the three files:**
   - `NewPage.tsx`
   - `NewPage.module.scss`
   - `index.ts`

3. **Export from pages index:**
   ```ts
   // src/components/pages/index.ts
   export { default as NewPage } from './NewPage';
   ```

4. **Add to App.tsx navigation:**
   ```tsx
   // In the renderPage() switch statement
   case 'newpage':
     return <NewPage />;
   ```

5. **Update Header navigation:**
   ```tsx
   <button onClick={() => onNavigate('newpage')}>New Page</button>
   ```

## Using Custom Hooks

### useNavigation Hook

```tsx
import { useNavigation } from '../hooks';

const MyComponent = () => {
  const { currentPage, navigate } = useNavigation('landing');
  
  return (
    <button onClick={() => navigate('about')}>
      Go to About
    </button>
  );
};
```

### useScrollPosition Hook

```tsx
import { useScrollPosition } from '../hooks';

const Header = () => {
  const { scrollPosition, handleScroll } = useScrollPosition();
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  
  return (
    <header className={scrollPosition > 50 ? styles.scrolled : ''}>
      <nav>Navigation</nav>
    </header>
  );
};
```

## Utility Functions

### classNames

Combine multiple class names conditionally:

```tsx
import { classNames } from '../utils';

<div className={classNames(
  styles.card,
  isActive && styles.active,
  size === 'large' && styles.large
)}>
  Content
</div>
```

### Other Utils

- `formatDate(date)` - Format dates
- `slugify(text)` - Convert text to URL-friendly slug
- `debounce(func, delay)` - Debounce function calls

## File Organization Tips

✅ **Keep components focused** - One main component per folder
✅ **Use index.ts exports** - Makes imports cleaner
✅ **Module SCSS scoping** - Styles are local to component
✅ **Reuse hooks** - Custom hooks in hooks folder
✅ **Global styles** - Only in index.css
✅ **Type safety** - Use TypeScript types from types/index.ts

## Common Patterns

### Form Handling

```tsx
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} />
    </form>
  );
};
```

### Conditional Rendering

```tsx
{currentPage === 'landing' && <LandingPage />}
```

### Lists with Keys

```tsx
{items.map((item) => (
  <div key={item.id} className={styles.item}>
    {item.name}
  </div>
))}
```

## Development Workflow

1. **Edit component .tsx file** - Update content and structure
2. **Update .module.scss** - Add styles and animations
3. **Run npm run dev** - See changes live (hot reload)
4. **Test navigation** - Click Header buttons to test routing
5. **Build when ready** - `npm run build` for production

## Troubleshooting

**Styles not applying?**
- Check class name spelling matches
- Ensure importing from `.module.scss` file
- Clear browser cache (Ctrl+Shift+Delete)

**Navigation not working?**
- Verify page name matches in switch statement
- Check component exports in index.ts files
- Ensure Header onClick matches navigation call

**Sass not compiling?**
- Run `npm install` again
- Delete node_modules and package-lock.json, then reinstall
- Check for syntax errors in .scss files

## Production Build

```bash
npm run build
# Creates optimized build in dist/ folder
npm run preview
# Preview production build locally
```

---

**Start building your beautiful portfolio now!** 🎨✨

For more advanced setups, check PROJECT_STRUCTURE.md and FOLDER_STRUCTURE.md
