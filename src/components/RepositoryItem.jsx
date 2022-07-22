import { View, Image, StyleSheet } from 'react-native'
import { openURL } from 'expo-linking'
import Text from './Text'
import theme from '../theme'
import Button from './Button'
import RepositoryStatCard from './RepositoryStatCard'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
  },
  subheader: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexShrink: 1
  },
  avatar: {
    width: 66,
    height: 58,
    borderRadius: 4,
    marginRight: 20
  },
  name: {
    marginBottom: 5,
  },
  description: {
    marginBottom: 5,
    flex: 1,
    flexWrap: 'wrap'
  },
  language: {
    backgroundColor: theme.colors.primary,
    color: '#fff',
    padding: 5,
    borderRadius: 4
  },
  statsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-around'
  }
})

const RepositoryItem = ({ repository, showGithubButton }) => {
  // console.log('test', repository)
  return (
    <View testID='repositoryItem' style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{
            uri: repository.ownerAvatarUrl
          }}
        />
        <View style={styles.subheader}>
          <Text style={styles.name} fontWeight="bold" fontSize="subheading">{repository.fullName}</Text>
          <Text style={styles.description} color="textSecondary">{repository.description}</Text>
          <Text style={styles.language}>{repository.language}</Text>
        </View>
      </View>
      <View testID='repositoryItemStats' style={styles.statsContainer}>
        <RepositoryStatCard text='Stars' count={repository.stargazersCount} />
        <RepositoryStatCard text='Forks' count={repository.forksCount} />
        <RepositoryStatCard text='Reviews' count={repository.reviewCount} />
        <RepositoryStatCard text='Rating' count={repository.ratingAverage} />
      </View>
      {showGithubButton &&
        <Button onPress={(() => openURL(repository.url))}>
          Open in Github
        </Button>
      }
    </View>
  )
}

export default RepositoryItem
