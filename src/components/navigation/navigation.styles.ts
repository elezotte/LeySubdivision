import {
  colors,
  font,
  MuiSxStyles,
  ReactStyles,
} from 'components/theme/themeSettings'

const commonNavItemStyles: React.CSSProperties = {
  fontFamily: font.family.logo,
  fontWeight: 400,
  fontSize: font.size.ML,
  paddingTop: 16,
  paddingBottom: 16,
  paddingLeft: 8,
  paddingRight: 8,
  marginLeft: 12,
  marginRight: 12,
  marginBottom: -2,
  textDecoration: 'none',
  borderBottomStyle: 'solid',
  borderBottomWidth: 2,
}

export const navItemStyles: ReactStyles = {
  selected: {
    borderBottomColor: colors.gray.medium,
    color: colors.gray.dark,
    ...commonNavItemStyles,
  },
  notSelected: {
    borderBottomColor: 'transparent',
    color: colors.gray.medium,
    ...commonNavItemStyles,
  },
}

export const styles: MuiSxStyles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 3.5,
    borderBottom: `2px solid ${colors.gray.xlight}`,
  },
  leyText: {
    fontFamily: font.family.logo,
    marginLeft: 1,
    marginRight: 6,
    fontSize: font.size.LG,
    fontWeight: 700,
    color: '#000',
  },
  pageContent: {
    padding: 4,
  },
}
