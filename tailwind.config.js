/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        'royal-blue': '#1A2B6D',
        'charcoal-black': '#101214',
        'emerald-green': '#1DB954',
        'brand-green': '#28a745',
        'golden-amber': '#FFB547',
        
        // Background Colors
        'cool-gray-light': '#F4F6F8',
        'white': '#FFFFFF',
        
        // Text Colors
        'dark-gray': '#333333',
        'cool-gray-dark': '#D9DEE2',
        
        // Legacy support (keeping old names)
        'deep-royal-blue': '#1A2B6D',
        'vibrant-emerald-green': '#1DB954',
        'warm-golden-amber': '#FFB547',
        
        // Border & UI
        'border-light': '#E5E7EB',
      },
      fontFamily: {
        heading: ['Poppins', 'Montserrat', 'sans-serif'],
        body: ['Inter', 'Source Sans Pro', 'sans-serif'],
        accent: ['Merriweather', 'serif'],
      },
      fontSize: {
        h1: ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        h2: ['2.25rem', { lineHeight: '1.3', fontWeight: '600' }],
        h3: ['1.75rem', { lineHeight: '1.3', fontWeight: '600' }],
        h4: ['1.375rem', { lineHeight: '1.4', fontWeight: '500' }],
        body: ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        small: ['0.875rem', { lineHeight: '1.5', fontWeight: '500' }],
        quote: ['1.125rem', { lineHeight: '1.6', fontStyle: 'italic', fontWeight: '400' }],
      },
      spacing: {
        xs: '0.25rem',
        s: '0.5rem',
        m: '1rem',
        l: '1.5rem',
        xl: '2rem',
        xxl: '3rem',
        'section-gap': '4rem',
      },
      screens: {
        mobile: '0px',
        tablet: '640px',
        desktop: '1024px',
        wide: '1440px',
      },
      maxWidth: {
        'content-bleed': '1200px',
      },
      boxShadow: {
        card: '0 20px 45px -20px rgba(26, 43, 109, 0.25)',
        glow: '0 0 25px rgba(255, 181, 71, 0.35)',
      },
      transitionTimingFunction: {
        brand: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
        'gradient-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 10s linear infinite',
        flip: 'flip 500ms ease-in-out',
        'gradient-shimmer': 'shimmer 2s linear infinite',
        'gradient-text': 'gradient-flow 3s ease-in-out infinite',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(26, 43, 109, 0.9) 0%, rgba(16, 18, 20, 0.95) 100%)',
        'hero-gradient-translucent': 'linear-gradient(135deg, rgba(26, 43, 109, 0.85) 0%, rgba(16, 18, 20, 0.9) 100%)',
        'text-gradient': 'linear-gradient(135deg, #1A2B6D 0%, #1DB954 50%, #FFB547 100%)',
        'progress-gradient': 'linear-gradient(90deg, #1DB954 0%, #FFB547 100%)',
        'footer-gradient': 'linear-gradient(135deg, rgba(26, 43, 109, 0.9) 0%, rgba(16, 18, 20, 0.95) 100%)',
        'footer-gradient-translucent': 'linear-gradient(135deg, rgba(26, 43, 109, 0.85) 0%, rgba(16, 18, 20, 0.9) 100%)',
        'button-gradient': 'linear-gradient(135deg, #1DB954 0%, #16A34A 100%)',
        'button-shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
        'legacy-hero-gradient': 'linear-gradient(135deg, rgba(26,43,109,1) 0%, rgba(16,18,20,0.85) 100%)',
        'legacy-hero-pattern': 'radial-gradient(circle at 20% 20%, rgba(255, 181, 71, 0.25) 0%, rgba(26, 43, 109, 0) 45%), radial-gradient(circle at 80% 0%, rgba(29, 185, 84, 0.2) 0%, rgba(16, 18, 20, 0) 35%)',
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1200px',
      },
    },
  },
  plugins: [],
}