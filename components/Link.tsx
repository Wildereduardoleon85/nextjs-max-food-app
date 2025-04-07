'use client'

import NextLink from 'next/link'
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link'
import { AnchorHTMLAttributes } from 'react'

type NextMuiLinkProps = MuiLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>

export default function Link({ href, ...other }: NextMuiLinkProps) {
  return <MuiLink component={NextLink} href={href} {...other} />
}
