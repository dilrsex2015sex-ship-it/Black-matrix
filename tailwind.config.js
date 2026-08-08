/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        primary: {
          50: '#E6F2FF',
          100: '#CCE5FF',
          200: '#99CCFF',
          300: '#66B2FF',
          400: '#3399FF',
          500: '#0066CC', // Main
          600: '#0052A3',
          700: '#003D7A',
          800: '#002952',
          900: '#001429',
        },
        // Accent Colors
        accent: {
          50: '#E6FFFC',
          100: '#CCFFF9',
          200: '#99FFF3',
          300: '#66FFED',
          400: '#33FFE7',
          500: '#00D084', // Main Green
          600: '#00A366',
          700: '#007A4D',
          800: '#005233',
          900: '#002919',
        },
        // Neon Accent
        neon: {
          cyan: '#00FFFF',
          magenta: '#FF00FF',
          lime: '#00FF00',
        },
        // Background Colors
        bg: {
          dark: '#0F0F15',
          'dark-secondary': '#191B22',
          'dark-card': 'rgba(255, 255, 255, 0.08)',
          light: '#F5F7FA',
          'light-secondary': '#FFFBFE',
        },
        // Text Colors
        text: {
          'dark-primary': '#1C1B1F',
          'dark-secondary': '#49454E',
          'light-primary': '#E0E0E0',
          'light-secondary': '#B0B0B0',
        },
        // Semantic Colors
        success: '#00D084',
        warning: '#FFB835',
        error: '#FF6B6B',
        info: '#0066CC',
      },
      fontSize: {
        // Custom font sizes
        'h1': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '1.3', fontWeight: '700' }],
        'h3': ['28px', { lineHeight: '1.4', fontWeight: '700' }],
        'h4': ['20px', { lineHeight: '1.4', fontWeight: '700' }],
        'h5': ['16px', { lineHeight: '1.5', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.4', fontWeight: '400' }],
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      spacing: {
        // 8px grid system
        0: '0',
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
      borderRadius: {
        'none': '0',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        'full': '9999px',
      },
      boxShadow: {
        // Neumorphism shadows
        'neumorph-sm': `
          0 2px 4px rgba(0, 0, 0, 0.1),
          inset 1px 1px 2px rgba(255, 255, 255, 0.1)
        `,
        'neumorph': `
          0 8px 16px rgba(0, 0, 0, 0.2),
          inset 1px 1px 2px rgba(255, 255, 255, 0.2),
          inset -1px -1px 2px rgba(0, 0, 0, 0.2)
        `,
        'neumorph-lg': `
          0 12px 24px rgba(0, 0, 0, 0.25),
          inset 2px 2px 4px rgba(255, 255, 255, 0.2),
          inset -2px -2px 4px rgba(0, 0, 0, 0.2)
        `,
        // Glassmorphism shadows
        'glass-sm': `
          0 4px 30px rgba(0, 0, 0, 0.1)
        `,
        'glass': `
          0 8px 32px rgba(0, 0, 0, 0.15)
        `,
        'glass-lg': `
          0 12px 40px rgba(0, 0, 0, 0.2)
        `,
        // Standard shadows
        'sm': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'lg': '0 8px 24px rgba(0, 0, 0, 0.2)',
        'xl': '0 12px 32px rgba(0, 0, 0, 0.25)',
      },
      backdropFilter: {
        'glass': 'blur(16px)',
        'glass-heavy': 'blur(20px)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
        'slide-in': 'slide-in 0.3s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'slide-in': {
          'from': { 
            opacity: '0', 
            transform: 'translateY(20px)' 
          },
          'to': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        'glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 255, 255, 0)' 
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(0, 255, 255, 0.5)' 
          },
        },
      },
      transitionDuration: {
        'fast': '150ms',
        'base': '300ms',
        'slow': '500ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'smoothIn': 'cubic-bezier(0.42, 0, 1, 1)',
        'smoothOut': 'cubic-bezier(0, 0, 0.58, 1)',
      },
      screens: {
        'xs': '320px',
        'sm': '480px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
        '2xl': '1920px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
