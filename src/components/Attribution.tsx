import { useState } from 'react'
import Link from './Link'

const urlChallenge =
  'https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp'

interface IUser {
  name: string
  url: string
}

export const Attribution = () => {
  const [data] = useState<IUser>({
    name: 'name',
    url: '',
  })

  return (
    <div className="">
      Challenge by <Link href={urlChallenge} name="Frontend Mentor" />. Coded by{' '}
      <Link href={data.url} name={data.name} />
    </div>
  )
}
