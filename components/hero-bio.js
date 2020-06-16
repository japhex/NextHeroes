import StatRow from "./stat-row"
import {StatContainer} from "../styled/stat-row.styled"

export default function HeroBio({ bio, name }) {
	return (
			<>
				<StatContainer align="left" stack>
					<StatRow stat="Full name:" value={bio['full-name']} />
					<StatRow stat="Birthplace:" value={bio['place-of-birth']} />
					<StatRow stat="1st Appearance:" value={bio['first-appearance']} />
				</StatContainer>
			</>
	)
}