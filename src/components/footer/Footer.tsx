

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand Section */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Your Brand</h3>
                        <p className="text-sm text-gray-400">
                            Building amazing digital experiences for users worldwide.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Product</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-sm hover:text-white transition">Features</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm hover:text-white transition">Pricing</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm hover:text-white transition">Security</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm hover:text-white transition">Roadmap</a>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-sm hover:text-white transition">About</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm hover:text-white transition">Blog</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm hover:text-white transition">Careers</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm hover:text-white transition">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-sm hover:text-white transition">Documentation</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm hover:text-white transition">Help Center</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm hover:text-white transition">API Docs</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm hover:text-white transition">Community</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-8 mt-8">
                    {/* Footer Bottom */}
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-sm text-gray-400 mb-4 md:mb-0">
                            &copy; 2026 Your Brand. All rights reserved.
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.07 4.07 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />{' '}
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <span className="sr-only">GitHub</span>
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.186.092-.923.35-1.555.636-1.913-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.195 20 14.44 20 10.017 20 4.484 15.522 0 10 0z" clipRule="evenodd" />{' '}
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.001-3.097 1.548 1.548 0 01.001 3.097zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />{' '}
                                </svg>
                            </a>
                        </div>

                        {/* Legal Links */}
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="text-sm text-gray-400 hover:text-white transition">Privacy</a>
                            <a href="#" className="text-sm text-gray-400 hover:text-white transition">Terms</a>
                            <a href="#" className="text-sm text-gray-400 hover:text-white transition">Cookies</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
