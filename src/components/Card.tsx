import React from 'react'

import Button from './Button'
import Toggle from './Toggle'

interface CardProps {
  title: string
  description: string
  logo: string
  isActive: boolean
  onToggle: () => void
  onRemove: () => void
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  logo,
  isActive,
  onToggle,
  onRemove,
}) => {
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
        <Button variant="secondary" onClick={onRemove}>
          remove
        </Button>
        <Toggle checked={isActive} onChange={onToggle} />
      </div>
    </div>
  )
}

export default Card
