import { useContext } from 'react'
import { ClearHeroTrigger } from "styled/clear-hero.styled"
import { HeroContext } from "../contexts/heroContext"

export default function ClearHero({ hero }) {
	const { storeHero1, storeHero2 } = useContext(HeroContext);

	const handleClearHeroClick = () => {
		if (hero === 1) {
			storeHero1({})
		} else {
			storeHero2({})
		}
	}

	return (
		<ClearHeroTrigger onClick={() => handleClearHeroClick()}>
			CLEAR HERO X
		</ClearHeroTrigger>
	)
}