import React from 'react';
import { Link } from 'react-router-dom';

function InduvidualUser(props) {
    const {
        userId,
        avatarUrl,
        username,
        following,
        repoCount,
        followers,
    } = props;

    return (
        <Link
            key={userId}
            className="user-data"
            to={`/github-user/${userId}`}
        >
            <div className="user-avatar">
                <img
                    alt={`${username}-avatar`}
                    src={avatarUrl}
                />
            </div>
            <div className="user-card">
                <div className="username">
                    {username}
                </div>
                <div className="profile-data">
                    <div className="followers">
                        <p>Followers</p>
                        {following}
                    </div>
                    <div className="repos">
                        <p>Repos</p>
                        {repoCount}
                    </div>
                    <div className="following">
                        <p>Following</p>
                        {followers}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default InduvidualUser;