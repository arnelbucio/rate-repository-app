import { useMutation } from '@apollo/client'
import { AUTHENTICATE } from '../graphql/queries'

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE)

  const signIn = async ({ username, password }) => {
    return mutate({
      variables: {
        credentials: {
          username,
          password,
        },
      },
    })
  }

  return [signIn, result]
}

export default useSignIn
