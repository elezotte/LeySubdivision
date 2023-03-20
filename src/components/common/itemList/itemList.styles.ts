import {
  colors,
  font,
  MuiSxStyles,
  ReactStyles,
} from 'components/theme/themeSettings'

export const styles: MuiSxStyles = {
  listIconContainer: {
    color: colors.gray.medium,
    minWidth: 28,
  },
  listIcon: {
    fontSize: font.size.LG,
  },
  list: {
    fontSize: {
      xs: font.size.MD,
      md: font.size.MD,
    },
    marginLeft: 1,
    marginBottom: 4,
  },
  listContainer: {
    marginBottom: 6,
  },
}

export const reactStyles: ReactStyles = {
  link: {
    textDecoration: 'none',
  },
}
