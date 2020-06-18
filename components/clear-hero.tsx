import React, { useContext } from 'react'
import { ClearHeroTrigger } from 'styled/clear-hero.styled'
import { HeroContext } from 'contexts/heroContext'

interface ClearHeroProps {
  hero: number
}

const ClearHero: React.FC<ClearHeroProps> = ({ hero }) => {
  const { storeHero1, storeHero2 } = useContext(HeroContext)

  const handleClearHeroClick = () => {
    if (hero === 1) {
      storeHero1({})
    } else {
      storeHero2({})
    }
  }

  return (
    <ClearHeroTrigger onClick={() => handleClearHeroClick()}>
      NEW HERO X
    </ClearHeroTrigger>
  )
}

export default ClearHero
