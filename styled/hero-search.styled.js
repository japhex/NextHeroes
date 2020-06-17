import styled from 'styled-components'

export const Results = styled.ul`
	display: block;
	height: 100%;
	overflow-x: auto;
	box-sizing: border-box;
	width: 100%;
`

export const ResultName = styled.li`
		list-style-type: none;
		background: rgba(255,255,255,0.5);
		cursor: pointer;
		margin: 5px 0;
		padding: 10px;
		
		:hover {
			background: rgba(255,255,255,0.8);
		}
		
		a {
			display: block;
			width: 100%;
			height: 100%;
		}
`

export const ResultHeroName = styled.strong`
	display: block;
`

export const SearchContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	height: 100%;
	width: 100%;
	box-sizing: border-box;
`

export const Search = styled.input`
	font-size: 20px;
	outline: 0;
	padding: 8px 16px;
	line-height: 25px;
	border-radius: 6px;
	-webkit-appearance: none;
	color: #99A3BA;
	border: 1px solid #CDD9ED;
	transition: border .3s ease;
    
	&::placeholder {
		color: #CBD1DC;
	}
  
	&:focus {
		outline: none;
		border-color: #FFD300;
	}
`