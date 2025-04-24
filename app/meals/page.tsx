import { Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function MealsPage() {
  const router = useRouter()

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const onPopState = (e: PopStateEvent) => {
      // Prevent navigation on back swipe
      router.push(router.pathname)
    }

    window.addEventListener('popstate', onPopState)

    return () => {
      window.removeEventListener('popstate', onPopState)
    }
  }, [router])

  return (
    <Typography variant="h1" mt={20}>
      Meals Page
    </Typography>
  )
}
