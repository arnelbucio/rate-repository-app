import { View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import theme from '../theme'
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.appBar.background,
  },
  scrollview: {
    flexDirection: 'row' // seems unnecessary
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollview}>
        <AppBarTab text='Sign in' route='signin' />
        <AppBarTab text='Repositories' route='/' />
      </ScrollView>
    </View>
  );
};

export default AppBar;
