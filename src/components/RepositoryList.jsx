import { FlatList, Pressable } from 'react-native'
import { useNavigate } from 'react-router-native'
import useRepositories from '../hooks/useRepositories'
import useRepositorySort from '../hooks/useRepositorySort'
import ItemSeparator from './ItemSeparator'
import RepositoryItem from './RepositoryItem'
import RepositorySorter from './RepositorySorter'
import Text from './Text'

export const RepositoryListContainer = ({ repositories, navigate, order, setOrder }) => {

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  const renderItem = ({ item }) => (
    <Pressable onPress={(() => navigate(`/${item.id}`))}>
      <RepositoryItem repository={item} />
    </Pressable>
  )

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ListHeaderComponent={() => {
        return (
          <RepositorySorter order={order} setOrder={setOrder} />
        )
      }}
    />
  )
}

const RepositoryList = () => {
  const navigate = useNavigate()
  const [{ order, orderBy, orderDirection }, setOrder] = useRepositorySort('latest')
  const variables = {
    orderBy,
    orderDirection
  }
  const { repositories, loading } = useRepositories({
    variables
  })

  if (loading) {
    return <Text>Loading</Text>
  }
  return <RepositoryListContainer

    repositories={repositories}
    navigate={navigate}
    order={order}
    setOrder={setOrder}
  />
}

export default RepositoryList
