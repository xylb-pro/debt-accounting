import './App.sass';

//для использования роутов
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './routes';

function App() {
  const routes = useRoutes(false);
  return <BrowserRouter>{routes}</BrowserRouter>;
}

export default App;
