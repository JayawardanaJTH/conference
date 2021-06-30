import React from 'react';
import { Switch, Route } from "react-router-dom";
import Documents from '../components/pages/documents/Documents';
import EditPage from '../components/pages/editPage/EditPage';
import ViewGuest from '../components/pages/guest/ViewGuest';
import Home from '../components/pages/home/Home';
import LoginRegistration from '../components/pages/login-Registration/LoginRegistration';
import Payment from '../components/pages/payment/Payment';
import Research from '../components/pages/research/Research';
import WorkShop from '../components/pages/workshop/WorkShop';

const Routes = () => {
    return ( 

        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin-signup" component={LoginRegistration} />
            <Route exact path="/documents" component={Documents} />
            <Route exact path="/guests" component={ViewGuest} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/workshop" component={WorkShop} />
            <Route exact path="/research" component={Research} />
            <Route exact path="/edit" component={EditPage} />
        </Switch>
     );
}
 
export default Routes;