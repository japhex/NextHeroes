import styled from 'styled-components'

export const ImageContainer = styled.div`
	position: relative;
`

export const Image = styled.img`
	display: none;
	max-width: 100%;
	max-height: 100%;
	z-index: 1;
	-webkit-clip-path: polygon(2% 2%,98% 1%,98% 68%,0 72%);
	clip-path: polygon(2% 2%,98% 1%,98% 68%,0 72%);
`