import './App.css';
import './Responsive.css';
import { useEffect,useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
import Projects from './Components/Projects/Projects';
import Navigation from './Components/Navigation/Navigation';
import Menu from './Components/Navigation/Menu';
import { generalContext } from './Context/GeneralContext'
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import ProjectReview from './Components/Projects/Project/ProjectReview';

function App() {
  const [menuState, setMenuState] = useState(false)
  const [openProjectFilter, isOpenProjectFilter] = useState(false)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'  element={<Root menuState={menuState} setMenuState={setMenuState}  isOpenProjectFilter={isOpenProjectFilter} openProjectFilter={openProjectFilter} />} >
              <Route index  element={<Home />} />
              <Route path='projects'  element={<Projects />} />
              <Route path='projects/:id'  element={<ProjectReview />}/>
              <Route path='about'  element={<About />}/>
              <Route path='contact'  element={<Contact />}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
);
}
const Root = ({openProjectFilter , isOpenProjectFilter}) => {
  const [menuState, setMenuState] = useState(false)
  const [filteredData, setFilteredData] = useState([])
  const [project, setProject] = useState({})
  return(
    <generalContext.Provider value={{ project , setProject , menuState , setMenuState, openProjectFilter , isOpenProjectFilter , filteredData , setFilteredData}}>
      <div className='main_logo'>
      </div>
      <div className={menuState ? 'root_holder active' : 'root_holder'} >
       <Outlet />
       <Menu />
       <Navigation />
      </div>
      </generalContext.Provider>
  )
}
export default App;
