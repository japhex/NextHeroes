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
			padding-bottom: ${props => props.stack ? '5px' : '0'};
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
	
	span:last-child {
		width: ${props => props.icon ? '32px' : 'auto'};
		font-size: ${props => props.icon ? '20px' : '14px'};
	}
`

export const StatImage = styled.img`
	height: 40px;
`