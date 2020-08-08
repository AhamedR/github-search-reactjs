import React from 'react';
import { Link } from 'react-router-dom';

function InduvidualUser(props) {
    const {
        userId,
        avatarUrl,
        username,
    } = props;

    return (
        <Link
            key={userId}
            className="user-data"
            to={`/github-user/${username}`}
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
            </div>
        </Link>
    );
}

export default InduvidualUser;