import StatRow from "./stat-row"
import {StatContainer} from "../styled/stat-row.styled"

export default function HeroBio({ bio, name }) {
	return (
			<>
				<StatContainer align="left" stack>
					<StatRow basic stat="Alter egos:" value={bio['alter-egos']} />
					<StatRow basic stat="Birthplace:" value={bio['place-of-birth']} />
				</StatContainer>
			</>
	)
}