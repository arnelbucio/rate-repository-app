import { useMutation } from '@apollo/client'
import { Formik } from 'formik'
import { StyleSheet, View } from 'react-native'
import { useNavigate } from 'react-router-native'
import * as yup from 'yup'
import { CREATE_REVIEW } from '../graphql/queries'
import theme from '../theme'
import Button from './Button'
import FormikTextInput from './FormikTextInput'

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: ''
}

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Repository owner name is required'),
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number()
    .typeError('Rating must be a number')
    .required('Rating is required')
    .min(0, 'Rating should be between 0 and 100')
    .max(100, 'Rating should be between 0 and 100'),
  text: yup
    .string()
    .nullable()
})

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  input: {
    color: theme.colors.textSecondary,
    borderColor: theme.colors.textSecondary,
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 5,
    marginTop: 5,
    padding: 10
  },
})

const ReviewForm = () => {
  const navigate = useNavigate
  const [createReview, { data }] = useMutation(CREATE_REVIEW)

  const onSubmit = async ({ownerName, repositoryName, rating, text}) => {
    const review = {
      ownerName,
      repositoryName,
      rating: parseInt(rating),
      text
    }

    try {
      await createReview({
        variables: {
          review
        }
      })
      console.log(data)
      navigate(`/${data.repositoryId}`)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput
            name='ownerName'
            placeholder='Repository owner name'
            style={styles.input}
          />
          <FormikTextInput
            name='repositoryName'
            placeholder='Repository name'
            style={styles.input}
          />
          <FormikTextInput
            name='rating'
            placeholder='Rating between 0 and 100'
            keyboardType='numeric'
            type='number'
            style={styles.input}
          />
          <FormikTextInput
            name='text'
            placeholder='Review'
            style={styles.input}
          />
          <Button onPress={handleSubmit}>Create a review</Button>
        </View>
      )}
    </Formik>
  )
}

export default ReviewForm
