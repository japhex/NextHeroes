import { useState, useEffect, useContext } from 'react'
import { useDebounce } from '@umijs/hooks';
import { HeroContext } from 'contexts/heroContext'
import { SearchContainer, Search, Results, ResultName, ResultHeroName } from "../styled/hero-search.styled"

const getHeroSearch = async (searchTerm) => {
	const response = await fetch(`https://www.superheroapi.com/api.php/10158438646709886/search/${searchTerm}`)
	return response.json()
};

export default function HeroSearch({ hero }) {
	const [searchTerm, setSearchTerm] = useState('')
	const [results, setResults] = useState([])
	const [error, setError] = useState('')
	const debouncedSearchTerm = useDebounce(searchTerm, 300)
	const { storeHero1, storeHero2 } = useContext(HeroContext);

	useEffect(
		() => {
			if (debouncedSearchTerm) {
				getHeroSearch(debouncedSearchTerm).then(({ results, error }) => {
					if (results) {
						setResults(results)
						setError('')
					} else {
						setError(error)
						setResults([])
					}
				});
			} else {
				setResults([]);
			}
		}, [debouncedSearchTerm]
	);

	const setHeroInStore = (result) => {
		if (hero === 1) {
			storeHero1(result)
		} else {
			storeHero2(result)
		}
	}

	return (
		<SearchContainer>
			<Search autoFocus onChange={(e) => setSearchTerm(e.target.value)} placeholder="e.g. batman..." />

			{error.length > 0 &&
				<p>{error}</p>
			}

			{results.length > 0 &&
				<Results>
					{results.map(result =>
						<ResultName key={result.id}>
							<a onClick={() => setHeroInStore(result)}>
								<ResultHeroName>{result.name}</ResultHeroName>
								{result.biography['full-name']}
							</a>
						</ResultName>
					)}
				</Results>
			}
		</SearchContainer>
	)
}