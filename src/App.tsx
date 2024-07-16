import { RouterProvider } from 'react-router-dom';
import './App.css';
import { UserContextProvider } from './user-session/UserContextProvider';
import { router } from './routing/router';

function App() {

  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}

export default App;
