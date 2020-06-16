import styled from 'styled-components'

export const Results = styled.ul`
	display: block;
	height: 100%;
	overflow-x: auto;
	padding: 10px;
	margin-bottom: 20px;
	box-sizing: border-box;
	width: 100%;
	
	li {
		list-style-type: none;
		background: #eee;
		cursor: pointer;
		margin: 5px 0;
		padding: 5px;
		
		a {
			display: block;
			width: 100%;
			height: 100%;
		}
	}
`

export const SearchContainer = styled.div`
	
`

export const Search = styled.input`
	font-size: 20px;
	padding: 5px;
	margin-left: 20px;
`