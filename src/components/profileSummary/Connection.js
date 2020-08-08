import React from 'react';
import { Link } from 'react-router-dom';

function Connection(props) {
    const {
        username,
        avatar,
    } = props;

    return (
        <Link
            className="connection"
            to={`/github-user/${username}`}
            target="_blank"
        >
            <img alt="username" src={avatar} />
            <p className="connection-username">
                {username}
            </p>
        </Link>
    );
}

export default Connection;
