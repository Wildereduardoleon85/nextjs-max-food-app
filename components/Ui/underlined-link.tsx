import { AnchorHTMLAttributes } from 'react'
import { SxProps } from '@mui/material'
import { Link } from '../link'
import { LinkProps as MuiLinkProps } from '@mui/material/Link'
import { Theme } from '@emotion/react'

type UnderLinedLinkProps = MuiLinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    sx?: SxProps<Theme>
  }

export function UnderLinedLink({ sx = {}, ...props }: UnderLinedLinkProps) {
  return (
    <Link
      sx={[
        {
          whiteSpace: 'nowrap',
          color: 'white',
          textDecoration: 'none',
          fontFamily: 'var(--bebas-neue)',
          fontSize: 18,
          position: 'relative',
          textTransform: 'uppercase',
          '&:after': {
            content: '""',
            position: 'absolute',
            bottom: '-1px',
            left: 0,
            width: 0,
            height: '1px',
            backgroundColor: 'white',
            transition: 'all 0.2s ease',
          },
          '&:hover': {
            '&:after': {
              width: '100%',
            },
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  )
}
