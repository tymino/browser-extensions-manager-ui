import React from 'react'

import svgLogo from '../assets/images/logo.svg'

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <img src={svgLogo} alt="logo" />

      <p className="text-2xl capitalize font-Noto font-bold text-primary-800 dark:text-primary-0">
        extensions
      </p>
    </div>
  )
}
export default Logo
