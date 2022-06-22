import React from "react";
import Feed from './Components/Feed'
import Login from './Components/Login'
import PageNotFound from './Components/PageNotFound'
import Profile from './Components/Profile'
import Signup from './Components/Signup'
import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Switch>
        <Route path='/feed'>
          <Feed></Feed>
        </Route>

        <Route path='/login'>
          <Login></Login>
        </Route>

        <Route path='/signup'>
          <Signup></Signup>
        </Route>

        <Route path='/profile'>
          <Profile></Profile>
        </Route>

        <Route>
          <PageNotFound></PageNotFound>
        </Route>
        
      </Switch>
    </>
  );
}

export default App;
