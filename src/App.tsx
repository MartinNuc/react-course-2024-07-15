import { AlbumVoting } from './album/AlbumVoting';
import './App.css';
import { Joke } from './joke/Joke';
import { UserContextProvider } from './user-session/UserContextProvider';
import { UserInfoPane } from './user-session/UserInfoPane';

function App() {

  return (
    <UserContextProvider>
      <UserInfoPane />
      <AlbumVoting />
      <Joke />
    </UserContextProvider>
  );
}

export default App;
