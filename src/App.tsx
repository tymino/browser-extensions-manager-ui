import Link from './components/Link'
import useTheme from './hooks/useTheme'

const App = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className="h-screen bg-linear-(--bg-light-gradient) dark:bg-linear-(--bg-dark-gradient) ">
      <button
        className="w-full h-fulls p-3.5 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded"
        onClick={toggleTheme}
      >
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>

      <div className="text-primary-200 dark:text-primary-800">Hello React</div>
      <Link href="#" name="click link" />
    </div>
  )
}

export default App
