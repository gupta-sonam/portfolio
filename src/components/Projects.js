export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="border rounded-lg p-6 bg-gray-100 dark:bg-gray-800">
          <h3 className="text-xl font-semibold mb-2">Property Management Website</h3>
          <p className="text-gray-600 dark:text-gray-300">A custom WordPress solution for real estate listings with advanced search and booking features.</p>
        </div>
        <div className="border rounded-lg p-6 bg-gray-100 dark:bg-gray-800">
          <h3 className="text-xl font-semibold mb-2">ARForms Addons</h3>
          <p className="text-gray-600 dark:text-gray-300">Developed SMS, Email Marketer, and Google Sheets addons for the popular ARForms plugin.</p>
        </div>
        <div className="border rounded-lg p-6 bg-gray-100 dark:bg-gray-800">
          <h3 className="text-xl font-semibold mb-2">eCommerce Store</h3>
          <p className="text-gray-600 dark:text-gray-300">Built a WooCommerce-powered store with custom payment gateway integration (Stripe & PayPal).</p>
        </div>
      </div>
    </section>
  )
}
