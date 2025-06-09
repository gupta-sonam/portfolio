import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">Sonam Gupta</h1>
      <nav>
        <ul className="flex space-x-4 text-gray-700 dark:text-gray-300">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <ThemeToggle />
    </header>
  )
}
