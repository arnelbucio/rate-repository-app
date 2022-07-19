import { StyleSheet, Pressable, Text } from 'react-native';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  tab: {
    padding: 15,
  },
  tabText: {
    fontWeight: '700',
    color: '#fff'
  }
});

const AppBarTab = ({ text, route }) => {
  const onPressFunction = () => {
  };

  return (
    <Pressable onPress={onPressFunction} style={styles.tab}>
      <Link to={route}>
        <Text style={styles.tabText}>{text}</Text>
      </Link>
    </Pressable>
  )
};

export default AppBarTab;