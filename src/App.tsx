import useTheme from './hooks/useTheme'

import ButtonTheme from './components/ButtonTheme'
import Logo from './components/Logo'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="h-screen bg-linear-(--bg-light-gradient) dark:bg-linear-(--bg-dark-gradient) ">
      <div className="flex flex-col max-w-7xl h-full p-4 mx-auto">
        <div className="flex justify-between">
          <Logo />
          <ButtonTheme theme={theme} toggleTheme={toggleTheme} />
        </div>

        <div className="flex justify-between">
          <p>extensions list</p>

          <div>
            <button>all</button>
            <button>active</button>
            <button>inactive</button>
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
