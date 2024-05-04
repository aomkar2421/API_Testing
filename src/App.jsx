import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Summerizer from './Summerizer';
import Grammar from './Grammar';
import Plagiarism from './Plagiarism';
import Home from './Home';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/summerizer",
      element: <Summerizer/>,
    },
    {
      path: "/grammar",
      element: <Grammar/>,
    },
    {
      path: "/plagiarism",
      element: <Plagiarism/>,
    },
    {
      path: "/home",
      element: <Home/>,
    }
  ]);



  return (
    <div className=' text-black w-[760px] h-[500px] font-mono '>
      <RouterProvider router={router} />
      <h1>bkjsbsj</h1>
    </div>
  )
}

export default App
