import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './componenets/Blog/Blog';
import Error from './componenets/Error/Error';
import Home from './componenets/Home/Home';
import Quizzes from './componenets/Quizzes/Quizzes';
import Statistics from './componenets/Statistics/Statistics';
import Topic from './componenets/Topic/Topic';
import Root from './Layout/Root';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/topic',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topic></Topic>
        },
        {
          path: '/topic/:topicId',
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`),
          element: <Quizzes></Quizzes>
        },
        {
          path: '/statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    },
    {
      path: '*',
      element: <Error></Error>
    }

  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
