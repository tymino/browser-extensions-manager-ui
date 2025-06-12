import React from 'react'

interface IProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  isActive?: boolean
}

const Button: React.FC<IProps> = ({
  children,
  variant = 'primary',
  onClick,
  isActive = false,
}) => {
  const baseStyles =
    'px-5 py-2 rounded-3xl capitalize transition-colors duration-200 cursor-pointer focus:outline-secondary-500 focus:outline-2 focus:outline-offset-2'

  const variantStyles = {
    primary:
      'bg-primary-0 text-primary-800 shadow-sm hover:bg-primary-0 hover:text-primary-600 hover:shadow-none dark:bg-primary-700 dark:text-primary-100 dark:hover:bg-primary-600 dark:hover:text-primary-0',
    secondary:
      'border border-primary-600 text-primary-800 font-medium hover:bg-secondary-700 hover:text-primary-0 dark:hover:bg-secondary-500 dark:text-primary-0',
    active:
      'bg-secondary-500 text-primary-0 hover:bg-secondary-400 dark:bg-secondary-400 dark:text-primary-800 dark:hover:bg-secondary-500',
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
