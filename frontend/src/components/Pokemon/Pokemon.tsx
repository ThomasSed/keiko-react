import { Animate } from "components/Animate"
import styles from "./Pokemon.module.css"

interface Props {
  name: string | undefined
  id: number
  weight: number | undefined
  height: number | undefined
}

const PokemonComponent = ({ name, id, height, weight }: Props) => {
  return (
    <div className={styles.pokemon}>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
      <p>Name: {name}</p>
      <p>Number: {id}</p>
      <p>height: {height}</p>
      <p>weight: {weight}</p>
    </div>
  )
}

export const Pokemon = Animate<Props>(PokemonComponent, "tada")
