import { PokemonWithId } from "./pages/Pokemon"
import { Pokedex } from "./pages/Pokedex"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Root } from "./components/Root"

import { Home } from "./pages/Home"

export const App = () => {
  return (
    <Root>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/pokedex/0"} />} />
          <Route path="/:id" element={<PokemonWithId />} />
          <Route path="/pokedex/:index" element={<Pokedex />} />
        </Routes>
      </BrowserRouter>
    </Root>
  )
}
