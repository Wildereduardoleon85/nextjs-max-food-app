import { UnderLinedLink } from '@/components'
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography
            component="h1"
            textTransform="uppercase"
            fontFamily="var(--bebas-neue)"
            fontSize={42}
            lineHeight={1.2}
          >
            next level food for
            <br />
            next level foodies
          </Typography>
          <Typography variant="h2" fontSize={24} mt={2}>
            Taste & share food from all over the world.
          </Typography>
          <Box sx={{ mt: 2, display: 'flex' }}>
            <UnderLinedLink
              href="/community"
              sx={{
                color: 'primary.main',
                fontFamily: 'var(--roboto)',
                textTransform: 'none',
                fontWeight: 'bold',
                fontSize: 20,
                transition: 'all 0.3s ease',
                '&:after': { backgroundColor: 'primary.main', bottom: '-5px' },
              }}
            >
              Join the Community
            </UnderLinedLink>
            <Button
              component={Link}
              href="/meals"
              variant="contained"
              sx={{
                ml: 2,
                lineHeight: 1.5,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              Explore Meals
            </Button>
          </Box>
        </Box>
      </Box>
    </main>
  )
}
