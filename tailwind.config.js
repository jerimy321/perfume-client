/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
      fontSize: {
        'home-div': [
          '78px',
          { lineHeight: '126.3%', letterSpacing: '-1.56px' },
        ],
        'home-button': [
          '24px',
          { lineHeight: '137%', letterSpacing: '-0.48px' },
        ],
        'login-need': ['42px', { lineHeight: '140%', letterSpacing: '-2px' }],
        'login-simple': ['24px', { lineHeight: '140%', letterSpacing: '-2px' }],
        headline2: ['52px', { lineHeight: '65.68px' }],
        'main-button': ['26px', { lineHeight: '35.62px' }],
      },
      width: {
        972: '972px',
        709: '709px',
        464: '464px',
        384: '384px',
      },
      height: {
        611: '611px',
        433: '433px',
        90: '90px',
      },
      margin: {
        75: '75px',
      },
      padding: {
        67: '67px',
      },
      backgroundImage: {
        'home-bg': "url('./assets/images/bg_main.svg')",
        'home-button':
          'linear-gradient(92deg, rgba(255, 255, 255, 0.30) 0.48%, rgba(255, 255, 255, 0.60) 99.34%)',
        'login-bg': "url('./assets/images/bg_login.png')",
        'mainbutton-bg':
          'linear-gradient(124deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.60) 100%)',
      },
      boxShadow: {
        'home-button': '0px 0px 30px 4px rgba(219, 212, 223, 0.50)',
        'home-button-hover': '0px 0px 30px 6px rgba(0, 0, 0, 0.50)',
        'login-modal': '0px 0px 100px 12px rgba(0, 0, 0, 0.40)',
        'main-button': '0px 0px 20px rgba(0, 0, 0, 0.10)',
      },
      borderRadius: {
        30: '30px',
      },
      colors: {
        'mainbutton-default': 'rgba(59,59,59)',
      },
    },
  },
  plugins: [],
};
