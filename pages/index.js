import { useContext } from 'react'
import isEmpty from 'lodash/isEmpty'
import ChooseHero from 'components/choose-hero'
import { HeroContext } from 'contexts/heroContext'
import {
  BattleContainer,
  BattleVsContainer,
  HeroBox,
} from 'styled/battle.styled'
import HeroCard from 'components/hero-card'
import BattleVs from 'components/battle-vs'

const Battle = () => {
  const { hero1, hero2 } = useContext(HeroContext)

  return (
    <>
      <BattleContainer>
        <HeroBox>
          {!isEmpty(hero1) ? (
            <>
              <HeroCard chosenHero={hero1} hero={1} />
            </>
          ) : (
            <ChooseHero hero={1} />
          )}
        </HeroBox>
        <BattleVsContainer>
          <BattleVs />
        </BattleVsContainer>
        <HeroBox opposite>
          {!isEmpty(hero2) ? (
            <>
              <HeroCard chosenHero={hero2} hero={2} />
            </>
          ) : (
            <ChooseHero hero={2} />
          )}
        </HeroBox>
      </BattleContainer>
    </>
  )
}

export default Battle
