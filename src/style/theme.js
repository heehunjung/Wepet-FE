import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'SEBANG-Gothic', sans-serif`, // 폰트 이름이 제대로 닫히도록 수정
    body: `'SEBANG-Gothic', sans-serif`,    // 폴백으로 sans-serif 추가
  },
});

export default theme;
