/**
 * H: Heading
 * HE: Heading English
 * P: Paragraph
 * PE: Paragraph English
 * L: Light
 * R: Regular
 * M: Medium
 * B: Bold
 */
const typo = {
  H50L: 'font-family: Noto Sans KR; font-size: 16px; font-weight: 300; line-height: 25px; letter-spacing: -1px;',
  H75L: 'font-family: Noto Sans KR; font-size: 18px; font-weight: 300; line-height: 28px; letter-spacing: -1px;',
  H50LM:
    'font-family: Noto Sans KR; font-size: 16px; font-weight: 500; line-height: 25px; letter-spacing: -1px;',
  H100L:
    'font-family: Noto Sans KR; font-size: 20px; font-weight: 300; line-height: 31px; letter-spacing: -1px;',
  H500L:
    'font-family: Noto Sans KR; font-size: 36px; font-weight: 300; line-height: 45px; letter-spacing: -1px;',
  P100R:
    'font-family: Noto Sans KR; font-size: 12px; font-weight: 400; line-height: 17px; letter-spacing: -1px;',
  P50B: 'font-family: Noto Sans KR; font-size: 10px; font-weight: 700; line-height: 16px; letter-spacing: -1px;',
  H800L:
    'font-family: Noto Sans KR; font-size: 58px; font-weight: 300; line-height: 68px; letter-spacing: -1px;',
  P50R: 'font-family: Noto Sans KR; font-size: 10px; font-weight: 400; line-height: 16px; letter-spacing: -1px;',
  H50R: 'font-family: Noto Sans KR; font-size: 16px; font-weight: 400; line-height: 25px; letter-spacing: -1px;',
  H600M:
    'font-family: Noto Sans KR; font-size: 40px; font-weight: 500; line-height: 52px; letter-spacing: -1px;',
  H75R: 'font-family: Noto Sans KR; font-size: 18px; font-weight: 500; line-height: 28px; letter-spacing: -1px;',
  H200R:
    'font-family: Noto Sans KR; font-size: 24px; font-weight: 400; line-height: 37px; letter-spacing: -1px;',
  H400R:
    'font-family: Noto Sans KR; font-size: 32px; font-weight: 400; line-height: 45px; letter-spacing: -1px;',
  H75B: 'font-family: Noto Sans KR; font-size: 18px; font-weight: 700; line-height: 28px; letter-spacing: -1px;',
  P50M: 'font-family: Noto Sans KR; font-size: 10px; font-weight: 500; line-height: 16px; letter-spacing: -1px;',
  H600L:
    'font-family: Noto Sans KR; font-size: 40px; font-weight: 300; line-height: 52px; letter-spacing: -1px;',
  H700M:
    'font-family: Noto Sans KR; font-size: 47px; font-weight: 500; line-height: 58px; letter-spacing: -1px;',
  P100M:
    'font-family: Noto Sans KR; font-size: 12px; font-weight: 500; line-height: 17px; letter-spacing: -1px;',
  H100M:
    'font-family: Noto Sans KR; font-size: 20px; font-weight: 500; line-height: 31px; letter-spacing: -1px;',
  H400B:
    'font-family: Noto Sans KR; font-size: 32px; font-weight: 700; line-height: 45px; letter-spacing: -1px;',
  H600B:
    'font-family: Noto Sans KR; font-size: 40px; font-weight: 700; line-height: 52px; letter-spacing: -1px;',
  H500M:
    'font-family: Noto Sans KR; font-size: 36px; font-weight: 500; line-height: 45px; letter-spacing: -1px;',
  H300L:
    'font-family: Noto Sans KR; font-size: 28px; font-weight: 300; line-height: 43px; letter-spacing: -1px;',
  H200M:
    'font-family: Noto Sans KR; font-size: 24px; font-weight: 500; line-height: 37px; letter-spacing: -1px;',
  H800R:
    'font-family: Noto Sans KR; font-size: 58px; font-weight: 400; line-height: 68px; letter-spacing: -1px;',
  H300M:
    'font-family: Noto Sans KR; font-size: 28px; font-weight: 500; line-height: 43px; letter-spacing: -1px;',
  P200R:
    'font-family: Noto Sans KR; font-size: 14px; font-weight: 400; line-height: 22px; letter-spacing: -1px;',
  P200B:
    'font-family: Noto Sans KR; font-size: 14px; font-weight: 700; line-height: 22px; letter-spacing: -1px;',
  H800M:
    'font-family: Noto Sans KR; font-size: 58px; font-weight: 500; line-height: 68px; letter-spacing: -1px;',
  P200M:
    'font-family: Noto Sans KR; font-size: 14px; font-weight: 500; line-height: 22px; letter-spacing: -1px;',
  H400L:
    'font-family: Noto Sans KR; font-size: 32px; font-weight: 300; line-height: 45px; letter-spacing: -1px;',
  P100B:
    'font-family: Noto Sans KR; font-size: 12px; font-weight: 700; line-height: 17px; letter-spacing: -1px;',
  H75M: 'font-family: Noto Sans KR; font-size: 18px; font-weight: 500; line-height: 28px; letter-spacing: -1px;',
  H200L:
    'font-family: Noto Sans KR; font-size: 24px; font-weight: 300; line-height: 37px; letter-spacing: -1px;',
  H800B:
    'font-family: Noto Sans KR; font-size: 58px; font-weight: 700; line-height: 68px; letter-spacing: -1px;',
  H500B:
    'font-family: Noto Sans KR; font-size: 36px; font-weight: 700; line-height: 45px; letter-spacing: -1px;',
  H700B:
    'font-family: Noto Sans KR; font-size: 47px; font-weight: 700; line-height: 58px; letter-spacing: -1px;',
  H600R:
    'font-family: Noto Sans KR; font-size: 40px; font-weight: 400; line-height: 52px; letter-spacing: -1px;',
  H50B: 'font-family: Noto Sans KR; font-size: 16px; font-weight: 700; line-height: 25px; letter-spacing: -1px;',
  P50L: 'font-family: Noto Sans KR; font-size: 10px; font-weight: 300; line-height: 16px; letter-spacing: -1px;',
  H200B:
    'font-family: Noto Sans KR; font-size: 24px; font-weight: 700; line-height: 37px; letter-spacing: -1px;',
  H500R:
    'font-family: Noto Sans KR; font-size: 36px; font-weight: 400; line-height: 45px; letter-spacing: -1px;',
  P200L:
    'font-family: Noto Sans KR; font-size: 14px; font-weight: 300; line-height: 22px; letter-spacing: -1px;',
  H100R:
    'font-family: Noto Sans KR; font-size: 20px; font-weight: 400; line-height: 31px; letter-spacing: -1px;',
  H300B:
    'font-family: Noto Sans KR; font-size: 28px; font-weight: 700; line-height: 43px; letter-spacing: -1px;',
  H700L:
    'font-family: Noto Sans KR; font-size: 47px; font-weight: 300; line-height: 58px; letter-spacing: -1px;',
  P100L:
    'font-family: Noto Sans KR; font-size: 12px; font-weight: 300; line-height: 17px; letter-spacing: -1px;',
  H400M:
    'font-family: Noto Sans KR; font-size: 32px; font-weight: 500; line-height: 45px; letter-spacing: -1px;',
  H700R:
    'font-family: Noto Sans KR; font-size: 47px; font-weight: 400; line-height: 58px; letter-spacing: -1px;',
  H100B:
    'font-family: Noto Sans KR; font-size: 20px; font-weight: 700; line-height: 31px; letter-spacing: -1px;',
  H300R:
    'font-family: Noto Sans KR; font-size: 28px; font-weight: 400; line-height: 43px; letter-spacing: -1px;',

  HE800:
    'font-family: Roboto; font-size: 60px; font-weight: 400; line-height: 70px; letter-spacing: 0px;',
  HE700:
    'font-family: Roboto; font-size: 49px; font-weight: 400; line-height: 60px; letter-spacing: 0px;',
  HE300:
    'font-family: Roboto; font-size: 30px; font-weight: 400; line-height: 45px; letter-spacing: 0px;',
  HE75B:
    'font-family: Roboto; font-size: 20px; font-weight: 700; line-height: 30px; letter-spacing: 0px;',
  HE200:
    'font-family: Roboto; font-size: 26px; font-weight: 400; line-height: 39px; letter-spacing: 0px;',
  PE100:
    'font-family: Roboto; font-size: 14px; font-weight: 400; line-height: 21px; letter-spacing: 0px;',
  PE200:
    'font-family: Roboto; font-size: 16px; font-weight: 400; line-height: 24px; letter-spacing: 0px;',
  HE600B:
    'font-family: Roboto; font-size: 42px; font-weight: 700; line-height: 54px; letter-spacing: 0px;',
  HE75: 'font-family: Roboto; font-size: 20px; font-weight: 400; line-height: 30px; letter-spacing: 0px;',
  HE300B:
    'font-family: Roboto; font-size: 30px; font-weight: 700; line-height: 45px; letter-spacing: 0px;',
  PE50: 'font-family: Roboto; font-size: 12px; font-weight: 400; line-height: 18px; letter-spacing: 0px;',
  HE400B:
    'font-family: Roboto; font-size: 34px; font-weight: 700; line-height: 47px; letter-spacing: 0px;',
  HE50B:
    'font-family: Roboto; font-size: 18px; font-weight: 700; line-height: 27px; letter-spacing: 0px;',
  HE200B:
    'font-family: Roboto; font-size: 26px; font-weight: 700; line-height: 39px; letter-spacing: 0px;',
  HE500B:
    'font-family: Roboto; font-size: 38px; font-weight: 700; line-height: 47px; letter-spacing: 0px;',
  HE600:
    'font-family: Roboto; font-size: 42px; font-weight: 400; line-height: 54px; letter-spacing: 0px;',
  HE400:
    'font-family: Roboto; font-size: 34px; font-weight: 400; line-height: 47px; letter-spacing: 0px;',
  HE700B:
    'font-family: Roboto; font-size: 49px; font-weight: 700; line-height: 60px; letter-spacing: 0px;',
  HE50: 'font-family: Roboto; font-size: 18px; font-weight: 400; line-height: 27px; letter-spacing: 0px;',
  PE100B:
    'font-family: Roboto; font-size: 14px; font-weight: 700; line-height: 21px; letter-spacing: 0px;',
  HE100B:
    'font-family: Roboto; font-size: 22px; font-weight: 700; line-height: 33px; letter-spacing: 0px;',
  HE500:
    'font-family: Roboto; font-size: 38px; font-weight: 400; line-height: 47px; letter-spacing: 0px;',
  PE50B:
    'font-family: Roboto; font-size: 12px; font-weight: 700; line-height: 18px; letter-spacing: 0px;',
  PE200B:
    'font-family: Roboto; font-size: 16px; font-weight: 700; line-height: 24px; letter-spacing: 0px;',
  HE100:
    'font-family: Roboto; font-size: 22px; font-weight: 400; line-height: 33px; letter-spacing: 0px;',
  HE800B:
    'font-family: Roboto; font-size: 60px; font-weight: 700; line-height: 70px; letter-spacing: 0px;',
}

