import { useState, createContext, useEffect } from 'react';
import isEmpty from "lodash/isEmpty"

export const HeroContext = createContext()

export const HeroProvider = ({ children }) => {
	const [ hero1, setHero1 ] = useState({});
	const [ hero2, setHero2 ] = useState({});
	const [ showWinner, setShowWinner] = useState(false)

	const storeHero1 = hero => setHero1(hero)
	const storeHero2 = hero => setHero2(hero)
	const storeShowWinner = show => setShowWinner(show)

	useEffect(() => {
		if (!isEmpty(hero1) && !isEmpty(hero2)) {
			setShowWinner(true)
		}
	}, [hero1, hero2, setShowWinner])

	const contextProps = {
		hero1, storeHero1, hero2, storeHero2, showWinner, storeShowWinner
	}

	return (
		<HeroContext.Provider value={contextProps}>
			{children}
		</HeroContext.Provider>
	)
}