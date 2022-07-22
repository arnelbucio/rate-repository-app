import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { useParams } from 'react-router-native'
import { GET_REPOSITORY } from '../graphql/queries'
import ItemSeparator from './ItemSeparator'
import RepositoryItem from './RepositoryItem'
import ReviewItem from './ReviewItem'

const Repository = () => {
  const { id } = useParams()
  const [reviews, setReviews] = useState([])
  const { data, loading } = useQuery(GET_REPOSITORY, {
    variables: {
      repositoryId: id,
    },
    fetchPolicy: 'cache-and-network',
  })

  useEffect(() => {
    if (!loading) {
      const reviews = data.repository.reviews.edges
      setReviews(reviews.map(review => review.node))
    }
  }, [loading])

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
            <RepositoryItem repository={data.repository} />
            <ItemSeparator />
          </>
        )
      }}
      ItemSeparatorComponent={ItemSeparator}
    />
  )
}

export default Repository
