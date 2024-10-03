/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // 必須在 content 陣列中定位，確保相對應檔案能夠解讀 tailwind 的樣式
    './**/*.html', // 包含專案中的所有 html 文件 (排除 node_modules)
    '!./node_modules/**/*', // 排除 node_modules
    './src/**/*.{js,css,scss}' // 包含 src 資料夾下的所有 JS, CSS, SCSS 文件
  ],
  theme: {
    screen: {
      'none': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    container: {
      padding:{
        none:'1.25rem',
        sm:'2.5rem',
        md:'2.5rem',
        lg:'3.75rem',
        xl:'3.75rem',
        '2xl':'3.75rem',
        '3xl':'3.75rem',
      },
    },
    extend: {},
  },
  plugins: [],
}

