import React from 'react'
import StatRow from './stat-row'
import { StatContainer } from 'styled/stat-row.styled'

interface HeroOccupationProps {
  occupation: string
}

const HeroOccupation: React.FC<HeroOccupationProps> = ({ occupation }) => (
  <StatContainer align="left" stack>
    <StatRow basic stat="Occupation:" value={occupation} />
  </StatContainer>
)

export default HeroOccupation
