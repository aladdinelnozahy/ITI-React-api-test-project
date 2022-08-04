import './App.css';
import Header from "./Header/header";
import Home from "./Home/home";
import AboutUs from "./AboutUs/aboutUs";
import ContactUs from "./ContactUs/contactUs";
import Products from "./Movies/movies";
import ProductDetails from "./Movies/movieDetails";
import AddUsers from './Users/addUsers';
import AddForm from './Users/form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import store from './store/store';
import { Provider } from 'react-redux';



function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about-us" component={AboutUs} exact />
            <Route path="/contact" component={ContactUs} exact />
            <Route path="/movies" component={Products} exact />
            <Route path="/details/:id" component={ProductDetails} exact />
            <Route path="/login" component={AddUsers} exact />
            <Route path="/signUp" component={AddForm} exact />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
