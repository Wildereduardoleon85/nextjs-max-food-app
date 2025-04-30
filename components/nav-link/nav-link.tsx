'use client'

import { classNames } from '@/lib'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './nav-link.module.css'

type NavLinkProps = LinkProps & {
  children: React.ReactNode
  href: string
}

export function NavLink({ href, children, ...props }: NavLinkProps) {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={classNames([
        styles.link,
        pathname.startsWith(href) && styles.active,
      ])}
      {...props}
    >
      {children}
    </Link>
  )
}
