import React, { useState } from "react"
import styles from "./Animate.module.css"

export const Animate =
  <P extends object>(BaseComponent: React.ComponentType<P>, animation: string) =>
  (props: P) => {
    const Animated = () => {
      const [style, setStyle] = useState("")
      const anim = animation == "tada" ? styles.tadaAnimation : styles.wobbleAnimation
      const defaultstyle = ""
      return (
        <div
          className={style}
          onMouseEnter={() => {
            setStyle(anim)
          }}
          onMouseLeave={() => {
            setStyle(defaultstyle)
          }}
        >
          <BaseComponent {...props} />
        </div>
      )
    }
    return Animated()
  }
