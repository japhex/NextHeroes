import { Stat } from 'styled/stat-row.styled'

export default function StatRow({ stat, value, icon }) {
	return (
		<Stat icon={icon}>
			<span>{stat}</span>
			<span>{value}</span>
		</Stat>
	)
}