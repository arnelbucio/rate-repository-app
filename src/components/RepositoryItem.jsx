import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';
import ReposityStatCard from './RepositoryStatCard';



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
    marginTop: 10,
    justifyContent: 'space-around'
  }
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{
            uri: item.ownerAvatarUrl
          }}
        />
        <View style={styles.subheader}>
          <Text style={styles.name} fontWeight="bold" fontSize="subheading">{item.fullName}</Text>
          <Text style={styles.description} color="textSecondary">{item.description}</Text>
          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <ReposityStatCard text='Stars' count={item.stargazersCount} />
        <ReposityStatCard text='Forks' count={item.forksCount} />
        <ReposityStatCard text='Reviews' count={item.reviewCount} />
        <ReposityStatCard text='Rating' count={item.ratingAverage} />
      </View>
    </View>
  );
};

export default RepositoryItem;
