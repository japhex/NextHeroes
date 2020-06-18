import React, { useState, useEffect, useContext } from 'react'
import { useDebounce } from '@umijs/hooks'
import { HeroContext } from 'contexts/heroContext'
import {
  SearchContainer,
  Search,
  Results,
  ResultName,
  ResultHeroName,
} from 'styled/hero-search.styled'

interface HeroSearchProps {
  hero: number
}

const getHeroSearch = async (searchTerm: string) => {
  const response = await fetch(
    `https://www.superheroapi.com/api.php/10158438646709886/search/${searchTerm}`
  )
  return response.json()
}

const HeroSearch: React.FC<HeroSearchProps> = ({ hero }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [heroes, setHeroes] = useState([])
  const [error, setError] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 300)
  const { storeHero1, storeHero2 } = useContext(HeroContext)

  useEffect(() => {
    if (debouncedSearchTerm) {
      getHeroSearch(debouncedSearchTerm).then(({ results, error }) => {
        if (results) {
          setHeroes(results)
          setError('')
        } else {
          setError(error)
          setHeroes([])
        }
      })
    } else {
      setHeroes([])
    }
  }, [setHeroes, setError, debouncedSearchTerm])

  const setHeroInStore = (result) => {
    if (hero === 1) {
      storeHero1(result)
    } else {
      storeHero2(result)
    }
  }

  return (
    <SearchContainer>
      <Search
        autoFocus
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="e.g. batman..."
      />

      {error.length > 0 && <p>{error}</p>}

      {heroes.length > 0 && (
        <Results>
          {heroes.map((resultHero: Hero) => (
            <ResultName
              key={resultHero.id}
              onClick={() => setHeroInStore(resultHero)}
            >
              <ResultHeroName>{resultHero.name}</ResultHeroName>
              {resultHero.biography['full-name']}
            </ResultName>
          ))}
        </Results>
      )}
    </SearchContainer>
  )
}

export default HeroSearch
