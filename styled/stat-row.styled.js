import styled from 'styled-components'

export const StatContainer = styled.div`
	width: 100%;
	display: ${props => props.multi ? 'flex' : 'block'};
	margin-top: ${props => props.multi ? '20px' : '0'};
	
	div {
		flex-direction: ${props => props.stack ? 'column' : 'none'};
		margin-bottom: ${props => props.stack ? '10px' : '0'};
	
		span {
			text-align: ${props => props.align === 'left' ? 'left' : 'center'};
		}
	}
`

export const Stat = styled.div`
	display: flex;
	padding: ${props => props.icon ? '0' : '5px 0'};
	font-size: 13px;
	width: 100%;
	background: ${props => props.icon ? 'rgba(255,255,255,0.5)' : 'none'};
	margin: ${props => props.icon ? '5px 0' : '0'};
	border-radius: 35px;
	
	> span {
		display: ${props => props.icon ? 'flex' : 'block'};
		flex: 1;
		padding: ${props => props.icon ? '5px' : '0'};
		align-items: center;
	}
	
	> span:first-child {
		font-weight: bold;
		padding-left: ${props => props.icon ? '20px' : '0'};
	}
	
	> span:last-child {
		justify-content: flex-end;
	}
`

export const StatImage = styled.img`
	height: 40px;
`

export const Value = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 17px;
	border: 2px solid;
	height: 40px;
	width: 40px;
	color: ${props => props.valueColour};
	border-radius: 25px;
`