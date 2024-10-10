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
    extend: {
      width:{
        '135':'540px',
      },
      height:{
        '66':'265px',
        '125':'500px',
        '200':'800px',
      },
      //字＆字型＆大小
      fontSize:{
        'h1':['3rem',{lineHeight:'1.4',letterSpacing:'0.5em'}],
        'h2':['2rem',{lineHeight:'1.4',letterSpacing:'0.5em'}],
        'h3':['1.75rem',{lineHeight:'1.3',letterSpacing:'0.1em'}],
        'h4':['1.5rem',{lineHeight:'1.3',letterSpacing:'0.1em'}],
        'h5':['1.25rem',{lineHeight:'1.3',letterSpacing:'0.1em'}],
        'h6':['1.125rem',{lineHeight:'1.3',letterSpacing:'0.1em'}],
        'p-1':['1rem',{lineHeight:'1.5',letterSpacing:'0.02em'}],
        'p-2':['0.875rem',{lineHeight:'1.5',letterSpacing:'0.02em'}],
        'p-3':['0.75rem',{lineHeight:'1.5',letterSpacing:'0.02em'}],
      },
      fontFamily:{
        'titleFont':[ "Noto Serif TC", "serif"], //思源宋體
        'bodyFont':["Noto Sans TC", 'system-ui'], //思源黑體
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-indent-1': {
          'text-indent': '1rem', // 自定義首行縮排
        },
      });
    },
  ],
}

