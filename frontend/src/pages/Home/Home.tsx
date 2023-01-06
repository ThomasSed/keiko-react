import styles from "./Home.module.css"
import { Pokemon } from "components/Pokemon"

export const Home = () => {
  return (
    <div>
      <div className={styles.intro}>
        <div>Bienvenue sur ton futur pokédex !</div>
        <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React et attraper des pokemons !</div>
      </div>
      <Pokemon name={"Carapuce"} id={7}></Pokemon>
      <Pokemon name={"Carabaffe"} id={8}></Pokemon>
      <Pokemon name={"Tortank"} id={9}></Pokemon>
    </div>
  )
}
