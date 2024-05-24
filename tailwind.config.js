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
        'naver-button': ['26px', { lineHeight: '140%', letterSpacing: '-2px' }],
        'login-need': ['42px', { lineHeight: '140%', letterSpacing: '-2px' }],
        'login-simple': ['24px', { lineHeight: '140%', letterSpacing: '-2px' }],
        'mypage-tap': ['26px', { lineHeight: '32.85px' }],
        'mypage-title': ['60px', { lineHeight: '75.78px' }],
        'modal-button': ['26px', { lineHeight: '26px' }],
        headline2: ['52px', { lineHeight: '52px' }],
        'main-button': ['26px', { lineHeight: '35.62px' }],
        subtitle1: ['36px', { lineHeight: '37.89px' }],
        'text-button': ['24px', { lineHeight: '24px' }],
      },
      width: {
        972: '972px',
        709: '709px',
        464: '464px',
        452: '452px',
        390: '390px',
        384: '384px',
        300: '300px',
        260: '260px',
        242: '242px',
        191: '191px',
        160: '160px',
      },
      maxWidth: {
        242: '242px',
      },
      maxHeight: {
        36: '36px',
      },
      height: {
        611: '611px',
        433: '433px',
        94: '94px',
        90: '90px',
        80: '80px',
        52: '52px',
        36: '36px',
      },
      margin: {
        75: '75px',
        10: '5px',
      },
      padding: {
        13: '13px',
        18: '18px',
        23: '23px',
        24: '24px',
        27: '27px',
        32: '32px',
        49: '49px',
        52: '52px',
        65: '65px',
        67: '67px',
        103: '103px',
      },
      backgroundImage: {
        'home-bg': "url('./assets/images/bg_main.svg')",
        'myinfo-bg': "url('./assets/images/bg_myinfo.png')",
        'album-bg': "url('./assets/images/bg_album.png')",
        'home-button':
          'linear-gradient(92deg, rgba(255, 255, 255, 0.30) 0.48%, rgba(255, 255, 255, 0.60) 99.34%)',
        'modal-bg':
          'linear-gradient(178deg, white 0%, rgba(255, 255, 255, 0.96) 100%)',
        'login-bg': "url('./assets/images/bg_login.png')",
        'mainbutton-bg':
          'linear-gradient(162deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.60) 100%)',
        'matching-bg': "url('./assets/images/bg_matching.png')",
        'matching-none-bg': "url('./assets/images/bg_matching_none.png')",
      },
      boxShadow: {
        'home-button': '0px 0px 30px 4px rgba(219, 212, 223, 0.50)',
        'home-button-hover': '0px 0px 30px 6px rgba(0, 0, 0, 0.50)',
        'login-modal': '0px 0px 100px 12px rgba(0, 0, 0, 0.40)',
        'perfume-card': '0px 0px 30px 8px rgba(0, 0, 0, 0.06)',
        'album-card': '0px 0px 40px rgba(88.69, 0, 143.05, 0.10)',
        'info-card': '0px 0px 40px 1px rgba(88.69, 0, 143.05, 0.10)',
        'modal-border': '0px 0px 50px rgba(0, 0, 0, 0.15)',
        'mypage-tap': '0px 0px 20px rgba(0, 0, 0, 0.05)',
      },
      colors: {
        white06: 'rgba(0, 0, 0, 0.06)',
        white20: 'rgba(0, 0, 0, 0.20)',
        gray60: 'rgba(0, 0, 0, 0.60)',
        gray40: 'rgba(0, 0, 0, 0.40)',
        gray80: 'rgba(0, 0, 0, 0.80)',
        gray176: 'rgba(176, 176, 176, 1)',
        gray150: 'rgba(150, 150, 150, 1)',
        gray229: 'rgba(229, 229, 229, 1)',
        'album-card': 'rgba(255, 255, 255, 0.70)',
        'main-button': '0px 0px 20px rgba(0, 0, 0, 0.10)',
        'mainbutton-default': 'rgba(59,59,59)',
        'naver-default': '#00C73C',
        'header-default': 'rgba(92, 92, 92, 1)',
      },
      borderRadius: {
        15: '15px',
        30: '30px',
      },
      rotate: {
        180: '180deg',
      },
    },
  },
  plugins: [],
};
