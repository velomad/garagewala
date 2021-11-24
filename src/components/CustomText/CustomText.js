import React from 'react';

const Text = ({ text, styles, className }) => {
    return (
        <React.Fragment>
            <p
                className={className}
                style={{ fontFamily: 'Raleway' }}
            >{text}</p>
        </React.Fragment>
    )
}

export default Text;