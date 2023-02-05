import { fireEvent, render, screen } from '@testing-library/react'
import Form from 'components/Form'

describe('<Form />', () => {
  beforeEach(() => {
    render(<Form />)
  })

  it('should render correctly', () => {
    const heading = screen.getByRole('heading', {
      name: /example form/i
    })
    expect(heading).toBeInTheDocument()

    const firstNameInput = screen.getByRole('textbox', {
      name: /first name:/i
    })
    expect(firstNameInput).toBeInTheDocument()

    const lastNameInput = screen.getByRole('textbox', {
      name: /last name:/i
    })
    expect(lastNameInput).toBeInTheDocument()

    const ageInput = screen.getByRole('textbox', {
      name: /age:/i
    })
    expect(ageInput).toBeInTheDocument()

    const submitBtn = screen.getByRole('button', { name: /submit/i })
    expect(submitBtn).toBeInTheDocument()
  })

  it('should change the input value', () => {
    const firstNameInput = screen.getByRole('textbox', {
      name: /first name:/i
    }) as HTMLInputElement

    fireEvent.change(firstNameInput, { target: { value: 'Marcos' } })
    expect(firstNameInput.value).toBe('Marcos')
  })
})
