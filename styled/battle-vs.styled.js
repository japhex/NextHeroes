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
`

export const WinnerCaption = styled.div`
	max-width: 286px;
	font-family: 'comic_panelsregular';
	text-transform: uppercase;
	text-align: center;
  font-size: 45px;
`
