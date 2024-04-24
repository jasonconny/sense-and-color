import React from "react"
import { screen } from "@testing-library/react"
import { render } from "./test-utils"
import { SenseAndColor } from "./sense-and-color"

test("renders learn react link", () => {
  render(<SenseAndColor />)
  const linkElement = screen.getByText(/learn chakra/i)
  expect(linkElement).toBeInTheDocument()
})
