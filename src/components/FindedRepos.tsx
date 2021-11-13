import { useQuery } from '@apollo/client';
import { SEARCH_REPOS } from '../GraphQL/queries/searchRepos';
import { IRepoModel, IRequestRepoVariables } from '../models/repo';
import { ISearch } from '../models/search';
import { AppLoader } from './AppLoader';
import { PaginationContainer } from './PaginationContainer/PaginationContainer';

export const FindedRepos = (repoName: string) => {
  const { loading, error, data, fetchMore } = useQuery<
    ISearch<IRepoModel>,
    IRequestRepoVariables
  >(SEARCH_REPOS, {
    variables: { repoName, cursor: null },
  });

  if (loading && repoName) {
    return <AppLoader />;
  }
  if (error) {
    console.error('Error with FindRepos: ', error);
    return;
  }
  const pageInfo = data?.search.pageInfo;
  const findedRepos = data?.search.nodes;

  const fetchMoreRepos = () => {
    if (pageInfo?.hasNextPage) {
      fetchMore({
        variables: {
          repoName,
          cursor: pageInfo.endCursor,
        },
        updateQuery: (prevRes, { fetchMoreResult }) => {
          if (fetchMoreResult) {
            const newNodes = fetchMoreResult?.search.nodes || [];
            fetchMoreResult.search.nodes = [
              ...prevRes.search.nodes,
              ...newNodes,
            ];
            return fetchMoreResult;
          }
          return prevRes;
        },
      });
    }
  };

  if (pageInfo && findedRepos) {
    return (
      <PaginationContainer
        findedRepos={findedRepos}
        fetchMore={fetchMoreRepos}
      />
    );
  }
  return <></>;
};
