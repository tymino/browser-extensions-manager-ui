import useTheme from './hooks/useTheme'

import ButtonTheme from './components/ButtonTheme'
import Logo from './components/Logo'
import Button from './components/Button'
import { useExtensionsList } from './hooks/useExtensionsList'
import Card from './components/Card'

const App = () => {
  const { theme, toggleTheme } = useTheme()
  const { extensionsList, buttons, activeButton, handleClick } =
    useExtensionsList()

  console.log(extensionsList)

  const handleRemove = () => console.log('click remove')
  const handleToggle = () => console.log('click toggle')

  return (
    <div className="h-screen bg-linear-(--bg-light-gradient) dark:bg-linear-(--bg-dark-gradient) ">
      <div className="flex flex-col max-w-7xl h-full p-4 mx-auto">
        <div className="flex justify-between mt-5 p-2 rounded-xl bg-primary-0 dark:bg-primary-700">
          <Logo />
          <ButtonTheme theme={theme} toggleTheme={toggleTheme} />
        </div>

        <div className="flex justify-between my-7">
          <p className="text-3xl capitalize font-Noto font-bold text-primary-800 dark:text-primary-0">
            extensions list
          </p>

          <div className="flex gap-2">
            {buttons.map(({ id, variant, name }) => (
              <Button
                key={id}
                variant={variant}
                isActive={id === activeButton}
                onClick={() => handleClick(id)}
              >
                {name}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 grid-rows-4 gap-4">
          {extensionsList.map(({ logo, name, description, isActive }) => (
            <Card
              key={name}
              title={name}
              description={description}
              logo={logo}
              isActive={isActive}
              onToggle={handleToggle}
              onRemove={handleRemove}
            />
          ))}
          {/* <div className="bg-amber-600">a</div>
          <div className="bg-blue-500">a</div>
          <div className="bg-amber-600">a</div>
          <div className="bg-blue-500">a</div>
          <div className="bg-amber-600">a</div>
          <div className="bg-blue-500">a</div>
          <div className="bg-amber-600">a</div>
          <div className="bg-blue-500">a</div>
          <div className="bg-amber-600">a</div>
          <div className="bg-blue-500">a</div>
          <div className="bg-amber-600">a</div>
          <div className="bg-blue-500">a</div> */}
        </div>
      </div>
    </div>
  )
}
export default App
