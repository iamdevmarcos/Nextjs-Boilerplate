import React from 'react'

import { render, screen } from '@testing-library/react'

import Avatar, { AvatarProps } from '.'

describe('<Avatar />', () => {
  const props: AvatarProps = {
    source:
      'https://nerdhits.com.br/wp-content/uploads/2022/04/LUFFY-GEAR-5-1200x720.jpg',
    alternativeText: 'Luffy in Gear 5 mode',
    title: 'Luffy Gear 5'
  }

  it('should render the heading', () => {
    render(<Avatar {...props} />)

    const img = screen.getByRole('img', { name: props.alternativeText })

    expect(img).toBeInTheDocument()
    expect(img).toHaveProperty('src', props.source)
    expect(screen.getByText(props.title)).toBeInTheDocument()
  })
})
