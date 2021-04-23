import React from 'react';
import { HashRouter as Router, Route, Switch, } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

function MainLayout() {
    return (
        <div className="w-100">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route exact path="/list">
                        <Dashboard />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default MainLayout;
