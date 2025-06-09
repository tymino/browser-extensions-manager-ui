import { useState, useEffect } from 'react'
import { useSortedButtons } from './useSortedButtons'

interface IExtension {
  logo: string
  name: string
  description: string
  isActive: boolean
}

export const useExtensionsList = () => {
  const [extensionsList, setExtensionsList] = useState<IExtension[]>([])
  const { buttons, activeButton, handleClick } = useSortedButtons()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json')
        const jsonData = await response.json()

        switch (activeButton) {
          case 1:
            setExtensionsList(
              jsonData.filter((ext: IExtension) => ext.isActive),
            )
            break
          case 2:
            setExtensionsList(
              jsonData.filter((ext: IExtension) => !ext.isActive),
            )
            break
          default:
            setExtensionsList(jsonData)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [activeButton])

  return { extensionsList, buttons, activeButton, handleClick }
}
