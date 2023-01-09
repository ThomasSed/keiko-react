import styles from "./Home.module.css"
import pstyles from "./Pokemon.module.css"

interface Props {
  name: string
  id: number
  weight: number
  height: number
}

export const Pokemon = ({ name, id, height, weight }: Props) => {
  return (
    <div className={pstyles.pokemon}>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
      <p>Name: {name}</p>
      <p>Number: {id}</p>
      <p>height: {height}</p>
      <p>weight: {weight}</p>
    </div>
  )
}
