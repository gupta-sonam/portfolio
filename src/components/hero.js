export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-center">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Hi, I’m Sonam Gupta</h2>
      <p className="mt-4 text-gray-700 dark:text-gray-300">Software Developer | WordPress Expert | PHP Enthusiast</p>
      <div className="mt-6">
        <a href="#projects" className="px-4 py-2 bg-blue-500 text-white rounded mr-4">View My Work</a>
        <a href="#contact" className="px-4 py-2 border border-blue-500 text-blue-500 rounded">Let’s Connect</a>
      </div>
    </section>
  )
}
