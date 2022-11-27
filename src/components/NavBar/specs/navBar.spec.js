import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NavBar from "../NavBar"

describe('<NavBar />', () => {
  it('renders correctly', () => {
    const props = {}
    const { container } = render(
      <BrowserRouter>
        <NavBar {...props} />
      </BrowserRouter>
    )

    expect(container).toMatchSnapshot()
  })
})
