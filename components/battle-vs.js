import { useContext } from 'react'
import { HeroContext } from 'contexts/heroContext'
import { compareStats } from 'middleware/utils'
import isEmpty from "lodash/isEmpty"
import { Winner, WinnerCaption } from 'styled/battle-vs.styled'

export default function BattleVs() {
	const { hero1, hero2 } = useContext(HeroContext)

	if (isEmpty(hero1) || isEmpty(hero2)) return (
			<h1>VS.</h1>
	)

	const winner = compareStats(hero1, hero2)

	return (
		<Winner>
			<WinnerCaption>
				{winner}<br /> Wins!
			</WinnerCaption>
		</Winner>
	)
}