import { Image, ImageContainer } from 'styled/hero-image.styled.js'
import { HeroName } from "styled/battle.styled"

export default function HeroImage({ name, image }) {
	const {url} = image

	const handleImageLoad = (e) => {
		e.target.style.visibility='visible'
	}

	const handleImageError = (e) => {
		e.target.onerror = null;
		e.target.style.visibility='hidden'
	}

	return (
		<ImageContainer>
			<HeroName>{name}</HeroName>
			<Image src={url} alt={name} onError={e => handleImageError(e)} onLoad={e => handleImageLoad(e)} />
			<noscript>
				<Image src={url} alt={name} />
			</noscript>
		</ImageContainer>
	)
}