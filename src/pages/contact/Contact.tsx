
export default function Contact() {
    

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-gray-700 mb-8">          We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
                    <p className="text-gray-700 mb-4">You can reach us through the following methods:</p>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li>Email: <a href="mailto:contact@company.com" className="text-blue-600 hover:underline">contact@company.com</a></li>
                    </ul>
                    <p className="text-gray-700 mb-4">Our support team is available Monday to Friday, 9 AM to 5 PM (EST). We strive to respond to all inquiries within 24 hours.</p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Visit Us</h2>
                    <p className="text-gray-700 mb-4">Our office is located at:</p>
                    <address className="not-italic text-gray-700 mb-4">
                        123 Main Street<br />
                        Suite 400<br />
                        Anytown, USA 12345
                    </address>
                    <p className="text-gray-700 mb-4">We welcome visitors during our business hours. Please schedule an appointment in advance to ensure we can accommodate you.</p>
                </div>
            </div>
        </div>
    );
}
