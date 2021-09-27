import './App.css';
import Homepage from './components/homepage/Homepage'
import Login from './components/login/Login';
import Registration from './components/registration/Registration';
import { Route, Switch } from 'react-router-dom'
import { useState } from 'react';
function App() {
  const [user, setloginUser] = useState({})
  return (
    <div className="App">
      <Switch>

      <Route exact path='/'>{
        user && user._id ? <Homepage setloginUser={setloginUser} /> : <Login setloginUser={setloginUser} />
      }</Route>

      <Route path='/login'>
        <Login setloginUser={setloginUser} />
      </Route>

      <Route path='/registration'>
        <Registration />
      </Route>

      </Switch>
    </div>
  );
}

export default App;
