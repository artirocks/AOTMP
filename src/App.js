import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import LoginComponent from './components/LoginComponent';
import RecommendationComponent from './components/RecommendationComponent';
import MenuComponent from './components/MenuComponent';
import SimilarProductComponent from './components/SimilarProductComponent';
import EfficiencyComponent from './components/EfficiencyComponent';
import RecommendationResult from './components/RecommendationResult';
import SimilarRatingComponent from './components/SimilarRatingComponent';
import SimilarFeaturesComponent from './components/SimilarFeaturesComponent';
import EfficiencyResultComponent from './components/EfficiencyResultComponent';

//style
import 'office-ui-fabric-react/dist/css/fabric.css';

// pages
import Login from "./pages/auth/LoginForm/Login";
import AccountRequest from "./pages/auth/SignupForm/AccountRequest";
import Home from "./pages/home/Home";
import Faq from "./pages/faq/Faq";

function App() {
  return (
    <div>
        <Router>
        <HeaderComponent/>
                <div className="container">
                    <Switch> 
                    
                        <Route exact path="/" component={Home} />
                        <Route exact path="/faq" component={Faq} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/signup" component={AccountRequest} />
                    
                        <Route path="/h" exact component={LoginComponent}></Route> 
                        <Route path="/menu" exact component={MenuComponent}></Route>
                        <Route path="/recommend-products"  exact component={RecommendationComponent}></Route>
                        <Route path="/similar-products"  exact component={SimilarProductComponent}></Route>
                        <Route path="/efficiency-products" exact component={EfficiencyComponent}></Route>
                        <Route path="/recommend-results" exact component={RecommendationResult}></Route>
                        <Route path="/similar-rating"  exact component={SimilarRatingComponent}></Route>
                        <Route path="/similar-features"  exact component={SimilarFeaturesComponent}></Route>
                        <Route path="/efficiency-result"  exact component={EfficiencyResultComponent}></Route>
                    
                    </Switch>
                </div>
            <FooterComponent/>

        </Router>

    </div>
);
}

export default App;
