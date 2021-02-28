// react-with-styles 를 모튼 컴포넌트에서 사용하기 위한 공용 파일
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet' // react-with-styles의 테마 관리자
import aphroditeInterface from 'react-with-styles-interface-aphrodite'; // 서버 출력을 도와주는 아프로디테 라이브러의 react-with-styles 버전
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
import Theme from './Theme';

ThemedStyleSheet.registerTheme(Theme); // Theme.js로 제작한 테마 파일 등록
ThemedStyleSheet.registerInterface(aphroditeInterface); // 아프로디테를 react-with-styles의 테마 관리자에 등록

export { css, withStyles, withStylesPropTypes, ThemedStyleSheet };
export default withStyles;
