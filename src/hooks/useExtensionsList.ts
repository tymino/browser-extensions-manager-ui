import { useState, useEffect } from 'react'

import { useSortedButtons } from './useSortedButtons'

export interface IExtension {
  logo: string
  name: string
  description: string
  isActive: boolean
}

export const useExtensionsList = () => {
  const { buttons, activeButton, handleClickSortButton } = useSortedButtons()

  const [extensionsList, setExtensionsList] = useState<IExtension[]>([])
  const [sortedExtensionsList, setSortedExtensionsList] = useState<
    IExtension[]
  >([])

  const handleToggleExt = (name: string) => {
    const updatedExtensionsList = extensionsList.map((ext) => {
      if (ext.name === name) {
        return { ...ext, isActive: !ext.isActive }
      }

      return ext
    })

    setExtensionsList(updatedExtensionsList)
  }

  const handleRemoveExt = (name: string) => {
    const updatedExtensionsList = extensionsList.filter(
      (ext) => ext.name !== name,
    )

    setExtensionsList(updatedExtensionsList)
  }

  useEffect(() => {
    const fetchExtData = async () => {
      try {
        const response = await fetch('./data.json')
        const data = await response.json()

        setExtensionsList(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchExtData()
  }, [])

  useEffect(() => {
    // all - 0 (default), active button - 1, inactive button - 2
    switch (activeButton) {
      case 1:
        setSortedExtensionsList(extensionsList.filter((ext) => ext.isActive))
        break
      case 2:
        setSortedExtensionsList(extensionsList.filter((ext) => !ext.isActive))
        break
      default:
        setSortedExtensionsList(extensionsList)
    }
  }, [activeButton, extensionsList])

  return {
    sortedExtensionsList,
    buttons,
    activeButton,
    handleClickSortButton,
    handleToggleExt,
    handleRemoveExt,
  }
}
