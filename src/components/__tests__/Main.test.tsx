import React from 'react'

import { render, screen } from '@testing-library/react'
import { Main } from 'components'

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /next.js boilerplate/i })
    ).toBeInTheDocument()
  })

  it('should render the logos', () => {
    render(<Main />)

    const nextLogo = screen.getByRole('img', { name: /nextjs logo/i })
    expect(nextLogo).toBeInTheDocument()

    const reactLogo = screen.getByRole('img', { name: /react logo/i })
    expect(reactLogo).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': 'black' })
  })
})
