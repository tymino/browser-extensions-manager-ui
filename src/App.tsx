import useTheme from './hooks/useTheme'

import Link from './components/Link'
import ButtonTheme from './components/ButtonTheme'
import Logo from './components/Logo'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="h-screen bg-linear-(--bg-light-gradient) dark:bg-linear-(--bg-dark-gradient) ">
      <ButtonTheme theme={theme} toggleTheme={toggleTheme} />

      <Logo />

      <div className="text-primary-200 dark:text-primary-800">Hello React</div>
      <Link href="#" name="click link" />
    </div>
  )
}

export default App
