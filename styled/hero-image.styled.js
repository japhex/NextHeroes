import styled from 'styled-components'

export const ImageContainer = styled.div`
	position: relative;
	height: 472px;
  width: 354px;
`

export const Image = styled.img`
	visibility: hidden;
	height: 472px;
	width: 354px;
	max-width: 100%;
	max-height: 100%;
	z-index: 1;
	-webkit-clip-path: polygon(2% 2%,98% 1%,98% 68%,0 72%);
	clip-path: polygon(2% 2%,98% 1%,98% 68%,0 72%);
`