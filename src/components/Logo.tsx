import React from 'react'

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <img src="/images/logo.svg" alt="logo" />

      <p className="text-primary-800 text-2xl font-Noto font-bold capitalize dark:text-primary-0">
        extensions
      </p>
    </div>
  )
}
export default Logo
