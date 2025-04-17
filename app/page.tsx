import { Link } from '@/components'
import { Box, Container } from '@mui/material'

const commonLinkStyles = {
  color: 'white',
  textDecorationColor: 'white',
  display: 'block',
}

export default function HomePage() {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: 'url(/images/food-background2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Content */}
      {/* <Container>
        <Link href="/meals" sx={commonLinkStyles}>
          Meals
        </Link>

        <Link sx={commonLinkStyles} href="/meals/share">
          Share Meal
        </Link>

        <Link sx={commonLinkStyles} href="/community">
          Community
        </Link>
      </Container> */}
    </Box>
  )
}
