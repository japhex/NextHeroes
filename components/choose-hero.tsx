import React, { useState } from 'react'
import HeroSearch from 'components/hero-search'
import { Choose } from 'styled/choose-hero.styled'

interface ChooseHeroProps {
  hero: number
}

const ChooseHero: React.FC<ChooseHeroProps> = ({ hero }) => {
  const [showSearch, setShowSearch] = useState(false)

  return showSearch ? (
    <HeroSearch hero={hero} />
  ) : (
    <Choose href="#" onClick={() => setShowSearch(true)}>
      Click here to choose hero...
    </Choose>
  )
}

export default ChooseHero
