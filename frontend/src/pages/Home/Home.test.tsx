import { render, screen } from "@testing-library/react"
import { Home } from "./index"
//import Pokemon from "../../components/Pokemon"

describe("<Home />", () => {
  it("should display Carapuce", () => {
    render(<Home />)
    const carapuce = screen.getByText("Name: Carapuce")
    expect(carapuce).toBeInTheDocument()
  })
})
