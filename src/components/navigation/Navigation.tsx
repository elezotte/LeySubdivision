import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { styles } from './navigation.styles'

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

const Logo: React.FC = () => (
  <Box sx={{ display: 'flex' }}>
    <Image
      alt="ley logo"
      priority
      height={Math.round(350 / logoDivisor)}
      width={Math.round(362 / logoDivisor)}
      src="/logo.fat.png"
    />
    <Box sx={styles.leyText}>Ley Subdivision</Box>
  </Box>
)

const Navigation: React.FC<NavigationProps> = ({
  children,
}: NavigationProps) => {
  const router = useRouter()
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

  const handleClick = (path: string) => () => {
    handleCloseMenu()
    router.push(path)
  }
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <>
      <AppBar position="static" sx={styles.appBar}>
        <Toolbar disableGutters>
          <Box sx={styles.logoContainerButtons}>
            <Logo />
          </Box>
          <Box sx={styles.menuContainer}>
            <IconButton
              size="large"
              aria-haspopup="true"
              onClick={handleOpenMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseMenu}
              sx={styles.menu}
            >
              {navItems.map((navItem) => (
                <MenuItem
                  key={navItem.id}
                  onClick={handleClick(navItem.path)}
                  sx={{
                    ...(router.pathname === navItem.path
                      ? styles.selectedMenu
                      : styles.notSelectedMenu),
                  }}
                >
                  {navItem.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={styles.logoContainerMenu}>
            <Logo />
          </Box>
          <Box sx={styles.buttonContainer}>
            {navItems.map((navItem) => (
              <Button
                key={navItem.id}
                onClick={handleClick(navItem.path)}
                sx={{
                  ...(router.pathname === navItem.path
                    ? styles.selected
                    : styles.notSelected),
                }}
              >
                {navItem.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      {children}
    </>
  )
}

export default Navigation
