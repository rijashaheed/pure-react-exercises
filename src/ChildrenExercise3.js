import React from 'react';
import PropTypes from 'prop-types';

const Dialog = ({ children }) => {
    const arr = React.Children.toArray(children);
    return (
        <div className="dialogWrapper">
        {arr.map (element => {
            return (
            <div className="dialogBox">{element}</div>
            )
        })}
        </div>        
    )
    }

Dialog.propTypes= {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string
    ])
}
export default Dialog;
