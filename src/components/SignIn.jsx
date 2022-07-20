import { Formik } from 'formik'
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

const SignIn = () => {
  const [signIn] = useSignIn()

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      const { data } = await signIn({ username, password })
      console.log(data)
    } catch (e) {
      console.log(e)
    }

  }

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

export default SignIn
