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
    <div className="flex flex-col justify-between p-4 bg-primary-0 border border-primary-0 rounded-xl shadow-sm dark:border-primary-600 dark:bg-primary-700">
      <div className="flex">
        <img src={logo} alt="ex-icon" />
        <div className="ml-3">
          <h3 className="text-xl capitalize font-bold text-primary-800 dark:text-primary-0">
            {title}
          </h3>
          <p className="text-base capitalize font-normal text-primary-600 dark:text-primary-300">
            {description}
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <Button variant="secondary" onClick={handleRemove}>
          remove
        </Button>
        <Toggle checked={isActive} onChange={handleChange} />
      </div>
    </div>
  )
}

export default Card
