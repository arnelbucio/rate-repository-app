import { useMutation } from '@apollo/client'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-native'
import * as yup from 'yup'
import { CREATE_USER } from '../graphql/queries'
import useSignIn from '../hooks/useSignIn'
import SignUpForm from './SignUpForm'

const initialValues = {
  username: '',
  password: '',
  passwordConfirm: '',
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, 'Username is too short')
    .max(30, 'Username is too long')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password is too short')
    .max(50, 'Password is too long')
    .required('Password is required'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords don\'t match')
    .required('Password confirm is required')
})

export const SignUpContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

const SignUp = () => {
  const [signIn] = useSignIn()
  const [createUser] = useMutation(CREATE_USER)
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password, passwordConfirm } = values

    if (password !== passwordConfirm) {
      console.log('Passwords do not match')
      navigate('/signup')
    }

    try {
      await createUser({
        variables: {
          user: {
            username, password
          }
        }
      })
      await signIn({ username, password })
      navigate('/')
    } catch (e) {
      console.log(e)
    }
  }

  return <SignUpContainer onSubmit={onSubmit} />
}

export default SignUp
