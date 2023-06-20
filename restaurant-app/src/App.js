

import React from 'react';
import './App.css';

import {
  Routes,
  Route,
  Link
} from 'react-router-dom'
import RestauranEdit from "./components/RestaurantsEdit"
import RestaurantCreate from "./components/RestaurantCreate"
import RestaurantsDetail from "./components/RestaurantsDetail"
import RestaurantSearch from "./components/RestaurantsSearch"
import RestaurantsList from "./components/RestaurantsList"
import Login from './components/Login'
import Protected from './components/Protected'
import Logout from './components/Logout'
import Home from './components/Home';

function App() {
 

  return (
      <div className="App">
        <Routes>
          <Route path="/logout" element= {<Logout />} />
          <Route path="/" element ={<Login /> }/>
          <Route  path="/home" element={<Protected><Home/></Protected>} />
          <Route  path="/details" element={<Protected><RestaurantsDetail/></Protected>} />
          <Route  path="/editResturent/:id" element={<Protected><RestauranEdit/></Protected>} />
          <Route  path="/search" element={<Protected><RestaurantSearch/></Protected>} />
          <Route  path="/create" element={<Protected><RestaurantCreate/></Protected>} />
          <Route  path="/list" element={<Protected><RestaurantsList/></Protected>} />
        </Routes>
      </div>
  );
}
export default App;

















