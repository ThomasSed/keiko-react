import style from "./Pokemon.module.css"
import { Pokemon } from "components/Pokemon"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { p } from "msw/lib/SetupApi-b2f0e5ac"

interface PokemonInfo {
  id: number
  name: string
  height: number
  weight: number
}

export const PokemonWithId = () => {
  const { id } = useParams<string>()
  const [pokemonData, setPokemonData] = useState<PokemonInfo>()
  const [erreur, setErreur] = useState(false)

  useEffect(() => {
    id
      ? getPokemons(parseInt(id)).then(data => {
          console.log(data)
          setPokemonData(data)
        })
      : setErreur(true)
  }, [])
  return (
    <div>
      {erreur ? (
        <p>pokémon non trouvé</p>
      ) : (
        <div>
          <div>
            <p className={style.titre}>Name: {pokemonData ? pokemonData.name : "erreur de chargement du nom"}</p>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`} />
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${id}.png`}
            />
          </div>
          <div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`} />
          </div>
          <p>Number: {id}</p>
          <p>height: {pokemonData ? pokemonData.weight : "erreur de chargement du poids"}</p>
          <p>weight: {pokemonData ? pokemonData.height : " erreur de chargment de la taille"}</p>
        </div>
      )}
    </div>
  )
}

const getPokemons = async (id: number) => {
  const response = await fetch("http://localhost:8000/pokemon/" + id, { headers: { accept: "application/json" } })
  return response.json()
}
