import Button from '../../components/Button'

interface CartButtonProps {
  count?: number
}

export default function CartButton({ count = 0 }: CartButtonProps) {
  return (
    <div className="relative">
      <Button
        href="#"
        className="size-6 text-neutral-600 hover:text-neutral-900"
        aria-label={`Cart, ${count} items`}
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path
            d="M6.50488 2H17.5049C17.8196 2 18.116 2.14819 18.3049 2.4L21.0049 6V21C21.0049 21.5523 20.5572 22 20.0049 22H4.00488C3.4526 22 3.00488 21.5523 3.00488 21V6L5.70488 2.4C5.89374 2.14819 6.19013 2 6.50488 2ZM19.0049 8H5.00488V20H19.0049V8ZM18.5049 6L17.0049 4H7.00488L5.50488 6H18.5049ZM9.00488 10V12C9.00488 13.6569 10.348 15 12.0049 15C13.6617 15 15.0049 13.6569 15.0049 12V10H17.0049V12C17.0049 14.7614 14.7663 17 12.0049 17C9.24346 17 7.00488 14.7614 7.00488 12V10H9.00488Z"
            fill="currentColor"
          />
        </svg>
      </Button>
      {count > 0 && (
        <span className="absolute -top-2 -right-2 flex size-[18px] items-center justify-center rounded-full bg-indigo-700 text-xs font-semibold text-white ring-2 ring-white">
          {count > 9 ? '9+' : count}
        </span>
      )}
    </div>
  )
}
