import React from 'react'

interface LinkProps {
  name: string
  href: string
}

const Link: React.FC<LinkProps> = ({ name, href }) => {
  return (
    <a href={href} className="text-red-600 hover:text-blue-700 underline">
      {name}
    </a>
  )
}

export default Link
