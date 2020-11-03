import React, { useState } from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { loginSuccessAction } from '../../actions/auth'
import { AppState } from '../../types/AppStateContext'
import { ContentContainer, InputBox, LeftImageSection, RightLoginSection } from './styles'
import { Button, Form, Typography } from 'antd'

interface Props {
  isLoggedIn: boolean
  onClick: () => void
}

const Login = (props: Props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // const [loading, setLoadding] = useState(false)

  //TODO: Use formik and yup to validate form
  //TODO: dispatch action for true login result

  const onSubmit = (values) => {
    console.log(values, username, password)
  }

  return (
    <ContentContainer>
      <LeftImageSection />
      <RightLoginSection>
        <Typography.Title level={2}>Welcome to EmpireStock</Typography.Title>
        <Form layout='vertical' onFinish={onSubmit}>
          <Form.Item label='Username' name='username'>
            <InputBox onChange={(e) => setUsername(e.target.value)} />
          </Form.Item>
          <Form.Item label='Password' name='password'>
            <InputBox type='password' onChange={(e) => setPassword(e.target.value)} />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit' size='middle'>
              Sign in
            </Button>
          </Form.Item>
        </Form>
      </RightLoginSection>
    </ContentContainer>
  )
}

const mapStateToProps = (state: AppState) => ({
  isLoggedIn: state.user.isLoggedIn,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onClick: () => dispatch(loginSuccessAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
