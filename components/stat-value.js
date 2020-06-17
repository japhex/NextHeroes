import { Value } from 'styled/stat-row.styled'

export default function StatRow({ value}) {
	return (
			<Value value={value}>{value}</Value>
	)
}