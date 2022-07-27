import { FlatList } from 'react-native'
import ItemSeparator from './ItemSeparator'
import ReviewItem from './ReviewItem'
import { useQuery } from '@apollo/client'
import { GET_CURRENT_USER } from '../graphql/queries'

const MyReviews = () => {
  const { data, loading } = useQuery(GET_CURRENT_USER, {
    variables: {
      includeReviews: true
    },
    fetchPolicy: 'cache-and-network',
  })

  const reviews = data?.me.reviews
      ? data?.me.reviews.edges.map(edge => edge.node)
      : []

  if (loading) {
    return null
  }

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} repoAsTitle={true} />}
      keyExtractor={({id}) => id}
      ItemSeparatorComponent={ItemSeparator}
    />
  )
}

export default MyReviews
