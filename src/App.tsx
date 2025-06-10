import useTheme from './hooks/useTheme'

import ButtonTheme from './components/ButtonTheme'
import Logo from './components/Logo'
import Button from './components/Button'
import { useExtensionsList } from './hooks/useExtensionsList'
import Card from './components/Card'

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
      <div className="flex flex-col max-w-screen-xl p-4 mx-auto ">
        <div className="flex justify-between mt-5 p-2 rounded-xl bg-primary-0 dark:bg-primary-700">
          <Logo />
          <ButtonTheme theme={theme} toggleTheme={toggleTheme} />
        </div>

        <div className="flex flex-col items-center sm:flex-row justify-between my-7">
          <p className="text-3xl capitalize font-bold text-primary-800 dark:text-primary-0">
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

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
