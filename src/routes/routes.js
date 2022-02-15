import { BrowserRouter,Switch, Route} from 'react-router-dom'
import Home from "../pages/home"
import singup from '../pages/singup';
import Login from '../pages/login';
import Twitter from '../pages/twitter';


const Router =() => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/twitter" component={Twitter} />
        <Route path="/singup" component={singup} /> 
        <Route path="/login" component={Login} /> 
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router