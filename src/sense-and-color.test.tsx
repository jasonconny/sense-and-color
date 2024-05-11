// import React from "react"
import { SenseAndColor } from "./sense-and-color"
import { render } from "./test-utils"
import { screen } from "@testing-library/react"

test("renders learn react link", () => {
  render(<SenseAndColor />)
  const linkElement = screen.getByRole('button', { name: /switch to/i })
  expect(linkElement).toBeInTheDocument()
})
