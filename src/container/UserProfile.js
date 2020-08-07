import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Repository from '../components/profileSummary/Repository';
import Connection from '../components/profileSummary/Connection';

class UserProfile extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Link
                        to={'/'}
                        className="nav-back"
                    >
                        Back
                    </Link>
                </nav>
                <div className="user-profile">
                    <div className="user-intro">
                        <img alt="username" src="/default-avatar.png" />
                        <div className="intro-username">
                            @AhamedR
                        </div>
                        <div className="intro-summary">
                            <div className="intro-repo">
                                <div>
                                    Repositories
                                </div>
                                <div className="count">
                                    10
                                </div>
                            </div>
                            <div className="intro-following">
                                <div>
                                    Following
                                </div>
                                <div className="count">
                                    10
                                </div>
                            </div>
                            <div className="intro-followers">
                                <div>
                                    Followers
                                </div>
                                <div className="count">
                                    10
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="user-details">
                        <div className="detail-repo">
                            <h4>Repositories</h4>
                            <Repository />
                            <Repository />
                            <Repository />
                            <Repository />
                        </div>
                        <div className="detail-following">
                            <h4>Following</h4>
                            <Connection />
                            <Connection />
                            <Connection />
                            <Connection />
                            <Connection />
                            <Connection />
                            <Connection />
                            <Connection />
                            <Connection />
                            <Connection />
                            <Connection />
                            <Connection />
                            <Connection />
                            <Connection />
                            <Connection />
                            <Connection />
                            <Connection />
                        </div>
                        <div className="detail-followers">
                            <h4>Followers</h4>
                            <Connection />
                            <Connection />
                            <Connection />
                            <Connection />
                            <Connection />
                            <Connection />
                            <Connection />
                            <Connection />
                            <Connection />
                            <Connection />
                            <Connection />
                            <Connection />
                            <Connection />
                            <Connection />
                            <Connection />
                            <Connection />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserProfile;
