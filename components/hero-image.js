import { Image, ImageContainer } from 'styled/hero-image.styled.js'
import { HeroName, HeroRealName } from "styled/battle.styled"

export default function HeroImage({ name, image, fullName }) {
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
			<HeroRealName>{fullName} is . . .</HeroRealName>
			<HeroName>{name}</HeroName>
			<Image src={url} alt={name} onError={e => handleImageError(e)} onLoad={e => handleImageLoad(e)} />
			<noscript>
				<Image src={url} alt={name} />
			</noscript>
		</ImageContainer>
	)
}