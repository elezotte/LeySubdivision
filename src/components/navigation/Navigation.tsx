import Box from '@mui/material/Box'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { navItemStyles, styles } from './navigation.styles'

interface NavigationProps {
  children: React.ReactNode
}
const logoDivisor = 13

const navItems = [
  {
    id: 'about',
    path: '/',
    label: 'About',
  },
  {
    id: 'documents',
    path: '/documents',
    label: 'Documents',
  },
  {
    id: 'contacts',
    path: '/contacts',
    label: 'Contacts',
  },
  {
    id: 'information',
    path: '/information',
    label: 'Information',
  },
  {
    id: 'weather',
    path: '/weather',
    label: 'Weather',
  },
]

const Navigation: React.FC<NavigationProps> = ({
  children,
}: NavigationProps) => {
  const router = useRouter()
  const handleClick = (path: string) => () => router.push(path)

  return (
    <>
      <Box sx={styles.container}>
        <Box>
          <Image
            alt="ley logo"
            priority
            height={Math.round(350 / logoDivisor)}
            width={Math.round(362 / logoDivisor)}
            src="/logo.fat.png"
          />
        </Box>
        <Box sx={styles.leyText}>Ley Subdivision</Box>
        {navItems.map((navItem) => (
          <Link
            href={navItem.path}
            key={navItem.id}
            style={{
              ...(router.pathname === navItem.path
                ? navItemStyles.selected
                : navItemStyles.notSelected),
            }}
            onClick={handleClick(navItem.path)}
          >
            {navItem.label}
          </Link>
        ))}
      </Box>
      {children}
    </>
  )
}

export default Navigation
