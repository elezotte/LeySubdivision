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
    fontSize: font.size.ML,
  },
}
