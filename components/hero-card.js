import { Details, HeroName } from "../styled/battle.styled"
import HeroImage from "./hero-image"
import HeroStats from "./hero-stats"
import HeroBio from "./hero-bio"
import HeroAppearance from "./hero-appearance"
import HeroOccupation from "./hero-occupation"

export default function HeroCard({ chosenHero }) {
	const { hero: { name, image, powerstats, biography, appearance, work: { occupation }} } = chosenHero
	return (
		<>
			<Details>
				<HeroName>{name}</HeroName>
				<HeroImage name={name} image={image} />
				<HeroStats stats={powerstats} />
			</Details>
			<Details>
				<HeroBio bio={biography} name={name} />
				<HeroAppearance appearance={appearance} />
				<HeroOccupation occupation={occupation} />
			</Details>
		</>
	)
}