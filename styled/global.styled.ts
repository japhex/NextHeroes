import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	* {
		font-family: 'Roboto';
	}
	
	@font-face {
    font-family: 'comic_panelsregular';
    src: url('fonts/comic_panels-webfont.woff2') format('woff2'),
         url('fonts/comic_panels-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}
	
	body {
		background-color: #ab504b;
		background-image: url("https://www.transparenttextures.com/patterns/dark-brick-wall.png");
	}
	
	ul {
		margin: 0;
		padding: 0;
	}
`
