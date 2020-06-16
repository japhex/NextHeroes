import StatValue from 'components/stat-value'
import { Stat } from 'styled/stat-row.styled'

export default function StatRow({ stat, value, icon }) {
	return (
			(value !== 'null' && value !== '-') && (
			<Stat icon={icon}>
				<span>{stat}</span>
				<span>
					{icon ?
							<StatValue value={value} />
					:
							value
					}
				</span>
			</Stat>
		)
	)
}