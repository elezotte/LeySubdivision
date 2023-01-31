import { Box } from '@mui/material'
import Image from 'next/image'

const divisor = 5.5

export default function Home() {
  return (
    <Box
      sx={{
        marginTop: 30,
        textAlign: 'center',
      }}
    >
      <Image
        alt="ley logo"
        priority
        height={Math.round(500 / divisor)}
        width={Math.round(460 / divisor)}
        src="/ley.png"
      />
      <Box
        sx={{
          marginTop: 2,
          fontFamily: `'Roboto Slab', serif`,
          fontSize: 24,
          fontWeight: 500,
        }}
      >
        LeySubdivision.com
      </Box>
    </Box>
  )
}
