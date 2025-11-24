import Button from '../../components/Button'
import { RiShoppingBag3Line } from 'react-icons/ri'

interface CartButtonProps {
  count?: number
}

export default function CartButton({ count = 0 }: CartButtonProps) {
  return (
    <div className="relative">
      <Button
        href="#"
        className="size-6 p-0! text-neutral-600 hover:text-neutral-900"
        aria-label={`Cart, ${count} items`}
      >
        <RiShoppingBag3Line className="w-full h-full" />
      </Button>
      {count > 0 && (
        <span className="absolute -top-2 -right-2 flex size-[18px] items-center justify-center rounded-full bg-indigo-700 text-xs font-semibold text-white ring-2 ring-white">
          {count > 9 ? '9+' : count}
        </span>
      )}
    </div>
  )
}
