import { CardSection, StatsSectionLeft, StatsSectionRight } from "../styled/battle.styled"
import HeroImage from "./hero-image"
import HeroStats from "./hero-stats"
import HeroBio from "./hero-bio"
import HeroAppearance from "./hero-appearance"
import HeroOccupation from "./hero-occupation"

export default function HeroCard({ chosenHero }) {
	const { hero: { name, image, powerstats, biography, appearance, work: { occupation }} } = chosenHero
	return (
		<>
			<CardSection>
				<HeroImage name={name} image={image} />
			</CardSection>
			<CardSection pullUp>
				<StatsSectionLeft>
					<HeroBio bio={biography} name={name} />
					<HeroAppearance appearance={appearance} />
					<HeroOccupation occupation={occupation} />
				</StatsSectionLeft>
				<StatsSectionRight>
					<HeroStats stats={powerstats} />
				</StatsSectionRight>
			</CardSection>
		</>
	)
}