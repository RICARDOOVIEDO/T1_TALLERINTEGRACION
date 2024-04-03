import {
    createBrowserRouter,
    RouterProvider,
    redirect
  } from 'react-router-dom';
  import "./App.css";
  import '../assets/styles/normalize.css';
  import Layout from './Layout';
  import LandingPage from '../Pages/LandingPage/LandingPage';
  import NewPost from '../Pages/NewPost/NewPost';
  import Feed from '../Pages/Feed/Feed';
  import NewUser from '../Pages/NewUser/NewUser';
  import Users from '../Pages/Users/Users';
  import UserProfile from '../Pages/Profile/Profile';
  import Comments from '../Pages/Comments/Comments';
  
  function Router() {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '',
            element: <LandingPage />
          },
          {
            path: 'newpost',
            element: <NewPost />
          },
          {
            path: 'feed',
            element: <Feed />
          
          },
          {
            path: 'newuser',
            element: <NewUser />
          },
          {
            path: 'users',
            element: <Users />
          },
          {
            path: 'perfil/:id',
            element: <UserProfile />
          },
          {
            path: 'comments/:postId',
            element: <Comments />
          }

        ]
      },
      {
        path: '*',
        loader: () => {
          return redirect('/')
        }
      }
    ])
  
    return (
      <RouterProvider router={router} />
    );
  }
  
  export default Router;