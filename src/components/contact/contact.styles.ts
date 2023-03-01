import { colors, font, MuiSxStyles } from 'components/theme/themeSettings'

export const styles: MuiSxStyles = {
  buttons: {
    marginTop: 4,
  },
  container: {
    maxWidth: 640,
  },
  text: {
    fontSize: {
      xs: font.size.MD,
      md: font.size.ML,
    },
    marginBottom: {
      xs: 2,
      md: 4,
    },
  },
  input: {
    marginBottom: 2,
  },
  sending: {
    position: 'absolute',
    right: 48,
    top: 7,
  },
  sent: {
    color: colors.grass.medium,
    fontWeight: font.weight.SEMIBOLD,
    marginBottom: 2,
  },
  submitButton: {
    marginLeft: 2,
  },
  submitButtonContainer: {
    position: 'relative',
    textAlign: 'right',
  },
}
