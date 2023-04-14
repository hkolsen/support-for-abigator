import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    }
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
