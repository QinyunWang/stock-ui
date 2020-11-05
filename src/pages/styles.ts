import styled from 'styled-components'
import BackgroundImage from '../assets/login-page.jpg'
import { Grid, TextField, Typography } from '@material-ui/core'

export const Title = styled(Typography).attrs(() => ({
  variant: 'h3',
}))`
  margin-bottom: 32px;
`

export const ContentContainer = styled(Grid).attrs(() => ({
  container: true,
}))`
  height: 100vh;
`

export const LeftImageSection = styled(Grid).attrs(() => ({
  item: true,
  xs: 6,
}))`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 60px;
  background-image: url(${BackgroundImage});
`

export const RightLoginSection = styled(Grid).attrs(() => ({
  item: true,
  xs: 6,
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 100px;
`
export const InputBox = styled(TextField).attrs(() => ({
  variant: 'outlined',
  color: 'primary',
}))`
  max-width: 400px;
  width: 100%;
`
