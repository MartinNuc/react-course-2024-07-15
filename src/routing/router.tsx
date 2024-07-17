import { createBrowserRouter } from "react-router-dom";
import { AlbumVoting } from "../album/AlbumVoting";
import { Layout } from "./Layout";
import { JokeCategories } from "../joke/JokeCategories";
import { Joke } from "../joke/Joke";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'votes',
        element: <AlbumVoting />
      },
      {
        path: 'categories',
        element: <JokeCategories />,
        children: [{
          path: ':category',
          element: <Joke />
        }]
      }
    ]
  }
]);
