import React from 'react'
import StatRow from './stat-row'
import { StatContainer } from 'styled/stat-row.styled'
import { IHeroStats } from 'interfaces/hero'

interface HeroStatsProps {
  stats: IHeroStats
}

const HeroStats: React.FC<HeroStatsProps> = ({ stats }) => {
  const { combat, durability, intelligence, power, speed, strength } = stats

  return (
    <StatContainer>
      <StatRow icon stat="Combat" value={combat} />
      <StatRow icon stat="Durability" value={durability} />
      <StatRow icon stat="Intelligence" value={intelligence} />
      <StatRow icon stat="Power" value={power} />
      <StatRow icon stat="Speed" value={speed} />
      <StatRow icon stat="Strength" value={strength} />
    </StatContainer>
  )
}

export default HeroStats
