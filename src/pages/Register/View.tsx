import React, { ReactElement, useState } from 'react'
import { ContentContainer, InputBox, LeftImageSection, RightLoginSection, Title } from '../styles'
import { Button, Grid } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { register } from '../../service/auth.service'

interface RegisterValues {
  email: string
  username: string
  password: string
}

const Register = (): ReactElement => {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')

  const { handleSubmit, handleChange, isSubmitting } = useFormik<RegisterValues>({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        const { email, username, password } = values
        await register(username, email, password)
        navigate('/')
      } catch (error) {
        setErrorMessage('Oops, something went wrong, please try again.')
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
              <InputBox label='Email' name='email' type='email' onChange={handleChange} />
            </Grid>
            <Grid item>
              <InputBox label='Username' name='username' onChange={handleChange} />
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
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
      </RightLoginSection>
    </ContentContainer>
  )
}

export default Register
