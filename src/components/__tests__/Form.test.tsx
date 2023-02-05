import { render, screen } from '@testing-library/react'
import Form from 'components/Form'

describe('<Form />', () => {
  it('should render correctly', () => {
    render(<Form />)

    expect(screen.getByRole('heading', { name: /Form/i })).toBeInTheDocument()
  })
})
