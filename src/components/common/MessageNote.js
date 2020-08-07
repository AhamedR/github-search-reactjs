import React from 'react';

function MessageNote(props) {
    const {
        message,
    } = props;

    return (
        <div className="message-note">
            { message }
        </div>
    );
}

export default MessageNote;
