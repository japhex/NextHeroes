import StatRow from "./stat-row"
import {StatContainer} from "../styled/stat-row.styled"

export default function HeroBio({ occupation }) {
	return (
		<StatContainer align="left" stack>
			<StatRow basic stat="Occupation:" value={occupation} />
		</StatContainer>
	)
}