import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from './routes';
import { GlobalStyle } from './style';


export const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <AppRouter />
  </BrowserRouter>
);
