import styles from "./Home.module.css"
import { Pokemon } from "components/Pokemon"
import React from "react"

export const Home = () => {
  const [filterValue, setFilterValue] = React.useState("")
  const [pokemonList_, setPokemonList] = React.useState(pokemonList)
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value)
    pokemonList.forEach(() => {
      const filtered = filterPokemonsByName(pokemonList_, event.target.value)
      if (filtered.length >= 1) setPokemonList(filterPokemonsByName(pokemonList_, event.target.value))
      else setPokemonList(pokemonList)
    })
  }

  return (
    <div>
      <div className={styles.intro}>
        <div>Bienvenue sur ton futur pokédex !</div>
        <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React et attraper des pokemons !</div>
      </div>
      <input className={styles.input} onChange={onInputChange} value={filterValue} />
      {pokemonList_.map(({ name, id }) => {
        return <Pokemon key={id} name={name} id={id} />
      })}
    </div>
  )
}

const pokemonList = [
  {
    name: "Carapuce",
    id: 7,
  },
  {
    name: "Carabaffe",
    id: 8,
  },
  {
    name: "Tortank",
    id: 9,
  },
]

interface Pokemon {
  name: string
  id: number
}

function filterPokemonsByName(pokemons: Pokemon[], name: string) {
  return pokemons.filter(a => a.name == name)
}
