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
        'home-button': ['24px', { lineHeight: '137%', letterSpacing: '-0.48px' },],
        'home-sub': ['28px', { lineHeight: '146%', letterSpacing: '-0.56px' },],
        'naver-button': ['26px', { lineHeight: '140%', letterSpacing: '-2px' }],
        'main': ['26px', { lineHeight: '140%', letterSpacing: '-2px' }],
        'result-title': ['52px', { lineHeight: '126.3%', letterSpacing: '-1.04px' }],
        'result-subtitle': ['32px', { lineHeight: 'normal', letterSpacing: '-0.64px' }],
        'login-need': ['42px', { lineHeight: '140%', letterSpacing: '-2px' }],
        'login-simple': ['24px', { lineHeight: '140%', letterSpacing: '-2px' }],
        'mypage-tap': ['26px', { lineHeight: '32.85px' }],
        'mypage-title': ['60px', { lineHeight: '75.78px' }],
        'modal-button': ['26px', { lineHeight: '26px' }],
        headline2: ['52px', { lineHeight: '52px' }],
        'main-button': ['26px', { lineHeight: '35.62px' }],
        subtitle1: ['36px', { lineHeight: '37.89px' }],
        'save-button': ['24px', {lineHeight: '126.3%', letterSpacing: '-0.48px', fontWeight: '500px' }],
        28: '28px',
        20: '20px',
        'text-button': ['24px', { lineHeight: '24px' }],
        'sub-brand': ['22px', { lineHeight: '126.3%', letterSpacing: '-0.44px' }],
        'sub-name': ['28px', { lineHeight: '126.3%', letterSpacing: '-0.56px' }],
        'sub-content': ['20px', { lineHeight: '136.3%',}],
        'sub-eName': ['22px', { lineHeight: '126.3%'}],
      },
      width: {
        1920: '1920px',
        1225: '1225px',
        1180: '1180px',
        972: '972px',
        710: '710px',
        578: '578px',
        464: '464px',
        452: '452px',
        390: '390px',
        384: '384px',
        360: '360px',
        360: '350px',
        300: '300px',
        290: '390px',
        260: '260px',
        242: '242px',
        191: '191px',
        160: '160px',
      },
      maxWidth: {
        242: '242px',
        346: '346px',
      },
      maxHeight: {
        36: '36px',
      },
      height: {
        1600: '1600px',
        611: '611px',
        532: '532px',
        432: '432px',
        360: '360px',
        360: '350px',
        290: '390px',
        94: '94px',
        90: '90px',
        80: '80px',
        52: '52px',
        36: '36px',
      },
      margin: {
        17: '17px',
        52: '52px',
        70: '70px',
        75: '75px',
        85: '85px',
        92: '92px',
        100: '100px',
        103: '103px',
        144: '144px',
        187: '187px',
        225: '225px',
      },
      padding: {
        13: '13px',
        18: '18px',
        23: '23px',
        24: '24px',
        27: '27px',
        26: '26px',
        58: '58px',
        32: '32px',
        49: '49px',
        52: '52px',
        65: '65px',
        67: '67px',
        103: '103px',
      },
      backgroundImage: {
        'home-bg': "url('./assets/images/bg_home.png')",
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
        'subPerfume-div': '0px 0px 30px 0px rgba(0, 0, 0, 0.10)',
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
        'result-subtitle': 'rgba(0, 0, 0, 0.80)',
        'album-card': 'rgba(255, 255, 255, 0.70)',
        'main-button': '0px 0px 20px rgba(0, 0, 0, 0.10)',
        'mainbutton-default': 'rgba(59,59,59)',
        'naver-default': '#00C73C',
        'header-default': 'rgba(92, 92, 92, 1)',
        caption1: '#5C5C5C',
        subtitle1: '#3B3B3B',
        body1: '#969696',
      },
      borderRadius: {
        15: '15px',
        20: '20px',
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
