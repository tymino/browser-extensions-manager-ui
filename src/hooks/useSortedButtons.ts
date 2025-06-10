import { useState } from 'react'

interface Button {
  id: number
  name: string
  variant: 'primary' | 'secondary'
}

const buttons: Button[] = [
  { id: 0, name: 'all', variant: 'primary' },
  {
    id: 1,
    name: 'active',
    variant: 'primary',
  },
  {
    id: 2,
    name: 'inactive',
    variant: 'primary',
  },
]

export const useSortedButtons = () => {
  const [activeButton, setActiveButton] = useState(0)

  const handleClickSortButton = (id: number) => {
    setActiveButton(id)
  }

  return { buttons, activeButton, handleClickSortButton }
}
