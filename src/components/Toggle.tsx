import React, { useState } from 'react'

interface ToggleProps {
  onChange?: (checked: boolean) => void
  checked?: boolean
}

const Toggle: React.FC<ToggleProps> = ({ onChange, checked = false }) => {
  const [isChecked, setIsChecked] = useState(checked)

  const handleToggle = () => {
    const newValue = !isChecked
    setIsChecked(newValue)
    onChange?.(newValue)
  }

  return (
    <div className="flex items-center gap-2">
      <button
        role="switch"
        aria-checked={isChecked}
        onClick={handleToggle}
        className={`relative inline-flex h-6 w-11 items-center rounded-full focus:outline-2 focus:outline-offset-2 focus:outline-secondary-500 cursor-pointer ${
          isChecked
            ? 'bg-secondary-700 dark:bg-secondary-500'
            : 'bg-primary-300 dark:bg-primary-600'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${
            isChecked ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  )
}

export default Toggle
