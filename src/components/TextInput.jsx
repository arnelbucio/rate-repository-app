import { StyleSheet, TextInput as NativeTextInput } from 'react-native'

const styles = StyleSheet.create({
  invalidInput: {
    borderColor: 'red'
  }
})

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style]

  if (error) {
    return <NativeTextInput style={[textInputStyle, styles.invalidInput]} {...props} />
  }

  return (
    <NativeTextInput style={textInputStyle} {...props} />
  )
}

export default TextInput
