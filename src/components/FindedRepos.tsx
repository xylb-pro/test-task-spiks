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
    variables: { repoName },
  });

  if (loading && repoName) {
    return <AppLoader />;
  }
  if (error) {
    console.log('Error with FindRepos: ', error);
    return;
  }
  const pageInfo = data?.search.pageInfo;
  const findedRepos = data?.search.nodes;

  if (findedRepos?.length && pageInfo) {
    return (
      <PaginationContainer
        findedRepos={findedRepos}
        pageInfo={pageInfo}
        fetchMore={() => {
          if (pageInfo.hasNextPage) {
            //fetch происходит, новые данные приходят, но почему то data не обновляется. Застрял на этом, больше времени к сожалению нет(
            fetchMore({
              variables: {
                repoName,
                cursor: pageInfo.endCursor,
              },
            });
          }
        }}
      />
    );
  }
  return <></>;
};
