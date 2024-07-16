import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { UserContextProvider } from './user-session/UserContextProvider';
import { Layout } from './routing/Layout';
import { AlbumVoting } from './album/AlbumVoting';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'votes',
        element: <AlbumVoting />
      }
    ]
  }
]);

function App() {

  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}

export default App;
