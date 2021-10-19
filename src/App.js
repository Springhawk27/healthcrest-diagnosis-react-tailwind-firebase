import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import ArticleDetail from './components/ArticleDetail/ArticleDetail';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Doctors from './components/Doctors/Doctors';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Profile from './components/Profile/Profile';
import Booking from './components/Booking/Booking';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/profile">
              <Profile></Profile>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/articledetail">
              <ArticleDetail></ArticleDetail>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
