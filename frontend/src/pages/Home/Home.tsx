import styles from "./Home.module.css"
import { Pokemon } from "components/Pokemon"
import React, { useEffect } from "react"
import { Loader } from "components/Loader"
import { wait, waitFor } from "@testing-library/react"
import { Link } from "react-router-dom"

interface PokemonInfo {
  id: number
  name: string
  height: number
  weight: number
}

export const Home = () => {
  // const [filterValue, setFilterValue] = React.useState("")
  const [pokemonList_, setPokemonList] = React.useState<PokemonInfo[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [erreur, setErreur] = React.useState("")

  useEffect(() => {
    fetchPokemons()
      .catch(err => setErreur("erreur lors du chargement des pokémons"))
      .then(data => {
        setPokemonList(data)
        const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))
        sleep(500).then(() => setIsLoading(false))
      })
  }, [])

  //const [pokemonList_, updatePokemonList] = React.useState<PokemonInfo[]>([])

  // const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setFilterValue(event.target.value)
  // }

  // useEffect(() => {
  //   fetchPokemons().then(pokemonData => {
  //     setPokemonList(pokemonData)
  //     const filtered = filterPokemonsByName(pokemonList_, filterValue)
  //     if (filtered.length >= 1) setPokemonList(filterPokemonsByName(pokemonList_, filterValue))
  //     else setPokemonList(pokemonData)
  //   })
  // }, [filterValue])

  return (
    <div>
      <div className={styles.intro}>
        <div>Bienvenue sur ton futur pokédex !</div>
        <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React et attraper des pokemons !</div>
      </div>
      {/* <input className={styles.input} onChange={onInputChange} value={filterValue} /> */}
      <div className={styles.pokedex}>
        {erreur != "" ? (
          <div className={styles.erreur}>
            <p>{erreur}</p>
          </div>
        ) : isLoading ? (
          <Loader />
        ) : (
          pokemonList_.map(({ name, id, height, weight }) => {
            return (
              <Link to={`/${id}`} key={id}>
                <Pokemon key={id} name={name} height={height} weight={weight} id={id} />
              </Link>
            )
          })
        )}
      </div>
    </div>
  )
}

interface Pokemon {
  name: string
  id: number
}

// function filterPokemonsByName(pokemons: PokemonInfo[], name: string) {
//   return pokemons.filter(a => a.name == name)
// }

async function fetchPokemons() {
  const response = await fetch("http://localhost:8000/pokemons", { headers: { accept: "application/json" } }).catch(
    error => {
      console.log(error)
      throw error.message || error
    },
  )
  return await response.json()
}
