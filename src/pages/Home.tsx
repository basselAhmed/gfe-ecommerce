import { Link } from 'react-router-dom'

const CHALLENGES = [
  {
    path: '/navbar',
    label: 'Navbar',
    description:
      'Responsive navigation bar with mobile menu and focus management.',
    status: 'completed',
  },
  {
    path: '/product-details-section',
    label: 'Product Details',
    description: 'Detailed view of a product with image gallery and options.',
    status: 'pending',
  },
  {
    path: '/product-reviews',
    label: 'Product Reviews',
    description: 'Customer reviews section with ratings and feedback.',
    status: 'pending',
  },
  {
    path: '/product-specifications-section',
    label: 'Specifications',
    description: 'Technical specifications and details table.',
    status: 'pending',
  },
  {
    path: '/product-grid-section',
    label: 'Product Grid',
    description: 'Grid layout displaying multiple products with filters.',
    status: 'pending',
  },
  {
    path: '/footer',
    label: 'Footer',
    description: 'Comprehensive footer with links and newsletter signup.',
    status: 'pending',
  },
  {
    path: '/product-details-page',
    label: 'Product Page',
    description: 'Full page layout combining details, reviews, and specs.',
    status: 'pending',
  },
  {
    path: '/collections-grid-section',
    label: 'Collections',
    description: 'Showcase of product collections and categories.',
    status: 'pending',
  },
  {
    path: '/product-listing-section',
    label: 'Product Listing',
    description: 'Search results and category listing with pagination.',
    status: 'pending',
  },
  {
    path: '/storefront-page',
    label: 'Storefront',
    description: 'Main landing page for the e-commerce store.',
    status: 'pending',
  },
  {
    path: '/shopping-cart-section',
    label: 'Shopping Cart',
    description: 'Cart management with quantity adjustments.',
    status: 'pending',
  },
  {
    path: '/checkout-section',
    label: 'Checkout',
    description: 'Secure checkout flow with address and payment forms.',
    status: 'pending',
  },
  {
    path: '/order-success-section',
    label: 'Order Success',
    description: 'Confirmation page after a successful purchase.',
    status: 'pending',
  },
  {
    path: '/ecommerce-website',
    label: 'Full Website',
    description: 'The complete e-commerce application integration.',
    status: 'pending',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-16 md:py-24 max-w-7xl">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
              GreatFrontEnd <span className="text-indigo-600">E-commerce</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              A collection of production-grade e-commerce components and pages.
              Built with React, TypeScript, and Tailwind CSS, focusing on
              accessibility and modern design patterns.
            </p>
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHALLENGES.map((challenge) => (
            <Link
              key={challenge.path}
              to={challenge.path}
              className="group relative flex flex-col p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-indigo-100 hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    challenge.status === 'completed'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {challenge.status === 'completed' ? 'Completed' : 'Pending'}
                </div>
                <svg
                  className="w-5 h-5 text-gray-300 group-hover:text-indigo-600 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {challenge.label}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                {challenge.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
