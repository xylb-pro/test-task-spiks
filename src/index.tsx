import { render } from 'react-dom';
import { AppApoloProvider } from './GraphQL/AppApolloProvider';
import { App } from './App';
import { GlobalStyle } from './styles/GlobalStyle';

render(
  <AppApoloProvider>
    <GlobalStyle />
    <App />
  </AppApoloProvider>,
  document.getElementById('root'),
);
