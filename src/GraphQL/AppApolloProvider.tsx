import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { GITHUB_API_URL, GITHUB_TOKEN } from '../constants/global';

interface IAppApoloProvider {}

export const apolloClient = new ApolloClient({
  uri: GITHUB_API_URL,
  cache: new InMemoryCache(),
  headers: {
    ['Authorization']: `Bearer ${GITHUB_TOKEN}`,
  },
});

export const AppApoloProvider: React.FC<IAppApoloProvider> = ({ children }) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
