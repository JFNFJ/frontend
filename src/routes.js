import React from 'react';
import { Route , BrowserRouter as Router } from 'react-router-dom';
import Home from './screens/Home';
import SocialCatHome from './screens/SocialCatHome';
import Charts from './screens/Charts';

function AppRoutes() {
  return (
      <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/home/:name" component={SocialCatHome} />
            <Route path="/charts" component={Charts} />
        </div>
      </Router>
  );
}

export default AppRoutes;
