'use client'

import { Box, Button, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

export default function MealsPage() {
  const [number, setNumber] = useState<number>(0)

  useEffect(() => {
    // Push fake state to prevent back navigation
    history.pushState(null, '', window.location.href)

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handlePopState = (e: PopStateEvent) => {
      // Prevent back by immediately pushing the same state again
      history.pushState(null, '', window.location.href)
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  return (
    <>
      <Typography variant="h1" mt={20}>
        Meals Page
      </Typography>
      <Box>{number}</Box>
      <Button onClick={() => setNumber(number + 1)}>Add</Button>
    </>
  )
}
