
<!-- LAZYDOCS START -->
# Project Title portfolio

This React-based portfolio application, built with Vite, showcases a developer's projects and technical skills through a modern web interface. Key technologies include React 19 with Fast Refresh, Tailwind CSS for styling, Radix UI components for accessible interactions, and react-scroll for smooth navigation. The application features a responsive navbar with mobile menu toggle, dynamic theme switching (light/dark modes) using ThemeProvider, and an animated grain effect overlay implemented with canvas manipulation. Project highlights include a budget tracking UI replica and an NFT analytics tool displayed through interactive cards with image previews and technology tags. The stack leverages ESLint for code quality with React Hooks rules, Vite's development tooling for efficient bundling, and TypeScript support through DevDependencies, while maintaining responsive layouts across devices through Tailwind's utility-first approach.

## Tech Stack
- **Runtime:** Node.js
- **Dependencies:** @radix-ui/react-dropdown-menu
@radix-ui/react-separator
@radix-ui/react-slot
@tailwindcss/vite
class-variance-authority
clsx
lucide-react
react
react-dom
react-scroll
tailwind-merge
tailwindcss
- **Dev Tools:** @radix-ui/react-dropdown-menu
@radix-ui/react-separator
@radix-ui/react-slot
@tailwindcss/vite
class-variance-authority
clsx
lucide-react
react
react-dom
react-scroll
tailwind-merge
tailwindcss


## Installation
Clone the repo and install dependencies:

```bash
git clone <repo-url>
cd <project>
npm install   # or yarn / pnpm
```

## Usage
Run the development server:

```bash
npm run dev
```


## Project Structure
```
├── App.jsx
├── assets
│   └── images
│       ├── budget.png
│       └── nft-nexus.png
├── components
│   ├── GrainyBackground.jsx
│   ├── Home.jsx
│   ├── Navbar.jsx
│   ├── Project-card.jsx
│   ├── TechStack.jsx
│   ├── theme-provider.jsx
│   ├── toggle-mode.jsx
│   └── ui
│       ├── button.jsx
│       ├── card.jsx
│       ├── dropdown-menu.jsx
│       └── separator.jsx
├── contexts
├── index.css
├── lib
│   └── utils.js
├── main.jsx
└── sections
```

<!-- LAZYDOCS END -->
