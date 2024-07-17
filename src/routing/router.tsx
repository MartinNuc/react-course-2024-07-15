import { createBrowserRouter } from "react-router-dom";
import { AlbumVoting } from "../album/AlbumVoting";
import { Layout } from "./Layout";
import { JokeCategories } from "../joke/JokeCategories";
import { Joke } from "../joke/Joke";
import { Suspense } from "react";
import { ModalPage } from "../modal-page/modal-page";

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
        path:'modal',
        element: <ModalPage />
      },
      {
        path: 'categories',
        element: <JokeCategories />,
        children: [{
          path: ':category',
          element: <Suspense fallback={<h1>Loading joke with Suspense</h1>}>
            <Joke />
          </Suspense>
        }]
      }
    ]
  }
]);
