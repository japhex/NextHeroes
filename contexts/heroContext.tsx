import React, { useState, createContext, useEffect } from 'react'
import isEmpty from 'lodash/isEmpty'
import { IHero } from 'interfaces/hero'

interface HeroContextProps {
  hero1: IHero | {}
  storeHero1: (hero: IHero) => void
  hero2: IHero | {}
  storeHero2: (hero: IHero) => void
  showWinner: boolean
  storeShowWinner: (show: boolean) => void
}

interface HeroProviderProps {
  children: any
}

export const HeroContext = createContext({} as HeroContextProps)

export const HeroProvider: React.FC<HeroProviderProps> = ({ children }) => {
  const [hero1, setHero1] = useState({})
  const [hero2, setHero2] = useState({})
  const [showWinner, setShowWinner] = useState(false)

  const storeHero1 = (hero: IHero) => setHero1(hero)
  const storeHero2 = (hero: IHero) => setHero2(hero)
  const storeShowWinner = (show: boolean) => setShowWinner(show)

  useEffect(() => {
    if (!isEmpty(hero1) && !isEmpty(hero2)) {
      setShowWinner(true)
    }
  }, [hero1, hero2, setShowWinner])

  const contextProps = {
    hero1,
    storeHero1,
    hero2,
    storeHero2,
    showWinner,
    storeShowWinner
  }

  return (
    <HeroContext.Provider value={contextProps}>{children}</HeroContext.Provider>
  )
}
