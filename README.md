# Next.js Dashboard Project

A modern dashboard application built with Next.js, featuring dynamic components, responsive design, and a clean user interface.

## Features

- 📊 Interactive Chart
- 🎨 Theme Switcher (Light/Dark mode with next-themes)
- 📱 Responsive Design with Tailwind CSS
- 🧩 Modern UI Components with shadcn/ui
- 📈 Financial Analytics Dashboard
- 📋 Interactive Data Tables

## Project Structure

```
app/
├── cards/
│   ├── chat.tsx              # Chat component
│   ├── FinancialWelbeign.tsx # Financial wellbeing card
│   ├── keyinsight.tsx        # Key insights component
│   ├── prospectLeads.tsx     # Prospect leads management
│   ├── steps.tsx             # Steps component
│   └── totalFran.jsx         # Total franchise overview
├── dashboard/
│   └── page.tsx              # Dashboard page
├── table/
│   └── table.jsx            # Data table component
├── components/
│   └── sidebar/             # Sidebar navigation
├── layout.tsx               # Root layout
└── page.tsx                # Home page
```

## Key Components

- **Sidebar:** Navigation and theme switching functionality
- **Chart Component:** Visual data representation
- **Financial Wellbeing:** Financial metrics and analysis
- **Key Insights:** Important business metrics
- **Prospect Leads:** Lead management interface
- **Data Table:** Structured data display

## Getting Started

First, run the development server:

````bash
npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learned Next.js](https://youtu.be/ZVnjOPwW4ZA) - an interactive Next.js tutorial.

## Customization

### Themes

The project uses `next-themes` for theme management. To modify themes, adjust the theme provider settings in your components:

```tsx
// Example theme usage
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  // Implementation
};
````

### UI Components

All UI components are built with shadcn/ui, allowing for easy customization and extension. To add new components:

```bash
npx shadcn-ui@latest add [component-name]
```

## Deployment

This project can be deployed on Vercel or any other Next.js-compatible hosting platform.

For Vercel deployment:

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy automatically with Git integration

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for UI components
- [Next.js](https://nextjs.org/) for the framework
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [next-themes](https://github.com/pacocoursey/next-themes) for theme management
- [React-Icons](https://react-icons.github.io/react-icons/) for Icons
- [Figma_images](https://www.figma.com/design/Z8s2h3aiFdLBJeUMHoWKWI/frontend-weframetech?node-id=1-5937&t=RwOtQwUX52ILtVvS-0) for images, color codes and measurements.
