export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 max-w-3xl mx-auto text-center"
    >
      <h2 className="text-3xl font-bold mb-6">Let’s Connect</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        I’m always excited to discuss new projects, collaborations, or
        opportunities. Feel free to reach out!
      </p>

      <div className="flex justify-center gap-4">
        <a
          href="mailto:sonam.gupta7048@gmail.com"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/gupta-sonam"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition"
        >
          LinkedIn
        </a>
      </div>

      {/* Optional: Future form placeholder */}
      {/* <form className="mt-10 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded border dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded border dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 rounded border dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form> */}
    </section>
  )
}
