import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../Pages/Login'
import Menu from '../Pages/Menu'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login}/>
        <Route path="/menu" component={Menu}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
