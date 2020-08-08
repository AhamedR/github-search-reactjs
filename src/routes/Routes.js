import React from 'react';
import { Switch, Route } from 'react-router-dom';

import UserProfile from '../container/UserProfile';
import GitHubSearch from '../container/GitHubSearch';
import PageNotFound from '../components/common/PageNotFound';

const Routes = () => {
    return(
        <Switch>
            <Route path="/" exact component={GitHubSearch} />
            <Route path="/github-user/:username" exact component={UserProfile} />
            <Route component={PageNotFound} />
        </Switch>
    );
}

export default Routes;
