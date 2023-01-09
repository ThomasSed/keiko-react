import { render, screen, waitFor } from "@testing-library/react"
import { Home } from "./index"
import { rest } from "msw"
import { setupServer } from "msw/node"

const server = setupServer(
  rest.get("http://localhost:8000/pokemons", (req, res, ctx) => {
    // Respond with a mocked user token that gets persisted
    // in the `sessionStorage` by the `Login` component.
    return res(
      ctx.json([
        { id: 1, name: "bulbasaur", height: 7, weight: 69 },
        { id: 2, name: "ivysaur", height: 10, weight: 130 },
      ]),
    )
  }),
)

describe("<Home />", () => {
  // Enable API mocking before tests.
  beforeAll(() => server.listen())

  // Reset any runtime request handlers we may add during the tests.
  afterEach(() => server.resetHandlers())

  // Disable API mocking after the tests are done.
  afterAll(() => server.close())

  it("should display bulbasaur & ivysaur", () => {
    render(<Home />)
    //const pok1 = screen.getByText("Name: bulbasaur")
    //const pok2 = screen.getByText("Name: ivysaur")
    waitFor(() => {
      expect("Name: bulbasaur").toBeInTheDocument()
      expect("Name: ivysaur").toBeInTheDocument()
    })
  })
})
