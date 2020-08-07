import React from 'react';

function Loader(props) {
    const {
        message,
    } = props;

    return (
        <div className="loader-body">
            <div className="loader">
                <div className="square" />
                <div className="square" />
                <div className="square" />
            </div>
            <div className="loader-text">{message}...</div>
        </div>
    );
}

export default Loader;
