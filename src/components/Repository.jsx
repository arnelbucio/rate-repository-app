import { FlatList } from 'react-native'
import { useParams } from 'react-router-native'
import ItemSeparator from './ItemSeparator'
import RepositoryItem from './RepositoryItem'
import ReviewItem from './ReviewItem'
import useRepository from '../hooks/useRepository'

const Repository = () => {
  const { id } = useParams()
  const { repository, loading, fetchMore } = useRepository({
    repositoryId: id,
    first: 4
  })
  const reviews = repository?.reviews
      ? repository.reviews.edges.map(edge => edge.node)
      : []

  const onEndReached = () => {
    fetchMore()
  }

  if (loading) {
    return null
  }

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({id}) => id}
      ListHeaderComponent={() => {
        return (
          <>
            <RepositoryItem repository={repository} />
            <ItemSeparator />
          </>
        )
      }}
      ItemSeparatorComponent={ItemSeparator}
      onEndReachedThreshold={0.2}
      onEndReached={onEndReached}
    />
  )
}

export default Repository
