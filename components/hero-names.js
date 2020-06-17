import { HeroName, HeroRealName } from "styled/battle.styled"

export default function HeroNames({ name, fullName }) {
	return (
		<>
			{fullName &&
				<HeroRealName>{fullName} is . . .</HeroRealName>
			}
			<HeroName>{name}</HeroName>
		</>
	)
}