import { useLocation, Link } from 'react-router-dom'

export default function FooterCredits() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <footer
      data-gfe-screenshot-exclude="true"
      className="mt-auto py-8 border-t border-gray-200 bg-white/50 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-6">
          {!isHome && (
            <Link
              to="/"
              className="group flex items-center gap-2 font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
              >
                <path
                  fillRule="evenodd"
                  d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Home
            </Link>
          )}
        </div>

        <div className="flex items-center flex-wrap gap-1">
          <span>A challenge by</span>
          <a
            href="https://www.greatfrontend.com/projects?ref=challenges"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-gray-900 hover:text-indigo-600 transition-colors"
          >
            GreatFrontEnd Projects.
          </a>
          <span>Built by</span>
          <a
            href="https://www.greatfrontend.com/projects/u/basselAhmed"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-gray-900 hover:text-indigo-600 transition-colors"
          >
            Bassel Ahmed.
          </a>
        </div>
      </div>
    </footer>
  )
}
