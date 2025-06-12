import React from 'react'

interface IProps {
  name: string
  href: string
}

const Link: React.FC<IProps> = ({ name, href }) => {
  return (
    <a href={href} className="text-red-600 underline hover:text-blue-700">
      {name}
    </a>
  )
}

export default Link
