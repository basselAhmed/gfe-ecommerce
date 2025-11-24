import { useState, useEffect, useRef } from 'react'
import Button from '../../components/Button'
import CartButton from './CartButton'

const MENU_ITEMS = [
  { label: 'Shop all', href: '#' },
  { label: 'Latest arrivals', href: '#' },
]

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const openButtonRef = useRef<HTMLButtonElement>(null)

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      // Focus trap logic
      const focusableElements = menuRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      const firstElement = focusableElements?.[0] as HTMLElement
      const lastElement = focusableElements?.[
        focusableElements.length - 1
      ] as HTMLElement

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault()
              lastElement?.focus()
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault()
              firstElement?.focus()
            }
          }
        }
      }

      const handleEscapeKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsOpen(false)
        }
      }

      document.addEventListener('keydown', handleTabKey)
      document.addEventListener('keydown', handleEscapeKey)

      // Focus the first element when menu opens
      firstElement?.focus()

      return () => {
        document.body.style.overflow = 'unset'
        document.removeEventListener('keydown', handleTabKey)
        document.removeEventListener('keydown', handleEscapeKey)
        // Return focus to the open button when menu closes
        openButtonRef.current?.focus()
      }
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <nav
      className="container mx-auto pt-4 px-4 relative z-50"
      aria-label="Main"
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-60 focus:px-4 focus:py-2 focus:bg-white focus:text-indigo-700 focus:shadow-lg focus:rounded-md"
      >
        Skip to main content
      </a>
      <div className="flex items-center justify-between py-3 gap-[103px] h-[68px]">
        <div className="flex items-center gap-[103px]">
          <Button href="/" aria-label="Home">
            <img
              src="/img/stylenest.svg"
              alt="Stylenest logo"
              className="z-50 relative"
              width="120"
              height="32"
            />
          </Button>
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {MENU_ITEMS.map((item) => (
              <li key={item.label}>
                <Button href={item.href}>{item.label}</Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <CartButton count={0} />
          {/* Hamburger Button */}
          <button
            ref={openButtonRef}
            className="md:hidden p-2 text-neutral-600 hover:text-neutral-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/12 rounded"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 3.33333H17.5V5H2.5V3.33333ZM2.5 9.16667H17.5V10.8333H2.5V9.16667ZM2.5 15H17.5V16.6667H2.5V15Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden z-40 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Sidebar Menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
        className={`fixed top-0 bottom-0 left-0 w-[90%] bg-white z-50 flex flex-col md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="container mx-auto px-4 pt-8 pb-4">
          <div className="flex items-center justify-between">
            <img src="/img/stylenest.svg" alt="Stylenest logo" />
            <button
              className="p-2 text-neutral-600 hover:text-neutral-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/12 rounded"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col gap-2 mt-6">
            {MENU_ITEMS.map((item) => (
              <li key={item.label}>
                <Button
                  href={item.href}
                  className="w-full justify-start text-sm px-3 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
