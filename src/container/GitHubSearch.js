import React, { Component, Fragment }  from 'react';

import InduvidualUser from '../components/InduvidualUser';

class GitHubSearch extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="logo ">
                        <span className="primary">GitHub</span>
                        <span className="secondary">Search</span>
                    </div>
                    <div className="search-input">
                        <input type="search" placeholder="Search by username"/>
                    </div>
                </nav>
                <div className="search-result">
                    <InduvidualUser
                        userId="1"
                        avatarUrl="default-avatar.png"
                        username="Ahamed R"
                        following="10"
                        repoCount="29"
                        followers="0"
                    />
                    <InduvidualUser
                        userId="2"
                        avatarUrl="default-avatar.png"
                        username="Ahamed R"
                        following="10"
                        repoCount="29"
                        followers="0"
                    />
                    <InduvidualUser
                        userId="3"
                        avatarUrl="default-avatar.png"
                        username="Ahamed R"
                        following="10"
                        repoCount="29"
                        followers="0"
                    />
                </div>
            </div>
        );
    }
}

export default GitHubSearch;
