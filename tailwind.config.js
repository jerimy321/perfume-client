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
        'main': ['26px', { lineHeight: '140%', letterSpacing: '-2px' }],
        'result-title': ['52px', { lineHeight: '126.3%', letterSpacing: '-1.04px' }],
        'login-need': ['42px', { lineHeight: '140%', letterSpacing: '-2px' }],
        'login-simple': ['24px', { lineHeight: '140%', letterSpacing: '-2px' }],
        'mypage-tap': ['26px', { lineHeight: '32.85px' }],
        'mypage-title': ['60px', { lineHeight: '75.78px' }],
        'modal-button': ['26px', { lineHeight: '26px' }],
        'save-button': ['24px', {lineHeight: '126.3%', letterSpacing: '-0.48px', fontWeight: '500px' }],
        headline2: ['52px', { lineHeight: '65.68px' }],
        'main-button': ['26px', { lineHeight: '35.62px' }],
        subtitle1: ['36px', { lineHeight: '36px' }],
        28: '28px',
      },
      width: {
        1920: '1920px',
        1225: '1225px',
        1180: '1180px',
        972: '972px',
        709: '709px',
        578: '578px',
        464: '464px',
        452: '452px',
        384: '384px',
        300: '300px',
        242: '242px',
        191: '191px',
      },
      maxWidth: {
        242: '242px',
      },
      maxHeight: {
        36: '36px',
      },
      height: {
        1600: '1600px',
        611: '611px',
        532: '532px',
        433: '433px',
        94: '94px',
        90: '90px',
        36: '36px',
      },
      margin: {
        52: '52px',
        75: '75px',
        85: '85px',
        100: '100px',
        103: '103px',
        187: '187px',
      },
      padding: {
        27: '27px',
        26: '26px',
        58: '58px',
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
        'result-bg': "url('./assets/images/bg_result.png')",
        'main-1-bg': "url('./assets/images/bg_main_1.svg')",
        'main-2-bg': "url('./assets/images/bg_main_2.svg')",
        'main-3-bg': "url('./assets/images/bg_main_3.svg')",
        'main-4-bg': "url('./assets/images/bg_main_4.svg')",
        'main-5-bg': "url('./assets/images/bg_main_5.svg')",
        'main-6-bg': "url('./assets/images/bg_main_6.svg')",
        'matching-bg': "url('./assets/images/bg_matching.png')",
        'matching-none-bg': "url('./assets/images/bg_matching_none.png')",
      },
      backgroundColor: {
        'white-70': 'rgba(255, 255, 255, 0.70)',
        'white-50': 'rgba(255, 255, 255, 0.50)',
      },
      boxShadow: {
        'home-button': '0px 0px 30px 4px rgba(219, 212, 223, 0.50)',
        'home-button-hover': '0px 0px 30px 6px rgba(0, 0, 0, 0.05)',
        'login-modal': '0px 0px 100px 12px rgba(0, 0, 0, 0.40)',
        'perfume-card': '0px 0px 30px 8px rgba(0, 0, 0, 0.06)',
        'album-card': '0px 0px 40px rgba(88.69, 0, 143.05, 0.10)',
        'info-card': '0px 0px 40px 1px rgba(88.69, 0, 143.05, 0.10)',
        'modal-border': '0px 0px 50px rgba(0, 0, 0, 0.15)',
        'mypage-tap': '0px 0px 20px rgba(0, 0, 0, 0.05)',
        'main-div': '0px 0px 20px rgba(0, 0, 0, 0.05)',
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
        caption1: '#5C5C5C',
        subtitle1: '#3B3B3B',
      },
      borderRadius: {
        15: '15px',
        30: '30px',
        100: '100px',
      },
      rotate: {
        180: '180deg',
      },
      letterSpacing: {
        caption1: '-0.6px',
      },
    },
  },
  plugins: [],
};
