# Oluwaseun Olaniran Portfolio Website

A modern, responsive portfolio website built with React, showcasing creative writing, technical skills, and professional experience. Features dark/light mode toggle, functional contact form, and interactive writing samples.

## 🚀 Project Overview

This is a single-page application (SPA) portfolio website for Oluwaseun Olaniran, a creative and technical writer. The site demonstrates modern web development practices with a focus on user experience, accessibility, and responsive design.

### ✨ Key Features

- **Dark/Light Mode Toggle**: Persistent theme switching with localStorage and system preference detection
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Functional Contact Form**: EmailJS integration for direct messaging
- **Interactive Writing Samples**: Dedicated pages for reading full writing pieces
- **Smooth Animations**: CSS transitions and fade-in effects
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance Optimized**: Lazy loading and efficient React patterns

## 🛠️ Technology Stack

### Frontend Framework
- **React 18**: Component-based UI library with hooks
- **React Router**: Client-side routing for writing pages

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing with autoprefixer
- **Custom CSS**: Additional animations and global styles

### Functionality
- **EmailJS**: Client-side email sending service
- **React Icons**: Icon library for UI elements

### Development Tools
- **Create React App**: Build setup and development server
- **ESLint**: Code linting and quality assurance
- **Webpack**: Module bundling (via CRA)

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html              # HTML template with meta tags
│   ├── Oluwaseun_Olaniran_Professional_CV.pdf  # Resume download
│   ├── writings/
│   │   ├── narrative-story.md  # Writing sample content
│   │   ├── informational-article.md
│   │   └── reflective-essay.md
│   └── favicon.ico             # Site favicon
├── src/
│   ├── components/
│   │   ├── App.js              # Main application component
│   │   ├── Hero.js             # Landing section with intro
│   │   ├── About.js            # Personal background section
│   │   ├── Skills.js           # Technical skills showcase
│   │   ├── Experience.js       # Work experience timeline
│   │   ├── Projects.js         # Featured work/projects
│   │   ├── Awards.js           # Recognition and awards
│   │   ├── Contact.js          # Contact form and information
│   │   ├── Footer.js           # Site footer with links
│   │   ├── WritingPage.js      # Individual writing display
│   │   └── ThemeToggle.js      # Dark/light mode switcher
│   ├── index.js                # React application entry point
│   ├── index.css               # Global styles and utilities
│   └── App.css                 # Component-specific styles
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── README.md                   # This documentation file
```

## 📄 File Descriptions

### Core Application Files

#### `src/index.js`
- **Purpose**: Entry point for the React application
- **Functionality**:
  - Renders the root `<App />` component into the DOM element with id 'root'
  - Enables React's StrictMode for development warnings
  - Imports global CSS styles

#### `src/App.js`
- **Purpose**: Main application component and router setup
- **Functionality**:
  - Defines routes for home page (`/`) and writing pages (`/writing/:id`)
  - Renders the main portfolio layout with all sections
  - Includes the ThemeToggle component for global theme switching
  - Manages page-level layout and navigation

#### `public/index.html`
- **Purpose**: HTML template for the single-page application
- **Functionality**:
  - Provides the root div for React to mount
  - Contains meta tags for SEO (title, description, viewport)
  - Includes favicon and manifest references

### Component Files

#### `src/components/Hero.js`
- **Purpose**: Landing section with introduction and call-to-action
- **Functionality**:
  - Displays professional title and brief bio
  - Includes navigation links to different sections
  - Features fade-in animation on load
  - Responsive typography and spacing

#### `src/components/About.js`
- **Purpose**: Personal background and professional summary
- **Functionality**:
  - Presents personal story and career journey
  - Uses responsive grid layout for content
  - Includes profile image placeholder
  - Dark mode compatible styling

#### `src/components/Skills.js`
- **Purpose**: Technical and creative skills showcase
- **Functionality**:
  - Displays skills in categorized sections
  - Uses progress bars for proficiency visualization
  - Responsive grid layout for different screen sizes
  - Interactive hover effects

#### `src/components/Experience.js`
- **Purpose**: Professional work experience timeline
- **Functionality**:
  - Lists work history with company, dates, and achievements
  - Uses bullet points for key responsibilities
  - Responsive card-based layout
  - Theme-aware color schemes

#### `src/components/Projects.js`
- **Purpose**: Featured work and projects showcase
- **Functionality**:
  - Displays project cards with descriptions and links
  - Handles both internal (writing) and external (video) links
  - Responsive grid layout (1 column mobile, 2 columns desktop)
  - Includes project type badges and icons

#### `src/components/Awards.js`
- **Purpose**: Recognition and awards section
- **Functionality**:
  - Lists professional awards and recognitions
  - Displays award icons, titles, organizations, and years
  - Responsive vertical layout
  - Theme-compatible styling

#### `src/components/Contact.js`
- **Purpose**: Contact form and information display
- **Functionality**:
  - Functional contact form using EmailJS
  - Form validation and submission handling
  - Displays contact information (email, phone, location)
  - Includes CV download link
  - Loading states and success/error messages

#### `src/components/Footer.js`
- **Purpose**: Site footer with additional links
- **Functionality**:
  - Contains copyright information
  - Email contact link
  - Responsive layout and theming

#### `src/components/WritingPage.js`
- **Purpose**: Individual writing piece display page
- **Functionality**:
  - Dynamically loads writing content based on URL parameter
  - Renders markdown-style content with proper typography
  - Back navigation to main portfolio
  - Theme toggle integration
  - 404 handling for invalid writing IDs

#### `src/components/ThemeToggle.js`
- **Purpose**: Dark/light mode switching component
- **Functionality**:
  - Fixed-position button in top-right corner
  - Toggles between sun/moon icons
  - Persists theme preference in localStorage
  - Detects system color scheme preference
  - Applies/removes 'dark' class to document element

### Configuration Files

#### `package.json`
- **Purpose**: Project dependencies and scripts
- **Key Dependencies**:
  - `react`: UI framework
  - `react-dom`: DOM rendering
  - `react-router-dom`: Routing
  - `emailjs-com`: Email functionality
  - `tailwindcss`: Styling framework
  - `postcss`: CSS processing
- **Scripts**:
  - `start`: Development server
  - `build`: Production build
  - `test`: Run tests
  - `eject`: Eject from CRA

#### `tailwind.config.js`
- **Purpose**: Tailwind CSS configuration
- **Functionality**:
  - Defines custom color palette
  - Configures dark mode strategy ('class')
  - Sets up responsive breakpoints
  - Includes custom font families

#### `postcss.config.js`
- **Purpose**: PostCSS configuration for Tailwind
- **Functionality**:
  - Enables Tailwind CSS plugin
  - Includes autoprefixer for cross-browser compatibility

#### `src/index.css`
- **Purpose**: Global CSS styles and Tailwind imports
- **Functionality**:
  - Imports Tailwind base, components, and utilities
  - Sets serif font family globally
  - Defines background image with overlay
  - Includes custom component classes and animations
  - Ensures theme-independent background

### Content Files

#### `public/writings/*.md`
- **Purpose**: Writing sample content
- **Format**: Markdown-style text with headers and paragraphs
- **Usage**: Dynamically loaded and displayed in WritingPage component

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone or navigate to the project directory**
   ```bash
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🚀 Deployment

### Using Create React App Build
```bash
npm run build
```
This creates an optimized production build in the `build/` folder.

### Deployment Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **Traditional hosting**: Upload `build` folder contents

## 🔄 Maintenance & Updates

### Regular Maintenance Tasks

1. **Dependency Updates**
   ```bash
   npm audit
   npm update
   ```

2. **Content Updates**
   - Edit writing samples in `public/writings/`
   - Update personal information in components
   - Modify project links and descriptions

3. **EmailJS Configuration**
   - Monitor EmailJS dashboard for usage limits
   - Update service/template IDs if needed

### Performance Monitoring
- Use browser dev tools for performance analysis
- Monitor bundle size with `npm run build`
- Test responsiveness across devices

## 🐛 Troubleshooting

### Common Issues

1. **Contact form not working**
   - Verify EmailJS credentials in `Contact.js`
   - Check EmailJS dashboard for service status
   - Ensure template variables match form fields

2. **Theme toggle not persisting**
   - Clear localStorage: `localStorage.removeItem('theme')`
   - Check for JavaScript errors in console

3. **Build failures**
   - Clear node_modules: `rm -rf node_modules && npm install`
   - Check Node.js version compatibility

4. **Styling issues**
   - Verify Tailwind classes are correct
   - Check for CSS conflicts in dev tools

## 📈 Future Enhancements

### Potential Improvements
- Add blog/newsletter subscription
- Implement search functionality for writings
- Add project filtering/categorization
- Integrate analytics (Google Analytics)
- Add print-friendly CV styles
- Implement PWA features (service worker, offline support)
- Add animation libraries (Framer Motion) for enhanced UX

## 📞 Support

For technical issues or questions about the codebase:
- Check this README for configuration details
- Review component code for implementation examples
- Test in different browsers and devices
- Verify all dependencies are installed correctly

## 📝 License

This project is private and proprietary. All rights reserved.

---

**Last Updated**: 2025
**React Version**: 18.x
**Node Version**: 14.x+
