import { View, StyleSheet, Alert } from 'react-native'
import { useNavigate } from 'react-router-native'
import { format } from 'date-fns'
import Text from './Text'
import theme from '../theme'
import Button from './Button'
import { DELETE_REVIEW } from '../graphql/queries'
import { useMutation } from '@apollo/client'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 10
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
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
})

const ReviewItem = ({ review, isOwnReview, refetch }) => {
  const date = format(new Date(review.createdAt), 'MMM dd, yyyy')
  const [deleteReview] = useMutation(DELETE_REVIEW)

  const navigate = useNavigate()

  const handleDeleteReview = async () => {
    try {
      await deleteReview({
        variables: {
          deleteReviewId: review.id
        }
      })
      refetch()
    } catch (e) {
      console.log(e)
    }
  }

  const showDeleteAlert = () => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Delete',
          onPress: handleDeleteReview
        }
      ]
    )
  }

  return (
    <View testID='reviewItem' style={styles.container}>
      <View style={styles.header}>
        <View style={styles.ratingContainer}>
          <Text color='primary' fontSize='subheading' fontWeight='bold'>{review.rating}</Text>
        </View>
        <View style={styles.subheader}>
          <Text style={styles.name} fontWeight='bold' fontSize='subheading'>{isOwnReview ? review.repository.fullName : review.user.username}</Text>
          <Text color='textSecondary'>{date}</Text>
          <Text style={styles.text}>{review.text}</Text>
        </View>
      </View>
        {isOwnReview &&
          <View style={styles.footerContainer}>
            <Button onPress={(() => navigate(`/${review.repositoryId}`))}>
              View Repository
            </Button>
            <Button
              style={{backgroundColor: theme.colors.error}}
              onPress={showDeleteAlert}
            >
              Delete Review
            </Button>
          </View>
        }
    </View>
  )
}

export default ReviewItem
