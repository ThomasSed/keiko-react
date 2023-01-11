import LoaderLogo from "./loader.svg"
import styles from "./Loader.module.css"

export const Loader = () => (
  <div className={styles.principal}>
    <img height={400} src={LoaderLogo} alt="pokemon-go-font" />
  </div>
)
