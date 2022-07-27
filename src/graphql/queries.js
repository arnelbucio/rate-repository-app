import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
  query Repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      totalCount
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
      edges {
        node {
          id
          name
          ownerName
          createdAt
          fullName
          reviewCount
          ratingAverage
          forksCount
          stargazersCount
          description
          ownerAvatarUrl
          language
        }
        cursor
      }
    }
  }
`

export const GET_REPOSITORY = gql`
  query Repository($repositoryId: ID!, $first: Int, $after: String) {
    repository(id: $repositoryId) {
      id
      name
      ownerName
      url
      fullName
      reviewCount
      ratingAverage
      forksCount
      stargazersCount
      description
      ownerAvatarUrl
      language
      reviews(first: $first, after: $after) {
        totalCount
        edges {
          node {
            id
            text
            rating
            createdAt
            repositoryId
            repository {
              fullName
            }
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
`

export const AUTHENTICATE = gql`
  mutation Authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`

export const ME = gql`
  {
    me {
      id
      username
    }
  }
`

export const CREATE_REVIEW = gql`
  mutation CreateReview($review: CreateReviewInput) {
    createReview(review: $review) {
      repositoryId
    }
  }
`

export const MY_REVIEWS = gql`
  query Me($first: Int, $after: String) {
    me {
      reviews(first: $first, after: $after) {
        totalCount
        pageInfo {
          hasNextPage
          endCursor
          startCursor
        }
        edges {
          cursor
          node {
            id
            text
            rating
            createdAt
            repositoryId
            repository {
              fullName
            }
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`
