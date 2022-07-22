import { StyleSheet, View } from 'react-native'
import { Navigate, Route, Routes } from 'react-router-native'
import { StatusBar } from 'expo-status-bar'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import theme from '../theme';
import SignIn from './SignIn';
import Repository from './Repository'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  }
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} exact />
        <Route path='/signin' element={<SignIn />} exact />
        <Route path=':id' element={<Repository />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <StatusBar style='auto' />
    </View>
  )
}

export default Main