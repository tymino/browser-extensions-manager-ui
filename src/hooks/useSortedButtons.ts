import { useState } from 'react'

interface Button {
  id: number
  name: string
  variant: 'primary' | 'secondary'
}

const buttons: Button[] = [
  { id: 1, name: 'all', variant: 'primary' },
  {
    id: 2,
    name: 'active',
    variant: 'primary',
  },
  {
    id: 3,
    name: 'completed',
    variant: 'primary',
  },
]

export const useSortedButtons = () => {
  const [activeButton, setActiveButton] = useState(1)

  const handleClick = (id: number) => {
    setActiveButton(id)
  }

  return { buttons, activeButton, handleClick }
}
