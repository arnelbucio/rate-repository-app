import Constants from 'expo-constants'
import { StyleSheet, View, Text } from 'react-native'


const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1
  }
})

const Main = () => {
  return (
    <View styles={styles.container}>
      <Text>Rate Repository Application</Text>
    </View>
  )
}

export default Main