import React, { useState } from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { loginSuccessAction } from '../../actions/auth'
import { ContentContainer, InputBox, LeftImageSection, RightLoginSection, Title } from '../styles'
import { useFormik } from 'formik'
import { login } from '../../service/auth.service'
import { useNavigate } from 'react-router-dom'
import { Button, Grid } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

interface Props {
  dispatchLoginSuccessAction: (username: string) => void
}

interface SignInValues {
  username: string
  password: string
}

const Login = (props: Props) => {
  //TODO: Use yup to validate form

  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')

  const { handleSubmit, handleChange, isSubmitting } = useFormik<SignInValues>({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        const response = await login(values.username, values.password)
        props.dispatchLoginSuccessAction(response.username)
        navigate('/')
      } catch (error) {
        if (error.response.status === 401) {
          setErrorMessage('Unable to log in with provided credentials.')
        } else {
          setErrorMessage('Oops, something went wrong, please try again.')
        }
      }
    },
  })

  return (
    <ContentContainer>
      <LeftImageSection />
      <RightLoginSection>
        <Title>Welcome&nbsp;to EmpireStock</Title>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3} direction='column'>
            <Grid item>
              <InputBox label='Username' name='username' onChange={handleChange} onFocus={() => setErrorMessage('')} />
            </Grid>
            <Grid item>
              <InputBox label='Password' name='password' type='password' onChange={handleChange} />
            </Grid>
            {errorMessage && (
              <Grid item>
                <Alert severity='error'>{errorMessage}</Alert>
              </Grid>
            )}
            <Grid item>
              <Button type='submit' variant='contained' color='primary' disabled={isSubmitting}>
                Sign In
              </Button>
            </Grid>
          </Grid>
        </form>
      </RightLoginSection>
    </ContentContainer>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatchLoginSuccessAction: (username: string) => dispatch(loginSuccessAction(username)),
})

export default connect(null, mapDispatchToProps)(Login)
