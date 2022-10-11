import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './componenets/Navber/Navbar';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar></Navbar>
    },
    {
      path: '/home',
      element: <div>Home page</div>
    },
    {
      path: '/about',
      element: <div>about page</div>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
