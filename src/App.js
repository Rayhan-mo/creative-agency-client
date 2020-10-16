import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import { useState } from 'react';
import { createContext } from 'react';
import Login from './Components/Login/Login';
import Admin from './Components/Admin/Admin';
import NotMatch from './Components/NotMatch/NotMatch';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Client from './Components/ClientPage/OrderService/Client/Client';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
   <Router>
     <Switch>
     <Route exact path="/login">
       <Login></Login>
     </Route>
     <PrivateRoute exact path="/client">
       <Client></Client>
     </PrivateRoute>
     <Route exact path="/admin">
       <Admin></Admin>
     </Route>
       <Route path="/">
         <Home></Home>
       </Route>
       <Route path="*">
         <NotMatch></NotMatch>
       </Route>
     </Switch>
   </Router>
   </UserContext.Provider>
  );
}

export default App;
