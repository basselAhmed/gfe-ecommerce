import { type ComponentProps } from 'react'

type BaseProps = {
  children: React.ReactNode
  className?: string
}

type ButtonAsButton = BaseProps &
  Omit<ComponentProps<'button'>, keyof BaseProps> & {
    href?: never
  }

type ButtonAsLink = BaseProps &
  Omit<ComponentProps<'a'>, keyof BaseProps> & {
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsLink

export default function Button({ className, ...props }: ButtonProps) {
  const baseStyles =
    'flex justify-center items-center gap-1.5 font-medium text-base text-neutral-600 hover:text-neutral-900 focus:text-neutral-900 rounded outline-none shadow-indigo-500/24 focus:shadow-focus-ring px-0.5 disabled:text-neutral-400 disabled:pointer-events-none cursor-pointer transition-colors'

  const combinedClassName = `${baseStyles} ${className || ''}`.trim()

  if (props.href) {
    return (
      <a className={combinedClassName} {...(props as ComponentProps<'a'>)}>
        {props.children}
      </a>
    )
  }

  return (
    <button
      className={combinedClassName}
      {...(props as ComponentProps<'button'>)}
    >
      {props.children}
    </button>
  )
}
