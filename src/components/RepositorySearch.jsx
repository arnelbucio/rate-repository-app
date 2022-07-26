import { Searchbar } from 'react-native-paper'

const RepositorySearch = ({searchQuery, setSearchQuery}) => {
  return (
    <Searchbar
      placeholder='Search'
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  )
}

export default RepositorySearch
