import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Repository from '../components/profileSummary/Repository';
import Connection from '../components/profileSummary/Connection';
import MessageNote from '../components/common/MessageNote';
import Loader from '../components/common/Loader';
import {
    getUserDetails,
    getFollowings,
    getFollowers,
    getRepos,
} from '../action/gitHubUserAction';

class UserProfile extends Component {
    state = {
        isRequestSent: false,
        userDetails  : null,
        followings   : null,
        followers    : null,
        username     : null,
        repos        : null,
    }

    componentDidMount() {
        const username = this.props.match.params.username;

        this.props.dispatch(getUserDetails(username));

        this.setState({
            username,
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            const {
                isRequestSent,
            } = this.state;

            const {
                userDetails,
                followings,
                followers,
                repos,
            } = this.props;

            /**
             * Send requset to get user details if its initial request
             */
            if (
                !isRequestSent &&
                'login' in userDetails
            ) {
                this.getProfileDetails(userDetails.login);
            }

            this.setState({
                userDetails,
                followings,
                followers,
                repos,
            });
        }
    }

    /**
     * Get Followers, Following and Repository details of user.
     *
     * @param {string} username
     */
    getProfileDetails = (username) => {
        this.props.dispatch(getFollowings(username));
        this.props.dispatch(getFollowers(username));
        this.props.dispatch(getRepos(username));

        this.setState({
            isRequestSent: true,
        });
    }

    /**
     * Render repositories
     */
    renderRepositories = () => {
        const {
            repos,
        } = this.state;

        if (repos) {
            if (repos.length === 0) {
                return (
                    <MessageNote
                        message="No Repositories"
                    />
                );
            }
            return Object.values(repos).map((repo) => {
                const {
                    id,
                    name,
                } = repo;

                return (
                    <Repository
                        key={id}
                        name={name}
                    />
                );
            });
        } else {
            return (
                <Loader
                    message="Loading"
                />
            );
        }
    }

    /**
     * Render Following and Followers as per connectionType
     * 
     * @param {string} connectionType 
     */
    renderConnections = (connectionType) => {
        const {
            followers,
            followings,
        } = this.state;
        let sortBy = {};

        switch (connectionType) {
            case 'FOLLOWING':
                sortBy = followings;
                break;

            case 'FOLLOWERS':
                sortBy = followers;
                break;

            default:
                break;
        }

        if (sortBy) {
            if (sortBy.length === 0) {
                return (
                    <MessageNote
                        message={`No ${connectionType.toLowerCase()}`}
                    />
                );
            }
            return Object.values(sortBy).map((connection) => {
                const {
                    id,
                    login,
                    avatar_url,
                } = connection;

                return (
                    <Connection
                        key={id}
                        username={login}
                        avatar={avatar_url}
                    />
                );
            });
        } else {
            return (
                <Loader
                    message="Loading"
                />
            );
        }
    }

    render() {
        const {
            username,
            userDetails,
        } = this.state;

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
                {
                    !userDetails ?
                        <Loader
                            message="Loading"
                        /> :
                        'login' in userDetails ?
                            <div className="user-profile">
                                <div className="user-intro">
                                    <img alt="username" src={userDetails.avatar_url} />
                                    <div className="intro-username">
                                        @{userDetails.login}
                                    </div>
                                    <div className="intro-summary">
                                        <div className="intro-repo">
                                            <div>
                                                Repositories
                                            </div>
                                            <div className="count">
                                                {userDetails.public_repos}
                                            </div>
                                        </div>
                                        <div className="intro-following">
                                            <div>
                                                Following
                                            </div>
                                            <div className="count">
                                                {userDetails.following}
                                            </div>
                                        </div>
                                        <div className="intro-followers">
                                            <div>
                                                Followers
                                            </div>
                                            <div className="count">
                                                {userDetails.followers}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="user-details">
                                    <div className="detail-repo">
                                        <h4>Repositories</h4>
                                        {this.renderRepositories()}
                                    </div>
                                    <div className="detail-following">
                                        <h4>Following</h4>
                                        {this.renderConnections('FOLLOWING')}
                                    </div>
                                    <div className="detail-followers">
                                        <h4>Followers</h4>
                                        {this.renderConnections('FOLLOWERS')}
                                    </div>
                                </div>
                            </div> :
                            <MessageNote
                                message={`There is no user with username ${username}`}
                            />
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        userDetails: state.userData.userDetails,
        followings : state.userData.followings,
        followers  : state.userData.followers,
        repos      : state.userData.repos,
    };
};

export default connect(mapStateToProps)(UserProfile);
