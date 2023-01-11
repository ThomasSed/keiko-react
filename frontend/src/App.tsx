import { PokemonWithId } from "./pages/Pokemon"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Root } from "./components/Root"

import { Home } from "./pages/Home"

export const App = () => {
  return (
    <Root>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<PokemonWithId />} />
        </Routes>
      </BrowserRouter>
    </Root>
  )
}
