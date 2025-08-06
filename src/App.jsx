import { RouterProvider } from 'react-router-dom';
import { MenuProvider } from './contexts/MenuContext';
import { router } from './routes.jsx';

function App() {
  return (
    <MenuProvider>
      <RouterProvider router={router} />
    </MenuProvider>
  );
}

export default App;
