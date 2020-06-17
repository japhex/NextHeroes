import { useContext } from 'react'
import isEmpty from 'lodash/isEmpty'
import ChooseHero from 'components/choose-hero'
import { HeroContext } from 'contexts/heroContext'
import { BattleContainer, BattleVsContainer, HeroBox } from 'styled/battle.styled'
import HeroCard from "../components/hero-card"
import BattleVs from "../components/battle-vs"

export default function Battle() {
	const { hero1, hero2 } = useContext(HeroContext)

	return (
		<>
			<BattleContainer>
				<HeroBox>
					{!isEmpty(hero1) ?
							<>
								<HeroCard chosenHero={hero1} />
							</>
							:
							<ChooseHero hero={1} />
					}
				</HeroBox>
				<BattleVsContainer>
					<BattleVs />
				</BattleVsContainer>
				<HeroBox>
					{!isEmpty(hero2) ?
							<>
								<HeroCard chosenHero={hero2} />
							</>
							:
							<ChooseHero hero={2} />
					}
				</HeroBox>
			</BattleContainer>
		</>
	)
}