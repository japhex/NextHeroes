import { useState } from 'react'
import HeroSearch from 'components/hero-search'
import { Choose } from "../styled/choose-hero.styled"

export default function ChooseHero({ hero }) {
	const [ showSearch, setShowSearch ] = useState(false)

	return (
		showSearch ?
			<HeroSearch hero={hero} />
		:
			<Choose href="#" onClick={() => setShowSearch(true)}>
				+ choose hero
			</Choose>
	)
}