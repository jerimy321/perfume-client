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
        'home-button': ['24px', { lineHeight: '137%', letterSpacing: '-0.48px' }],
        'naver-button': ['26px', { lineHeight: '140%', letterSpacing: '-2px' }],
        'login-need': ['42px', { lineHeight: '140%', letterSpacing: '-2px' }],
        'login-simple': ['24px', { lineHeight: '140%', letterSpacing: '-2px' }],
      },
      width: {
        '972': '972px',
        '709': '709px',
        '464': '464px',
        '452': '452px',
        '384': '384px',
        '242': '242px',
        '191': '191px',
      },
      maxWidth: {
        '242': '242px',
      },
      maxHeight: {
        '36': '36px',
      },
      height: {
        '611': '611px',
        '433': '433px',
        '94': '94px',
        '36': '36px',
      },
      margin: {
        '75': '75px',
      },
      padding: {
        '27': '27px',
        '67': '67px',
        '103': '103px',
      },
      backgroundImage: {
        'home-bg': "url('./assets/images/bg_main.svg')",
        'home-button': 'linear-gradient(92deg, rgba(255, 255, 255, 0.30) 0.48%, rgba(255, 255, 255, 0.60) 99.34%)',
        'login-bg': "url('./assets/images/bg_login.png')",
      },
      boxShadow: {
        'home-button':'0px 0px 30px 4px rgba(219, 212, 223, 0.50)',
        'home-button-hover':'0px 0px 30px 6px rgba(0, 0, 0, 0.50)',
        'login-modal': '0px 0px 100px 12px rgba(0, 0, 0, 0.40)',
      },
      borderRadius: {
        '15': '15px',
        '30': '30px',
      },
      borderColor: {
        'naver-default': '#00C73C',
      },
      colors: {
        'naver-default': '#00C73C',
      },
    },
  },
  plugins: [],
};
