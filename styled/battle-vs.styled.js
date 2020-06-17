import styled from 'styled-components'
import { colorRed } from 'styled/global.styled'

export const Winner = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 3;
	width: 500px;
	height: 400px;
	background: url('/images/boom2.png');
	padding: 20px;
	animation: rotate-scale-up 0.65s linear both;
  
	@-webkit-keyframes rotate-scale-up {
	  0% {
	    -webkit-transform: scale(1) rotateZ(0);
	            transform: scale(1) rotateZ(0);
	  }
	  50% {
	    -webkit-transform: scale(2) rotateZ(180deg);
	            transform: scale(2) rotateZ(180deg);
	  }
	  100% {
	    -webkit-transform: scale(1) rotateZ(360deg);
	            transform: scale(1) rotateZ(360deg);
	  }
	}
	@keyframes rotate-scale-up {
	  0% {
	    -webkit-transform: scale(1) rotateZ(0);
	            transform: scale(1) rotateZ(0);
	  }
	  50% {
	    -webkit-transform: scale(2) rotateZ(180deg);
	            transform: scale(2) rotateZ(180deg);
	  }
	  100% {
	    -webkit-transform: scale(1) rotateZ(360deg);
	            transform: scale(1) rotateZ(360deg);
	  }
	}
`

export const WinnerCaption = styled.div`
	max-width: 286px;
	font-family: 'comic_panelsregular';
	text-transform: uppercase;
	text-align: center;
  font-size: 41px;
`
