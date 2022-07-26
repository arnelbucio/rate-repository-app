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
    const props = this.props

    return (
      <RepositoryListHeader {...props}/>
    )
  }

  render() {
    const {repositories} = this.props
    const repositoryNodes = repositories
      ? repositories.edges.map(edge => edge.node)
      : []

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={this.renderHeader}
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
    orderBy,
    orderDirection,
    searchKeyword: debouncedSearchQuery
  }

  const { repositories } = useRepositories({
    variables
  })

  const handleSearchChange = (val) => {
    setSearchQuery(val)
  }

  return (
    <RepositoryListContainer
      repositories={repositories}
      navigate={navigate}
      order={order}
      setOrder={setOrder}
      searchQuery={searchQuery}
      setSearchQuery={handleSearchChange}
    />
  )
}

export default RepositoryList
