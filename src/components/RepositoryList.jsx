import { FlatList, Pressable } from 'react-native'
import { useNavigate } from 'react-router-native'
import useRepositories from '../hooks/useRepositories'
import ItemSeparator from './ItemSeparator'
import RepositoryItem from './RepositoryItem'

export const RepositoryListContainer = ({ repositories, navigate }) => {
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
    />
  )
}

const RepositoryList = () => {
  const { repositories } = useRepositories()
  const navigate = useNavigate()

  return <RepositoryListContainer repositories={repositories} navigate={navigate} />
}

export default RepositoryList
