import { View, StyleSheet } from 'react-native'
import Text from './Text'

const styles = StyleSheet.create({
  statCard: {
    display: 'flex',
    alignItems: 'center'
  }
})

const ReposityStatCard = ({text, count}) => {
  return (
    <View style={styles.statCard}>
      <Text fontWeight="bold" fontSize="subheading">{kFormatter(count)}</Text>
      <Text color="textSecondary">{text}</Text>
    </View>
  )
}

const kFormatter = (num) => {
  return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

export default ReposityStatCard