import { Pressable, StyleSheet, View } from 'react-native'
import theme from '../theme'
import FormikTextInput from './FormikTextInput'
import Text from './Text'

const styles = StyleSheet.create({
  container: {
    padding: 5
  },
  input: {
    color: theme.colors.textSecondary,
    borderColor: theme.colors.textSecondary,
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 5,
    padding: 10
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center'
  }
})

const SignInForm = ({ onSubmit }) => {
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
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text style={styles.buttonText} fontWeight='bold'>Sign in</Text>
      </Pressable>
    </View>
  )
}

export default SignInForm