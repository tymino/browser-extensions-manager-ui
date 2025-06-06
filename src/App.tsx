import useTheme from './hooks/useTheme'

import ButtonTheme from './components/ButtonTheme'
import Logo from './components/Logo'
import Button from './components/Button'
import { useSortedButtons } from './hooks/useSortedButtons'

const App = () => {
  const { theme, toggleTheme } = useTheme()
  const { buttons, activeButton, handleClick } = useSortedButtons()

  return (
    <div className="h-screen bg-linear-(--bg-light-gradient) dark:bg-linear-(--bg-dark-gradient) ">
      <div className="flex flex-col max-w-7xl h-full p-4 mx-auto">
        <div className="flex justify-between">
          <Logo />
          <ButtonTheme theme={theme} toggleTheme={toggleTheme} />
        </div>

        <div className="flex justify-between">
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
          <div className="bg-amber-600">a</div>
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
          <div className="bg-blue-500">a</div>
        </div>
      </div>
    </div>
  )
}
export default App
