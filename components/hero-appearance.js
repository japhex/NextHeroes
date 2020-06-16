import StatRow from "./stat-row"
import {StatContainer} from "../styled/stat-row.styled"

export default function HeroAppearance({ appearance }) {
	const { gender, height, race } = appearance

	return (
		<StatContainer align="left" stack>
			<StatRow stat="Gender:" value={gender} />
			<StatRow stat="Race:" value={race} />
			<StatRow stat="Height:" value={height[0]} />
		</StatContainer>
	)
}