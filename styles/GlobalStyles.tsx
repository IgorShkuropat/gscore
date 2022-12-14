import { createGlobalStyle } from 'styled-components';
import { colors } from '../shared/colors';

export const GlobalStyles = createGlobalStyle`

body, html{
    background-color: ${colors.neutral.black};
    margin: 0;
}
*{
  margin: 0;
}
ol, ul {
	list-style: none;
}
a,
a.-webkit-any-link:active,
a.-webkit-any-link:focus, /* активная/посещенная ссылка */
a.-webkit-any-link:hover,  /* при наведении */
a.-webkit-any-link {
  text-decoration: none;
  color: inherit;
}
`;
