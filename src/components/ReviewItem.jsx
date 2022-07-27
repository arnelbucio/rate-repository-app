import { View, StyleSheet } from 'react-native'
import Text from './Text'
import theme from '../theme'
import { format } from 'date-fns'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
  },
  ratingContainer: {
    borderColor: theme.colors.primary,
    borderWidth: 3,
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },
  subheader: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexShrink: 1
  },
  name: {
    marginBottom: 2,
  },
  text: {
    marginBottom: 5,
    flex: 1,
    flexWrap: 'wrap'
  },
})

const ReviewItem = ({ review, repoAsTitle }) => {
  const date = format(new Date(review.createdAt), 'MMM dd, yyyy')

  return (
    <View testID='reviewItem' style={styles.container}>
      <View style={styles.header}>
        <View style={styles.ratingContainer}>
          <Text color='primary' fontSize='subheading' fontWeight='bold'>{review.rating}</Text>
        </View>
        <View style={styles.subheader}>
          <Text style={styles.name} fontWeight='bold' fontSize='subheading'>{repoAsTitle ? review.repository.fullName : review.user.username}</Text>
          <Text color='textSecondary'>{date}</Text>
          <Text style={styles.text}>{review.text}</Text>
        </View>
      </View>
    </View>
  )
}

export default ReviewItem
