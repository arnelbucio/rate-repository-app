import { StyleSheet, View } from 'react-native'
import { Link } from 'react-router-native'
import Text from './Text'

const styles = StyleSheet.create({
  tabContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  tabText: {
    color: '#fff'
  }
});

const AppBarTab = ({ children, ...props }) => {
  return (
    <Link {...props}>
      <View style={styles.tabContainer}>
        <Text fontWeight='bold' style={styles.tabText}>
          {children}
        </Text>
      </View>
    </Link>
  )
}

export default AppBarTab;