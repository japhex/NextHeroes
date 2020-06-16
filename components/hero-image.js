import { Image } from 'styled/hero-image.styled.js'

export default function HeroImage({ name, image }) {
	const {url} = image

	const handleImageLoad = (e) => {
		e.target.style.display='block'
	}

	const handleImageError = (e) => {
		e.target.onerror = null;
		e.target.style.display='none'
	}

	return (
		<>
			<Image src={url} alt={name} onError={e => handleImageError(e)} onLoad={e => handleImageLoad(e)} />
			<noscript>
				<Image src={url} alt={name} />
			</noscript>
		</>
	)
}