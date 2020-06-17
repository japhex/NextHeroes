import { Image, ImageContainer } from 'styled/hero-image.styled.js'
import HeroNames from "./hero-names"

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
			<HeroNames name={name} fullName={fullName} />
			<Image src={url} alt={name} onError={e => handleImageError(e)} onLoad={e => handleImageLoad(e)} />
			<noscript>
				<Image src={url} alt={name} />
			</noscript>
		</ImageContainer>
	)
}