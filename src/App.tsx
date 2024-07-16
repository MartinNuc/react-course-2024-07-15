import { AlbumVoting } from './album/AlbumVoting';
import './App.css';
import { Joke } from './joke/Joke';
import { JokeFetcher } from './joke/JokeFetcher';
import { UserContextProvider } from './user-session/UserContextProvider';
import { UserInfoPane } from './user-session/UserInfoPane';

function App() {

  return (
    <UserContextProvider>
      <UserInfoPane />
      <AlbumVoting />
      <Joke />
      <JokeFetcher>
        {({joke, isLoading}) => isLoading ? <h1>loading...</h1> : <h1>{joke}</h1>}
      </JokeFetcher>
    </UserContextProvider>
  );
}

export default App;
