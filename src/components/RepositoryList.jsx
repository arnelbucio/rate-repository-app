import React, { useState } from 'react'
import { FlatList, Pressable } from 'react-native'
import { useNavigate } from 'react-router-native'
import { useDebounce } from "use-debounce";
import useRepositories from '../hooks/useRepositories'
import useRepositorySort from '../hooks/useRepositorySort'
import ItemSeparator from './ItemSeparator'
import RepositoryItem from './RepositoryItem'
import RepositoryListHeader from './RepositoryListHeader';

export class RepositoryListContainer extends React.Component {
  renderItem = ({ item }) => (
    <Pressable onPress={(() => this.props.navigate(`/${item.id}`))}>
      <RepositoryItem repository={item} />
    </Pressable>
  )

  renderHeader = () => {
    return (
      <RepositoryListHeader {...this.props}/>
    )
  }

  render() {
    const {repositories, onEndReach} = this.props
    const repositoryNodes = repositories
      ? repositories.edges.map(edge => edge.node)
      : []
    // console.log(this.props)
    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={this.renderHeader}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.1}
      />
    )
  }
}

const RepositoryList = () => {
  const navigate = useNavigate()
  const [{ order, orderBy, orderDirection }, setOrder] = useRepositorySort('latest')
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);

  const variables = {
    first: 8,
    orderBy,
    orderDirection,
    searchKeyword: debouncedSearchQuery
  }
  console.log(variables)

  const { repositories, fetchMore } = useRepositories(variables)

  const onEndReach = () => {
    console.log('fetch')
    fetchMore()
  }

  const handleSearchChange = (val) => {
    setSearchQuery(val)
  }

  return (
    <RepositoryListContainer
      repositories={repositories}
      onEndReach={onEndReach}
      navigate={navigate}
      order={order}
      setOrder={setOrder}
      searchQuery={searchQuery}
      setSearchQuery={handleSearchChange}
    />
  )
}

export default RepositoryList
