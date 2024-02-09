import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from './redux';
import { AppRouter } from './routes';
import { GlobalStyle } from './style';


export const App = () => (
  <Provider store={ store }>
    <BrowserRouter>
      <GlobalStyle />
      <AppRouter />
    </BrowserRouter>
  </Provider>
);
