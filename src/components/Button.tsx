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
    primary:
      'bg-primary-0 hover:bg-primary-0 text-primary-800 hover:text-primary-600 dark:bg-primary-700 dark:hover:bg-primary-600 dark:text-primary-100 shadow-sm hover:shadow-none focus:outline-secondary-500 focus:outline-2 focus:outline-offset-2 cursor-pointer',
    secondary:
      'border border-primary-600 hover:bg-secondary-500 text-primary-100',
    active:
      'bg-secondary-500 hover:bg-secondary-400 text-primary-0 dark:bg-secondary-400 dark:hover:bg-secondary-500 dark:text-primary-800 focus:outline-secondary-500 focus:outline-2 focus:outline-offset-2 cursor-pointer',
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
