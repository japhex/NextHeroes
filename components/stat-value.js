import { Value } from 'styled/stat-row.styled'

export default function StatRow({ value}) {
	let valueColour = '#35B535'

	if (value < 30) {
		valueColour = '#C60404'
	} else if (value < 70) {
		valueColour = '#FF8B00'
	}

	return (
			<Value valueColour={valueColour}>{value}</Value>
	)
}