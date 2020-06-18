import React from 'react'
import ClearHero from './clear-hero'
import HeroImage from './hero-image'
import HeroStats from './hero-stats'
import HeroBio from './hero-bio'
import HeroAppearance from './hero-appearance'
import HeroOccupation from './hero-occupation'
import {
  CardSection,
  StatsSectionLeft,
  StatsSectionRight,
} from 'styled/battle.styled'
import { IHero } from 'interfaces/hero'

interface HeroCardProps {
  hero: number
  chosenHero: IHero
}

const HeroCard: React.FC<HeroCardProps> = ({ hero, chosenHero }) => {
  const {
    name,
    image,
    powerstats,
    biography,
    appearance,
    work: { occupation },
  } = chosenHero

  return (
    <>
      <ClearHero hero={hero} />
      <CardSection>
        <HeroImage
          name={name}
          image={image}
          fullName={biography['full-name']}
        />
      </CardSection>
      <CardSection pullUp>
        <StatsSectionLeft>
          <HeroBio bio={biography} />
          <HeroAppearance appearance={appearance} />
          <HeroOccupation occupation={occupation} />
        </StatsSectionLeft>
        <StatsSectionRight>
          <HeroStats stats={powerstats} />
        </StatsSectionRight>
      </CardSection>
    </>
  )
}

export default HeroCard
