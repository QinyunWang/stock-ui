import React, { ReactElement, useState } from 'react'
import { ContentContainer, InputBox, LeftImageSection, RightLoginSection, Title } from '../styles'
import { Button, Grid } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { register } from '../../service/auth.service'
import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  username: Yup.string()
    .required()
    .min(6, 'Username must longer than six characters')
    .max(16, 'Username must shorter than 16 characters'),
  password: Yup.string().required(),
})

interface RegisterValues {
  email: string
  username: string
  password: string
}

const Register = (): ReactElement => {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')

  const { handleSubmit, handleChange, handleBlur, isSubmitting, touched, errors } = useFormik<RegisterValues>({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    validationSchema: SignupSchema,
    validateOnBlur: true,
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
              <InputBox
                label='Email'
                name='email'
                type='email'
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched?.email && !!errors?.email}
                helperText={touched?.email && errors?.email}
              />
            </Grid>
            <Grid item>
              <InputBox
                label='Username'
                name='username'
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched?.username && !!errors?.username}
                helperText={touched?.username && errors?.username}
              />
            </Grid>
            <Grid item>
              <InputBox
                label='Password'
                name='password'
                type='password'
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched?.password && !!errors?.password}
                helperText={touched?.password && errors?.password}
              />
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
