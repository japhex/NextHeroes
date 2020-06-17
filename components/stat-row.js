import StatValue from 'components/stat-value'
import { Stat, StatBasic, StatBackground, SecondStatBackground } from 'styled/stat-row.styled'

export default function StatRow({ stat, value, icon, basic }) {
	let truncatedValue = value
	if (value === 'null' || value === '-') return null

	if (value.length > 75) {
		truncatedValue = `${value.substring(0, 75)}...`
	}

	return (
		basic ?
			<StatBasic icon={icon}>
				<span>{stat}</span>
				<span>{truncatedValue}</span>
			</StatBasic>
		:
				<>
					<Stat icon={icon}>
						<span>
							{stat}
						</span>
						<StatBackground />
						<SecondStatBackground />
						<span>
							{icon ?
									<StatValue value={value} />
							:
									value
							}
						</span>
					</Stat>
				</>
	)
}