import React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { loginSuccessAction } from '../../actions/auth'
import { AppState } from '../../types/AppStateContext'
import { ContentContainer, InputBox, LeftImageSection, RightLoginSection } from './styles'
import { Button, Form, Typography } from 'antd'
import { useFormik } from 'formik'
import { login } from '../../service/auth.service'

interface Props {
  isLoggedIn: boolean
  dispatchLoginSuccessAction: (username: string) => void
}

interface SignInValues {
  username: string
  password: string
}

const Login = (props: Props) => {
  //TODO: Use formik and yup to validate form
  //TODO: dispatch action for true login result

  const { handleSubmit, handleChange } = useFormik<SignInValues>({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        const response = await login(values.username, values.password)
        props.dispatchLoginSuccessAction(response.username)
      } catch {
        console.log('Failed')
      }
    },
  })

  return (
    <ContentContainer>
      <LeftImageSection />
      <RightLoginSection>
        <Typography.Title level={2}>Welcome to EmpireStock</Typography.Title>
        <Form layout='vertical' onFinish={handleSubmit}>
          <Form.Item label='Username' name='username'>
            <InputBox onChange={handleChange} />
          </Form.Item>
          <Form.Item label='Password' name='password'>
            <InputBox type='password' onChange={handleChange} />
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
  dispatchLoginSuccessAction: (username: string) => dispatch(loginSuccessAction(username)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
