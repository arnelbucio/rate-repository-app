import { StyleSheet, View } from 'react-native'
import theme from '../theme'
import Button from './Button'
import FormikTextInput from './FormikTextInput'

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  input: {
    color: theme.colors.textSecondary,
    borderColor: theme.colors.textSecondary,
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 5,
    marginTop: 5,
    padding: 10
  },
})

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name='username'
        placeholder='Username'
        style={styles.input}
      />
      <FormikTextInput
        name='password'
        placeholder='Password'
        secureTextEntry={true}
        style={styles.input}
      />
      <FormikTextInput
        name='passwordConfirm'
        placeholder='Password confirmation'
        secureTextEntry={true}
        style={styles.input}
      />
      <Button onPress={onSubmit}>Sign up</Button>
    </View>
  )
}

export default SignUpForm
