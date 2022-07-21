import { View, StyleSheet } from 'react-native'
import { kFormatter } from '../utils'
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

export default ReposityStatCard
