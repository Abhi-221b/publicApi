

export default function Home() {


  return (
    <div className="dark:bg-black max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 transition">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition">Welcome to Our Website</h1>
      <p className="text-gray-700 mb-8 dark:text-white transition">Discover our services and solutions designed to help you achieve your goals. We are committed to providing exceptional value and support to our clients.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6 dark:shadow-amber-50 transition">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-700">Explore the wide range of services we offer, tailored to meet your specific needs and requirements.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 dark:shadow-amber-50 transition">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h2>
          <p className="text-gray-700">Learn about the unique advantages and benefits of partnering with us for your business success.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 dark:shadow-amber-50 transition">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Get Started</h2>
          <p className="text-gray-700">Ready to take the next step? Contact us today to discuss how we can help you achieve your goals.</p>
        </div>
      </div>
    </div>
  );
}
