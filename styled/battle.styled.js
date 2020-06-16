import styled from 'styled-components'

export const BattleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
`

export const BattleVs = styled.span`
	display: block;
	padding: 0 40px;
	font-family: 'Metal Mania';
	font-size: 50px;
`

export const HeroBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px 5px 15px 15px; 
	min-height: 60vh;
	width: 30vw;
		background-color: #FFD300;
		background-image: url("https://www.transparenttextures.com/patterns/concrete-wall.png");
	box-shadow: -1px 0px 15px -6px rgba(0,0,0,0.75);
`

export const Details = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: ${props => props.withPadding ? '20px' : ''};
`

export const HeroName = styled.h1`
	font-family: 'Metal Mania';
`