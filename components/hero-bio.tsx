import React from 'react'
import StatRow from './stat-row'
import { StatContainer } from 'styled/stat-row.styled'
import { IHeroBio } from 'interfaces/hero'

interface HeroBioProps {
  bio: IHeroBio
}

const HeroBio: React.FC<HeroBioProps> = ({ bio }) => (
  <StatContainer align="left" stack>
    <StatRow basic stat="Alter egos:" value={bio['alter-egos']} />
  </StatContainer>
)

export default HeroBio
