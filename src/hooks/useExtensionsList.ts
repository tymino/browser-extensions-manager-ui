import { useState, useEffect } from 'react'

import { useSortedButtons } from './useSortedButtons'
import { extensionData } from '../extData'

import type { IExtension } from '../extData'

export const useExtensionsList = () => {
  const { buttons, activeButton, handleClick } = useSortedButtons()

  const [extensionsList, setExtensionsList] = useState(extensionData)
  const [sortedExtensionsList, setSortedExtensionsList] = useState<
    IExtension[]
  >([])

  const handleToggleExt = () => {}
  const handleRemoveExt = () => {}

  useEffect(() => {
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

  return { sortedExtensionsList, buttons, activeButton, handleClick }
}
