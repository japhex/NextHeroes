import StatRow from "./stat-row"
import { StatContainer } from 'styled/stat-row.styled'

export default function HeroStats({ stats }) {
	const { combat, durability, intelligence, power, speed, strength } = stats

	return (
		// <StatContainer multi>
		// 	<Details>
		// 		<StatRow icon stat={<StatImage src="/icons8-combat.png" alt="Combat" />} value={combat} />
		// 		<StatRow icon stat={<StatImage src="/icons8-durability.png" alt="Durability" />} value={durability} />
		// 		<StatRow icon stat={<StatImage src="/icons8-intelligence.png" alt="Intelligence" />} value={intelligence} />
		// 	</Details>
		// 	<Details>
		// 		<StatRow icon stat={<StatImage src="/icons8-power.png" alt="Power" />} value={power} />
		// 		<StatRow icon stat={<StatImage src="/icons8-speed.png" alt="Speed" />} value={speed} />
		// 		<StatRow icon stat={<StatImage src="/icons8-strength.png" alt="Strength" />} value={strength} />
		// 	</Details>
		// </StatContainer>
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