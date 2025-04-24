import { AppBar, Box, List, ListItem, Toolbar, Typography } from '@mui/material'
import { UnderLinedLink } from './Ui'
import Image from 'next/image'
import { bebasFont } from '@/lib/theme'

export function MainHeader() {
  return (
    <AppBar>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center">
          <Image
            src="/assets/logo.png"
            width={50}
            height={50}
            alt="a plate with food on it"
          />
          <Typography
            sx={{
              textTransform: 'uppercase',
              fontFamily: bebasFont,
              fontSize: 32,
              color: 'white',
              ml: 2,
            }}
          >
            next level food
          </Typography>
        </Box>

        <Box component="nav">
          <List sx={{ display: 'flex', mt: 2 }}>
            <ListItem>
              <UnderLinedLink href="/meals">browse meals</UnderLinedLink>
            </ListItem>

            <ListItem>
              <UnderLinedLink href="/community">foodies</UnderLinedLink>
            </ListItem>
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
