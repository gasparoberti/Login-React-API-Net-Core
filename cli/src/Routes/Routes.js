import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../Pages/Login'
import Menu from '../Pages/Menu'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/menu" component={Menu}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
