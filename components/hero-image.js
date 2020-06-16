import { Image } from 'styled/hero-image.styled.js'

export default function HeroImage({ name, image }) {
	const {url} = image

	return (
		<Image src={url} alt={name} />
	)
}