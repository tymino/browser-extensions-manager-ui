import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  isActive: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  isActive = false,
}) => {
  const baseStyles =
    'px-5 py-2 rounded-3xl capitalize transition-colors duration-200'

  const variantStyles = {
    primary: 'bg-primary-700 hover:bg-primary-600 text-primary-100',
    secondary:
      'border border-primary-600 hover:bg-secondary-500 text-primary-100',
    active: 'bg-secondary-400 hover:bg-secondary-500 text-primary-800',
  }

  const setStyle = () => {
    return `${baseStyles} ${variantStyles[isActive ? 'active' : variant]}`
  }

  return (
    <button className={setStyle()} onClick={onClick}>
      {children}
    </button>
  )
}
export default Button
