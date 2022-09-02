import { createGlobalStyle } from 'styled-components';
import { colors } from '../shared/colors';

export const GlobalStyles = createGlobalStyle`

main{
    display: flex;
    gap: 35px;
    flex-direction: column;
    margin: 25px;
}
body, html{
    background-color: ${colors.neutral.black};
    margin: 0;
}
ol, ul {
	list-style: none;
}

`;
