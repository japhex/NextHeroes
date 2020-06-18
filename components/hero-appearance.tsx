import React from 'react'
import StatRow from './stat-row'
import { StatContainer } from 'styled/stat-row.styled'
import { IHeroAppearance } from 'interfaces/hero'

interface HeroAppearanceProps {
  appearance: IHeroAppearance
}

const HeroAppearance: React.FC<HeroAppearanceProps> = ({ appearance }) => {
  const { gender, height, race } = appearance

  return (
    <StatContainer align="left" stack>
      <StatRow basic stat="Gender:" value={gender} />
      <StatRow basic stat="Race:" value={race} />
      <StatRow basic stat="Height:" value={height[0]} />
    </StatContainer>
  )
}

export default HeroAppearance
