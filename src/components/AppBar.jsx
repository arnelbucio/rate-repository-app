import { View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import theme from '../theme'
import AppBarTab from './AppBarTab'
import { useQuery } from '@apollo/client'
import { GET_CURRENT_USER } from '../graphql/queries'
import useSignOut from '../hooks/useSignOut'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.appBar.background,
  },
  scrollview: {
    flexDirection: 'row'
  }
})

const AppBar = () => {
  const me = useQuery(GET_CURRENT_USER)
  const signOut = useSignOut()

  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollview}>
        <AppBarTab to='/'>Repositories</AppBarTab>
        {me.data?.me?.id
          ? <>
              <AppBarTab to='/reviews/new'>Create a review</AppBarTab>
              <AppBarTab to='/reviews/'>My reviews</AppBarTab>
              <AppBarTab to='' onPress={signOut}>Sign out</AppBarTab>
            </>
          : <>
              <AppBarTab to='/signin'>Sign in</AppBarTab>
              <AppBarTab to='/signup'>Sign up</AppBarTab>
            </>
        }
      </ScrollView>
    </View>
  )
}

export default AppBar
