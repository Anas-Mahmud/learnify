import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './componenets/Blog/Blog';
import Home from './componenets/Home/Home';
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
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/topic',
          element: <Topic></Topic>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    },

  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