const color = {
  G100: '#000000',
  G10D: '#FDFDFD',
  G20D: '#F7F8F9',
  G30D: '#BDC1C7',
  G40D: '#8E959A',
  G50D: '#50565B',
  G60D: '#393E43',
  G70D: '#293033',
  G80D: '#1C2123',
  G90D: '#171A1A',
  G0: '#FFFFFF',
  G10: '#FEFEFE',
  G20: '#FDFDFD',
  G30: '#F6F7F8',
  G40: '#E6E8EB',
  G50: '#BDC1C7',
  G60: '#596470',
  G70: '#303D49',
  G80: '#242C34',
  G90: '#161D24',

  PP100D: '#F3E7FD',
  PP200D: '#DFC3FA',
  PP300D: '#CA9AF8',
  PP400D: '#B46DF6',
  PP500D: '#A245F3',
  PP600D: '#8E00EF',
  PP100: '#F4E6FF',
  PP200: '#E3BFFF',
  PP300: '#D194FF',
  PP400: '#BD67FF',
  PP500: '#AC40FF',
  PP600: '#9A06FF',

  PB100D: '#DCEFF4',
  PB200D: '#BDEBFA',
  PB300D: '#8EDEF8',
  PB400D: '#43CBF6',
  PB500D: '#19BFF3',
  PB600D: '#00B9F3',
  PB100: '#E8F9FF',
  PB200: '#BFF0FF',
  PB300: '#95E5FF',
  PB400: '#50D5FF',
  PB500: '#20C9FF',
  PB600: '#01C2FF',
}

const theme = {
  dark: {
    typo,
    color: {
      ...color,
      background: '#1e1e1e',
    },
  },
  light: {
    typo,
    color: {
      ...color,
      background: '#1e1e1e',
    },
  },
}

export default theme
