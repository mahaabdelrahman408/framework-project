
import './App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import NotFound from './components/NotFound/NotFound';


function App() {
const routes =createBrowserRouter([
  {
    path:"",element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:"about",element:<About/>},
      {path:"contact",element:<Contact/>},
      {path:"portfolio",element:<Portfolio/>},
      {path:"*",element:<NotFound/>},
    ]
  }
])
  return (
    <>
    
   <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
