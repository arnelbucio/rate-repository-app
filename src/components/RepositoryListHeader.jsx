import { View } from 'react-native'
import RepositorySearch from './RepositorySearch'
import RepositorySorter from './RepositorySorter'

const RepositoryListHeader = ({order, setOrder, searchQuery, setSearchQuery}) => {
  return (
    <View style={{
      padding: 10
    }}>
      <RepositorySearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <RepositorySorter order={order} setOrder={setOrder} />
    </View>
  )
}

export default RepositoryListHeader
