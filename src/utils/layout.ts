import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme()

export const spacingHelper = (level: number): string => `${theme.spacing(level)}px`
