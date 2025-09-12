import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MoviesHome from './MoviesHome';
import MovieDetails from './MovieDetails';
import NavBarComponent from './NavBar';
import LoginForm from './Login';
import SignUpForm from './signup';
import myStore from './redux/Store';
import { Provider } from 'react-redux';
import FavPage from './FavPage';

function App() {
  return (
        <Provider store={myStore} >
    
    <BrowserRouter>
      <NavBarComponent />
      <Switch>
        <Route exact path='/login' component={LoginForm} />
        <Route exact path='/signup' component={SignUpForm} />
        <Route exact path='/' component={MoviesHome} />
        <Route path='/movie/:id' component={MovieDetails} />
        <Route exact path='/favorites' component={FavPage} />
        <Route path='*' component={() => <div className="text-center mt-5"><h2>404 - Page Not Found</h2></div>} />
        
      </Switch>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
