import { useState, createContext } from 'react';

export const HeroContext = createContext()

export const HeroProvider = ({ children }) => {
	const [ hero1, setHero1 ] = useState({});
	const [ hero2, setHero2 ] = useState({});

	const storeHero1 = hero => {
		setHero1({
			hero
		})
	}

	const storeHero2 = hero => {
		setHero2({
			hero
		})
	}

	const contextProps = {
		hero1, storeHero1, hero2, storeHero2
	}

	return (
		<HeroContext.Provider value={contextProps}>
			{children}
		</HeroContext.Provider>
	)
}