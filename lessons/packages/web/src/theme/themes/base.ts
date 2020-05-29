import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import breakpoints from '../patterns/breakpoints';
import colors from '../patterns/colors';
import fonts from '../patterns/fonts';
import shadows from '../patterns/shadows';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    transition-delay: 99999s;
  }

  a {
    text-decoration: none;

    &:focus,
    &:hover {
      text-decoration: none;
    }
  }

  .ant-layout,
  .ant-table-expanded-row {
    background-color: #f5f7fb !important;
  }
`;

export const theme = {
  // patterns
  breakpoints,
  colors,
  fonts,
  shadows,
  // components
};
