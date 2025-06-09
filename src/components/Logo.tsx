import React from 'react'

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <img src='/images/logo.svg' alt="logo" />

      <p className="text-2xl capitalize font-Noto font-bold text-primary-800 dark:text-primary-0">
        extensions
      </p>
    </div>
  )
}
export default Logo
