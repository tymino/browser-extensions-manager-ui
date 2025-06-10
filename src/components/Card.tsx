import React from 'react'

import Button from './Button'
import Toggle from './Toggle'

interface CardProps {
  title: string
  description: string
  logo: string
  isActive: boolean
  onToggle: (name: string) => void
  onRemove: (name: string) => void
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  logo,
  isActive,
  onToggle,
  onRemove,
}) => {
  const handleRemove = () => onRemove(title)
  const handleChange = () => onToggle(title)

  return (
    <div>
      <div>
        <img src={logo} alt="ex-icon" />
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div>
        <Button variant="secondary" onClick={handleRemove}>
          remove
        </Button>
        <Toggle checked={isActive} onChange={handleChange} />
      </div>
    </div>
  )
}

export default Card
