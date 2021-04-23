import { BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import './App.css';

import Home from './containers/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import MyProfile from './containers/MyProfile'
import CreationContainer from './containers/CreationContainer'
import Navbar from './components/Navbar'
import PrivateRoute from './containers/PrivateRoute'
import CreationPage from './components/CreationPage'

function App() {
  const history = useHistory();
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/login' component={Login} history={history}/>
            <Route exact path='/signup' component={Signup} history={history}/>
            <PrivateRoute exact path='/myprofile' component={MyProfile} history={history}/>
            <PrivateRoute exact path='/creations' component={CreationContainer} history={history}/>
            <PrivateRoute exact path='/creations/:id' component={CreationPage} history={history} />
            <Route exact path="/" component={Home} history={history}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
