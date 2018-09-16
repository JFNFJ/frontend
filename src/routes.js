import React from 'react';
import { Route , BrowserRouter as Router } from 'react-router-dom';
import Home from './screens/Home';
import SocialCatHome from './screens/SocialCatHome';

function AppRoutes() {
  return (
      <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/home/:name" component={SocialCatHome} />
        </div>
      </Router>
  );
}

export default AppRoutes;
