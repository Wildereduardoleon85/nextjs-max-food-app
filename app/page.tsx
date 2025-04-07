import Link from '@/components/Link'
import { Container, Typography } from '@mui/material'

export default function HomePage() {
  return (
    <Container component="main">
      <Typography component="h1" variant="h3">
        Time to get started!
      </Typography>

      <Typography>
        <Link href="/meals">Meals</Link>
      </Typography>
      <Typography>
        <Link href="/meals/share">Share Meal</Link>
      </Typography>
      <Typography>
        <Link href="/community">Community</Link>
      </Typography>
    </Container>
  )
}
