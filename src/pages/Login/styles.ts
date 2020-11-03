import { Col, Input, Row } from 'antd'
import styled from 'styled-components'
import BackgroundImage from '../../assets/login-page.jpg'

export const ContentContainer = styled(Row)`
  height: 100vh;
`

export const LeftImageSection = styled(Col).attrs(() => ({
  span: 12,
}))`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 60px;
  background-image: url(${BackgroundImage});
`

export const RightLoginSection = styled(Col).attrs(() => ({
  span: 12,
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 100px;
`
export const InputBox = styled(Input).attrs(() => ({
  size: 'large',
}))`
  max-width: 400px;
  width: 100%;
`
