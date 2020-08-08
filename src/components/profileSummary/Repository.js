import React from 'react';

function Repository(props) {
    const {
        name,
    } = props;

    return (
        <div className="connection-repository">
            { name }
        </div>
    );
}

export default Repository;
