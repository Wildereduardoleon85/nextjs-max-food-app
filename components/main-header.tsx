import { AppBar, Box, List, ListItem, Toolbar } from '@mui/material'
import Image from 'next/image'
import { UnderLinedLink } from './Ui/underlined-link'

export function MainHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="absolute"
        sx={{
          backgroundColor: 'transparent',
          backgroundImage: 'none',
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              mt: 2,
              textTransform: 'uppercase',
            }}
          >
            <Image
              src="/logo.png"
              alt="grill with a cow on it"
              width={70}
              height={71}
            />
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
    </Box>
  )
}
