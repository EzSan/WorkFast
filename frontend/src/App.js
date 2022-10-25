import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarComp from './Components/NavbarComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Page/HomeView';
import Registro from './Page/RegistroView';
import Servicios from './Page/ServiciosPage';
import AboutUsPage from './Page/AboutUsPage';
import DataEmprendedorView from './Page/DataEmprendedorView';
import { RoutePrivate } from './Components/RoutePrivate';
import LoginEmprendedorView from './Page/LoginEmprendedorView.jsx';

function App() {
    return (
        <Router>
            <NavbarComp />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/servicios" exact>
                    <Servicios />
                </Route>
                <Route path="/nosotros" exact>
                    <AboutUsPage/>
                </Route>
                <Route path="/login" exact>
                    <LoginEmprendedorView />
                </Route>
                <RoutePrivate path="/emprendedor" exact>
                    <DataEmprendedorView />
                </RoutePrivate>
                <Route path="/signup" exact>
                    <Registro />
                </Route>
                <RoutePrivate path="/logout" exact></RoutePrivate>
            </Switch>
        </Router>
    );
}

export default App;
