import { Box } from '@mui/material'
import Image from 'next/image'

const divisor = 5.5

export default function Home() {
  return (
    <>
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
          src="/logo.png"
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
      <div
        style={{
          zIndex: -1,
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <Image
          alt="ley subdivision"
          priority
          fill
          src="/images/bg1.jpg"
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
    </>
  )
}
