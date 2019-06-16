import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import PortfolioCreate from './portfolios/PortfolioCreate';
import PortfolioDelete from './portfolios/PortfolioDelete';
import PortfolioEdit from './portfolios/PortfolioEdit';
import PortfolioList from './portfolios/PortfolioList.js';
import PortfolioShow from './portfolios/PortfolioShow';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={PortfolioList} />
            <Route path="/portfolios/new" exact component={PortfolioCreate} />
            <Route path="/portfolios/edit/:id" exact component={PortfolioEdit} />
            <Route path="/portfolios/delete/:id" exact component={PortfolioDelete} />
            <Route path="/portfolios/:id" exact component={PortfolioShow} />
          </Switch>

        </div>
      </Router>
    </div>
  );
};

export default App;
