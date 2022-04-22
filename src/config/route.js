import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import CreateSong from "../pages/create-song";
import Home from "../pages/home";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedin } = useSelector((state) => state.credential);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

const MyRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/create-song" component={CreateSong} />
      </Switch>
    </BrowserRouter>
  );
};

export default MyRouter;