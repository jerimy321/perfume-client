/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
      fontSize: {
        'home-div': ['78px', { lineHeight: '126.3%', letterSpacing: '-1.56px' }],
      },
      width: {
        '972': '972px',
      },
      height: {
        '611': '611px',
      },
      backgroundImage: {
        'home-bg': "url('./assets/images/bg_main.svg')"
      },
    },
  },
  plugins: [],
};
