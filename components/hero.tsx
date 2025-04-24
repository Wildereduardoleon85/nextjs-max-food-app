import { Box } from '@mui/material'

export function Hero() {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: 'url(/images/food-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: -2,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          backgroundColor: 'rgba(0,0,0,0.7)',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: -1,
        }}
      />
    </Box>
  )
}
