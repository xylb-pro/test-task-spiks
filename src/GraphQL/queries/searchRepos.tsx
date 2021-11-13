import { gql } from '@apollo/client';

export const SEARCH_REPOS = gql`
  query SearchRepos($repoName: String!, $cursor: String) {
    search(query: $repoName, type: REPOSITORY, after: $cursor, first: 10) {
      nodes {
        ... on Repository {
          name
          description
          primaryLanguage {
            name
          }
          forkCount
          nameWithOwner
          stargazerCount
          owner {
            avatarUrl
            url
            login
          }
          url
        }
      }
      pageInfo {
        endCursor
        startCursor
        hasPreviousPage
        hasNextPage
      }
    }
  }
`;
