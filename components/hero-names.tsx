import React from 'react'
import { HeroName, HeroRealName } from 'styled/battle.styled'

interface HeroNamesProps {
  name: string
  fullName: string
}

const HeroNames: React.FC<HeroNamesProps> = ({ name, fullName }) => (
  <>
    {fullName && <HeroRealName>{fullName} is . . .</HeroRealName>}
    <HeroName>{name}</HeroName>
  </>
)

export default HeroNames
