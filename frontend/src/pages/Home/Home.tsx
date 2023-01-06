import styles from "./Home.module.css"
import { Pokemon } from "components/Pokemon"
import React, { useEffect } from "react"

interface PokemonInfo {
  id: number
  name: string
  height: number
  weight: number
}

export const Home = () => {
  const [filterValue, setFilterValue] = React.useState("")
  const [pokemonList_, setPokemonList] = React.useState<PokemonInfo[]>([])
  //const [pokemonList_, updatePokemonList] = React.useState<PokemonInfo[]>([])

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value)
  }

  useEffect(() => {
    fetchPokemons().then(pokemonData => {
      setPokemonList(pokemonData)
      const filtered = filterPokemonsByName(pokemonList_, filterValue)
      if (filtered.length >= 1) setPokemonList(filterPokemonsByName(pokemonList_, filterValue))
      else setPokemonList(pokemonData)
    })
  }, [filterValue, pokemonList_])

  return (
    <div>
      <div className={styles.intro}>
        <div>Bienvenue sur ton futur pokédex !</div>
        <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React et attraper des pokemons !</div>
      </div>
      <input className={styles.input} onChange={onInputChange} value={filterValue} />
      {pokemonList_.map(({ name, id, height, weight }) => {
        return <Pokemon key={id} name={name} height={height} weight={weight} id={id} />
      })}
    </div>
  )
}

interface Pokemon {
  name: string
  id: number
}

function filterPokemonsByName(pokemons: PokemonInfo[], name: string) {
  return pokemons.filter(a => a.name == name)
}

function fetchPokemons() {
  return fetch("http://localhost:8000/pokemons", { headers: { accept: "application/json" } }).then(response =>
    response.json(),
  )
}
