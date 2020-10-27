//import './Styles/App.scss';
import {Route, Switch} from 'react-router-dom';//Route zwraca pod jaką ścieżka będzie dany komponent
import Home from '../pages/Home';
import About from '../pages/About';
import Product from '../pages/Product';
import Contact from '../pages/Contact';
import ErrorPage from "../pages/ErrorPage";
import ForUser from "../pages/ForUser";


function Content() {
  return (
    <div className="content">
      <Switch>{/*Swich wybiera jedną pasująca podstrone do ścieżki, unikamy w ten sposób wyświetlania sie na podstronach strony domowej*/}
        {/* Jeśli ścieżka to będzie "/" to Route wstawi nam komponent Home.js */}
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/product" component={Product}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/foruser" component={ForUser}/>
        <Route component={ErrorPage}/>
      </Switch>
      <p>Komponent Content</p>
    </div>
  );
}
export default Content;