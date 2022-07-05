import { StyleSheet, Pressable, Text } from 'react-native';

const styles = StyleSheet.create({
  tab: {
    padding: 15,
  },
  tabText: {
    fontWeight: '700',
    color: '#fff'
  }
});

const AppBarTab = ({ text }) => {
  const onPressFunction = () => {
  };

  return (
    <Pressable onPress={onPressFunction} style={styles.tab}>
      <Text style={styles.tabText}>{text}</Text>
    </Pressable>
  )
};

export default AppBarTab;