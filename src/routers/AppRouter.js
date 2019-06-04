import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpensedDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';

const NotFoundPage = () => (
    <div>
        404! <Link to="/">Go Home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home Page </NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Page</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit Page</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help Page</NavLink>
    </header>
);


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;