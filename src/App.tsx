import Logo from './components/Logo'
import ButtonTheme from './components/ButtonTheme'
import Button from './components/Button'
import Card from './components/Card'

import useTheme from './hooks/useTheme'
import { useExtensionsList } from './hooks/useExtensionsList'

const App = () => {
  const { theme, toggleTheme } = useTheme()
  const {
    sortedExtensionsList,
    buttons,
    activeButton,
    handleClickSortButton,
    handleToggleExt,
    handleRemoveExt,
  } = useExtensionsList()

  return (
    <div className="min-h-screen bg-linear-(--bg-light-gradient) dark:bg-linear-(--bg-dark-gradient)">
      <div className="flex flex-col max-w-screen-xl mx-auto p-4">
        <div className="flex justify-between mt-5 p-2 bg-primary-0 rounded-xl dark:bg-primary-700">
          <Logo />
          <ButtonTheme theme={theme} toggleTheme={toggleTheme} />
        </div>

        <div className="flex flex-col justify-between items-center my-7 sm:flex-row">
          <p className="text-primary-800 text-3xl font-bold capitalize dark:text-primary-0">
            extensions list ({sortedExtensionsList.length})
          </p>

          <div className="flex gap-2 mt-3 sm:mt-0">
            {buttons.map(({ id, variant, name }) => (
              <Button
                key={id}
                variant={variant}
                isActive={id === activeButton}
                onClick={() => handleClickSortButton(id)}
              >
                {name}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {sortedExtensionsList.map(({ logo, name, description, isActive }) => (
            <Card
              key={name}
              title={name}
              description={description}
              logo={logo}
              isActive={isActive}
              onToggle={handleToggleExt}
              onRemove={handleRemoveExt}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default App
