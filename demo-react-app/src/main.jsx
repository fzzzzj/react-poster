import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Posts from './layout/Posts.jsx';
import BaseLayout from './layout/BaseLayout.jsx';
import NewPost from './layout/NewPost.jsx';
import postAction from './actions/postAction.jsx';
import postLoader from './loaders/postLoader.jsx';
import PostDetail from './layout/PostDetail.jsx';
import postDetailLoader from './loaders/postDetailLoader.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: postLoader,
        children: [
          {
            path: 'new',
            element: <NewPost />,
            action: postAction
          },
          {
            path: ':id',
            element: <PostDetail />,
            loader: postDetailLoader
          }]
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
