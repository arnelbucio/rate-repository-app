import { useEffect, useState } from 'react'

const useRepositorySort = initialOrder => {
  const [order, setOrder] = useState(initialOrder)
  const [orderBy, setOrderBy] = useState('CREATED_AT')
  const [orderDirection, setOrderDirection] = useState('DESC')

  useEffect(() => {
    switch (order) {
      case 'highest_rated':
        setOrderBy('RATING_AVERAGE')
        setOrderDirection('DESC')
        break
      case 'lowest_rated':
        setOrderBy('RATING_AVERAGE')
        setOrderDirection('ASC')
        break
      default:
        setOrderBy('CREATED_AT')
        setOrderDirection('DESC')
        break
    }
  }, [order])

  return [{ order, orderBy, orderDirection }, setOrder]
}

export default useRepositorySort
