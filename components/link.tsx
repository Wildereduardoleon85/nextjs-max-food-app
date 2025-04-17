import NextLink from 'next/link'
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link'
import { AnchorHTMLAttributes } from 'react'

type NextMuiLinkProps = MuiLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>

export function Link({ href, ...other }: NextMuiLinkProps) {
  return <MuiLink component={NextLink} href={href} {...other} />
}
