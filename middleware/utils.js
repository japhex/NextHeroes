const calculateAverage = (stats) => {
	let statsTotal = 0
	let statsAmount = 0

	for (const stat in stats) {
		if (stats[stat] !== 'null') {
			statsTotal += parseInt(stats[stat])
		}
		statsAmount++
	}

	if (statsAmount === 0) statsTotal = 0

	return Math.ceil(statsTotal / statsAmount)
}

export const compareStats = (heroOne, heroTwo) => {
	const heroOneAverage = calculateAverage(heroOne.hero.powerstats)
	const heroTwoAverage = calculateAverage(heroTwo.hero.powerstats)
	let winner = ''

	if (heroOneAverage > heroTwoAverage) {
		winner = heroOne.hero.name
	} else if (heroTwoAverage > heroOneAverage) {
		winner = heroTwo.hero.name
	} else {
		winner = 'Draw!'
	}

	return winner
}