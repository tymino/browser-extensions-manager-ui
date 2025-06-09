import { useState, useEffect } from 'react'
import { useSortedButtons } from './useSortedButtons'

export const useExtensionsList = () => {
  const [extensionsList, setExtensionsList] = useState([])
  const { buttons, activeButton, handleClick } = useSortedButtons()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json')
        const jsonData = await response.json()
        
        setExtensionsList(jsonData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return { extensionsList, buttons, activeButton, handleClick }
}
