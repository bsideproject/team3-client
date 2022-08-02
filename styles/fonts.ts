import { css } from 'styled-components'

const fonts = css`
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 100;
    src: url(/fonts/NotoSansKr/NotoSansKR-Thin.woff2) format('woff2'),
      url(/fonts/NotoSansKr/NotoSansKR-Thin.woff) format('woff'),
      url(/fonts/NotoSansKr/NotoSansKR-Thin.otf) format('opentype');
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 300;
    src: url(/fonts/NotoSansKr/NotoSansKR-Light.woff2) format('woff2'),
      url(/fonts/NotoSansKr/NotoSansKR-Light.woff) format('woff'),
      url(/fonts/NotoSansKr/NotoSansKR-Light.otf) format('opentype');
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    src: url(/fonts/NotoSansKr/NotoSansKR-Regular.woff2) format('woff2'),
      url(/fonts/NotoSansKr/NotoSansKR-Regular.woff) format('woff'),
      url(/fonts/NotoSansKr/NotoSansKR-Regular.otf) format('opentype');
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    src: url(/fonts/NotoSansKr/NotoSansKR-Medium.woff2) format('woff2'),
      url(/fonts/NotoSansKr/NotoSansKR-Medium.woff) format('woff'),
      url(/fonts/NotoSansKr/NotoSansKR-Medium.otf) format('opentype');
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    src: url(/fonts/NotoSansKr/NotoSansKR-Bold.woff2) format('woff2'),
      url(/fonts/NotoSansKr/NotoSansKR-Bold.woff) format('woff'),
      url(/fonts/NotoSansKr/NotoSansKR-Bold.otf) format('opentype');
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 900;
    src: url(/fonts/NotoSansKr/NotoSansKR-Black.woff2) format('woff2'),
      url(/fonts/NotoSansKr/NotoSansKR-Black.woff) format('woff'),
      url(/fonts/NotoSansKr/NotoSansKR-Black.otf) format('opentype');
  }

  /* roboto-100italic - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 100;
    src: url('/fonts/roboto-v30-latin/roboto-v30-latin-100italic.eot'); /* IE9 Compat Modes */
    src: local(''),
      url('/fonts/roboto-v30-latin/roboto-v30-latin-100italic.eot?#iefix')
        format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/roboto-v30-latin/roboto-v30-latin-100italic.woff2')
        format('woff2'),
      /* Super Modern Browsers */
        url('/fonts/roboto-v30-latin/roboto-v30-latin-100italic.woff') format('woff'),
      /* Modern Browsers */
        url('/fonts/roboto-v30-latin/roboto-v30-latin-100italic.ttf')
        format('truetype'),
      /* Safari, Android, iOS */
        url('/fonts/roboto-v30-latin/roboto-v30-latin-100italic.svg#Roboto')
        format('svg'); /* Legacy iOS */
  }
  /* roboto-300 - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: url('/fonts/roboto-v30-latin/roboto-v30-latin-300.eot'); /* IE9 Compat Modes */
    src: local(''),
      url('/fonts/roboto-v30-latin/roboto-v30-latin-300.eot?#iefix')
        format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/roboto-v30-latin/roboto-v30-latin-300.woff2')
        format('woff2'),
      /* Super Modern Browsers */
        url('/fonts/roboto-v30-latin/roboto-v30-latin-300.woff') format('woff'),
      /* Modern Browsers */ url('/fonts/roboto-v30-latin/roboto-v30-latin-300.ttf')
        format('truetype'),
      /* Safari, Android, iOS */
        url('/fonts/roboto-v30-latin/roboto-v30-latin-300.svg#Roboto') format('svg'); /* Legacy iOS */
  }
  /* roboto-regular - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/roboto-v30-latin/roboto-v30-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
      url('/fonts/roboto-v30-latin/roboto-v30-latin-regular.eot?#iefix')
        format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/roboto-v30-latin/roboto-v30-latin-regular.woff2')
        format('woff2'),
      /* Super Modern Browsers */
        url('/fonts/roboto-v30-latin/roboto-v30-latin-regular.woff') format('woff'),
      /* Modern Browsers */
        url('/fonts/roboto-v30-latin/roboto-v30-latin-regular.ttf')
        format('truetype'),
      /* Safari, Android, iOS */
        url('/fonts/roboto-v30-latin/roboto-v30-latin-regular.svg#Roboto')
        format('svg'); /* Legacy iOS */
  }
  /* roboto-300italic - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 300;
    src: url('/fonts/roboto-v30-latin/roboto-v30-latin-300italic.eot'); /* IE9 Compat Modes */
    src: local(''),
      url('/fonts/roboto-v30-latin/roboto-v30-latin-300italic.eot?#iefix')
        format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/roboto-v30-latin/roboto-v30-latin-300italic.woff2')
        format('woff2'),
      /* Super Modern Browsers */
        url('/fonts/roboto-v30-latin/roboto-v30-latin-300italic.woff') format('woff'),
      /* Modern Browsers */
        url('/fonts/roboto-v30-latin/roboto-v30-latin-300italic.ttf')
        format('truetype'),
      /* Safari, Android, iOS */
        url('/fonts/roboto-v30-latin/roboto-v30-latin-300italic.svg#Roboto')
        format('svg'); /* Legacy iOS */
  }
  /* roboto-italic - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    src: url('/fonts/roboto-v30-latin/roboto-v30-latin-italic.eot'); /* IE9 Compat Modes */
    src: local(''),
      url('/fonts/roboto-v30-latin/roboto-v30-latin-italic.eot?#iefix')
        format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/roboto-v30-latin/roboto-v30-latin-italic.woff2')
        format('woff2'),
      /* Super Modern Browsers */
        url('/fonts/roboto-v30-latin/roboto-v30-latin-italic.woff') format('woff'),
      /* Modern Browsers */
        url('/fonts/roboto-v30-latin/roboto-v30-latin-italic.ttf') format('truetype'),
      /* Safari, Android, iOS */
        url('/fonts/roboto-v30-latin/roboto-v30-latin-italic.svg#Roboto')
        format('svg'); /* Legacy iOS */
  }
  /* roboto-500 - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/roboto-v30-latin/roboto-v30-latin-500.eot'); /* IE9 Compat Modes */
    src: local(''),
      url('/fonts/roboto-v30-latin/roboto-v30-latin-500.eot?#iefix')
        format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/roboto-v30-latin/roboto-v30-latin-500.woff2')
        format('woff2'),
      /* Super Modern Browsers */
        url('/fonts/roboto-v30-latin/roboto-v30-latin-500.woff') format('woff'),
      /* Modern Browsers */ url('/fonts/roboto-v30-latin/roboto-v30-latin-500.ttf')
        format('truetype'),
      /* Safari, Android, iOS */
        url('/fonts/roboto-v30-latin/roboto-v30-latin-500.svg#Roboto') format('svg'); /* Legacy iOS */
  }
  /* roboto-500italic - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 500;
    src: url('/fonts/roboto-v30-latin/roboto-v30-latin-500italic.eot'); /* IE9 Compat Modes */
    src: local(''),
      url('/fonts/roboto-v30-latin/roboto-v30-latin-500italic.eot?#iefix')
        format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/roboto-v30-latin/roboto-v30-latin-500italic.woff2')
        format('woff2'),
      /* Super Modern Browsers */
        url('/fonts/roboto-v30-latin/roboto-v30-latin-500italic.woff') format('woff'),
      /* Modern Browsers */
        url('/fonts/roboto-v30-latin/roboto-v30-latin-500italic.ttf')
        format('truetype'),
      /* Safari, Android, iOS */
        url('/fonts/roboto-v30-latin/roboto-v30-latin-500italic.svg#Roboto')
        format('svg'); /* Legacy iOS */
  }
  /* roboto-700 - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/roboto-v30-latin/roboto-v30-latin-700.eot'); /* IE9 Compat Modes */
    src: local(''),
      url('/fonts/roboto-v30-latin/roboto-v30-latin-700.eot?#iefix')
        format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/roboto-v30-latin/roboto-v30-latin-700.woff2')
        format('woff2'),
      /* Super Modern Browsers */
        url('/fonts/roboto-v30-latin/roboto-v30-latin-700.woff') format('woff'),
      /* Modern Browsers */ url('/fonts/roboto-v30-latin/roboto-v30-latin-700.ttf')
        format('truetype'),
      /* Safari, Android, iOS */
        url('/fonts/roboto-v30-latin/roboto-v30-latin-700.svg#Roboto') format('svg'); /* Legacy iOS */
  }
  /* roboto-700italic - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 700;
    src: url('/fonts/roboto-v30-latin/roboto-v30-latin-700italic.eot'); /* IE9 Compat Modes */
    src: local(''),
      url('/fonts/roboto-v30-latin/roboto-v30-latin-700italic.eot?#iefix')
        format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/roboto-v30-latin/roboto-v30-latin-700italic.woff2')
        format('woff2'),
      /* Super Modern Browsers */
        url('/fonts/roboto-v30-latin/roboto-v30-latin-700italic.woff') format('woff'),
      /* Modern Browsers */
        url('/fonts/roboto-v30-latin/roboto-v30-latin-700italic.ttf')
        format('truetype'),
      /* Safari, Android, iOS */
        url('/fonts/roboto-v30-latin/roboto-v30-latin-700italic.svg#Roboto')
        format('svg'); /* Legacy iOS */
  }
  /* roboto-900 - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    src: url('/fonts/roboto-v30-latin/roboto-v30-latin-900.eot'); /* IE9 Compat Modes */
    src: local(''),
      url('/fonts/roboto-v30-latin/roboto-v30-latin-900.eot?#iefix')
        format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/roboto-v30-latin/roboto-v30-latin-900.woff2')
        format('woff2'),
      /* Super Modern Browsers */
        url('/fonts/roboto-v30-latin/roboto-v30-latin-900.woff') format('woff'),
      /* Modern Browsers */ url('/fonts/roboto-v30-latin/roboto-v30-latin-900.ttf')
        format('truetype'),
      /* Safari, Android, iOS */
        url('/fonts/roboto-v30-latin/roboto-v30-latin-900.svg#Roboto') format('svg'); /* Legacy iOS */
  }
  /* roboto-900italic - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 900;
    src: url('/fonts/roboto-v30-latin/roboto-v30-latin-900italic.eot'); /* IE9 Compat Modes */
    src: local(''),
      url('/fonts/roboto-v30-latin/roboto-v30-latin-900italic.eot?#iefix')
        format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/roboto-v30-latin/roboto-v30-latin-900italic.woff2')
        format('woff2'),
      /* Super Modern Browsers */
        url('/fonts/roboto-v30-latin/roboto-v30-latin-900italic.woff') format('woff'),
      /* Modern Browsers */
        url('/fonts/roboto-v30-latin/roboto-v30-latin-900italic.ttf')
        format('truetype'),
      /* Safari, Android, iOS */
        url('/fonts/roboto-v30-latin/roboto-v30-latin-900italic.svg#Roboto')
        format('svg'); /* Legacy iOS */
  }
  /* roboto-100 - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 100;
    src: url('/fonts/roboto-v30-latin/roboto-v30-latin-100.eot'); /* IE9 Compat Modes */
    src: local(''),
      url('/fonts/roboto-v30-latin/roboto-v30-latin-100.eot?#iefix')
        format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/roboto-v30-latin/roboto-v30-latin-100.woff2')
        format('woff2'),
      /* Super Modern Browsers */
        url('/fonts/roboto-v30-latin/roboto-v30-latin-100.woff') format('woff'),
      /* Modern Browsers */ url('/fonts/roboto-v30-latin/roboto-v30-latin-100.ttf')
        format('truetype'),
      /* Safari, Android, iOS */
        url('/fonts/roboto-v30-latin/roboto-v30-latin-100.svg#Roboto') format('svg'); /* Legacy iOS */
  }
`

export default fonts
