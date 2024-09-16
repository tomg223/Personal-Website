/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      cursor: {
        custom: 'url(/tailwindcss-and-nextjs-portfolio-starter 3/images/cursor-2.png), auto',
        hoverCustom: 'url(/tailwindcss-and-nextjs-portfolio-starter 3/images/cursor.png), pointer',
      },
    },
  },
  plugins: [],
}

