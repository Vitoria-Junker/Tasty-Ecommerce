/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'small':'250px',
      'mob':'458px',
      'smll':'510px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'large':'1085px',
      'xl': '1280px',
      '2xl': '1536px',
      'custom':'870px',
      'med': '662px', // Novo breakpoint personalizado
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'easy': '#F0BB00',
        'brown':'#492a0e'    
        },
      textColor: {
        'brown':'#492a0e',
      }
    },
  },
  plugins: [],
}
