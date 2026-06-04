# UI Migration Guide: Porting Consistency to a New Project

This guide provides step-by-step instructions on how to replicate the UI, styling, and general consistency (fonts, colors, components, and animations) of this developer portfolio into a fresh project. 

By following this guide, you will avoid copying unnecessary logic, backend code, or workspace configurations, while perfectly matching the design aesthetics.

## 1. Setup Your New Project
Start by creating a brand-new React project using Vite with TypeScript.
```bash
npm create vite@latest my-new-project -- --template react-ts
cd my-new-project
npm install
```

## 2. Install Required Dependencies
The original project relies on specific packages for animations, styling, and icons. Run the following command in your new project:

```bash
# Install UI libraries & utilities
npm install lucide-react react-icons framer-motion tw-animate-css next-themes clsx tailwind-merge

# Install Tailwind CSS v4 and its Vite plugin
npm install -D tailwindcss @tailwindcss/vite @tailwindcss/typography
```

### Update `vite.config.ts`
Enable the Tailwind Vite plugin in your new project:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": "/src", // (Make sure to configure paths in tsconfig.json as well)
    },
  },
})
```

## 3. Copy the Global CSS (The Secret Sauce)
The majority of the UI "feel" (colors, shadows, font, dark mode variables, and animations like `aurora-bg`) lives in a single file.

**Action:** Copy the entire contents of `artifacts/portfolio/src/index.css` from the original project and replace your new project's `src/index.css`.

What this file brings:
*   **Font:** Google Font 'Outfit'.
*   **Color Palette:** Precise HSL variables for the custom "New York" style UI.
*   **Animations:** Marquee effects, gradient-mesh (aurora), etc.
*   **Tailwind v4 Setup:** The `@theme inline` structure that Tailwind v4 uses instead of a `tailwind.config.js`.

## 4. Setup Shadcn UI and Base Components
The portfolio uses Shadcn UI components. Instead of re-installing them individually, you can safely copy the core folder to retain their custom look.

1.  **Copy the utility file:** Copy `artifacts/portfolio/src/lib/utils.ts` to `src/lib/utils.ts` in your new project.
2.  **Copy the UI components:** Copy the entire folder `artifacts/portfolio/src/components/ui` into `src/components/ui` in your new project.
3.  **Install Radix Primitives:** Since Shadcn UI relies on Radix under the hood, check your copied `ui` folder to see which components you grabbed, then install the corresponding radix packages, or simply copy the `@radix-ui/react-*` dependencies from `artifacts/portfolio/package.json` to your new `package.json` and run `npm install`.

## 5. Enable Dark/Light Mode
The portfolio handles dark mode using `next-themes`.

1.  **Copy the Theme Provider:** Copy `artifacts/portfolio/src/components/theme-provider.tsx` to your new project's `src/components/theme-provider.tsx`.
2.  **Wrap your App:** In your new project's `src/main.tsx` (or `App.tsx`), wrap the application:
    ```tsx
    import { ThemeProvider } from "./components/theme-provider"

    ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <App />
        </ThemeProvider>
      </React.StrictMode>,
    )
    ```

## 6. Porting Specific Layouts & Sections
Now that the foundation is identical, you can pick and choose which sections you want to reuse without pulling in the entire app.

Go to `artifacts/portfolio/src/components/` and copy whatever you need:
*   `navbar.tsx`
*   `hero.tsx`
*   `footer.tsx`
*   ...etc.

*Note: As you paste these components, ensure any missing imports (like specific icons from `react-icons`) are installed or removed if unnecessary.*

## Summary of Files to Copy:
- [x] `artifacts/portfolio/src/index.css` -> `src/index.css`
- [x] `artifacts/portfolio/src/lib/utils.ts` -> `src/lib/utils.ts`
- [x] `artifacts/portfolio/src/components/ui/*` -> `src/components/ui/*`
- [x] `artifacts/portfolio/src/components/theme-provider.tsx` -> `src/components/theme-provider.tsx`
- [x] Any individual section components you want (Hero, Navbar, etc.)
