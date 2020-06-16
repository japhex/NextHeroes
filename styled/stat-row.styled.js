import styled from 'styled-components'

export const StatContainer = styled.div`
	width: 100%;
	padding: 10px;
	display: ${props => props.multi ? 'flex' : 'block'};
	
	div {
		flex-direction: ${props => props.stack ? 'column' : 'none'};
	
		span {
			text-align: ${props => props.align === 'left' ? 'left' : 'center'};
			flex-basis: ${props => props.stack ? 'none' : '100%'};
		}
	}
`

export const Stat = styled.div`
	display: flex;
	align-items: ${props => props.icon ? 'center' : 'left'};
	padding: 5px 0;
	font-size: 13px;
	
	span {
		display: ${props => props.icon ? 'flex' : 'block'};
		padding: ${props => props.icon ? '5px' : '0'};
		align-items: center;
		justify-content: center;
	}
	
	span:first-child {
		font-weight: bold;
	}
`

export const StatImage = styled.img`
	height: 40px;
`

export const Value = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 17px;
	border: 2px solid;
	height: 35px;
	width: 35px;
	color: ${props => props.valueColour};
	border-radius: 25px;
`