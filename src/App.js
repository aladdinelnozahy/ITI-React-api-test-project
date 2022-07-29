import './App.css';
import Header from "./Header/header";
import Home from "./Home/home";
import AboutUs from "./AboutUs/aboutUs";
import ContactUs from "./ContactUs/contactUs";
import Products from "./Movies/movies";
import ProductDetails from "./Movies/movieDetails";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <>

      <Router>
      <Header />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about-us" component={AboutUs} exact />
          <Route path="/contact" component={ContactUs} exact />
          <Route path="/movies" component={Products} exact />
          <Route path="/details/:id" component={ProductDetails} exact />
        </Switch>
      </Router>

    </>
  );
}

export default App;
