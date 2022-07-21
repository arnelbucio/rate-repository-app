import { Formik } from 'formik'
import { useNavigate } from 'react-router-native'
import * as yup from 'yup'
import useSignIn from '../hooks/useSignIn'
import SignInForm from './SignInForm'

const initialValues = {
  username: '',
  password: '',
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username is too short')
    .max(20, 'Username is too long')
    .required('Username is required'),
  password: yup
    .string()
    .min(4, 'Password is too short')
    .required('Password is required'),
})

export const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

const SignIn = () => {
  const [signIn] = useSignIn()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      await signIn({ username, password })
      navigate('/')
    } catch (e) {
      console.log(e)
    }
  }

  return <SignInContainer onSubmit={onSubmit} />
}

export default SignIn
