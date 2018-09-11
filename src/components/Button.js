import React from 'react'

const Button = props => {
    const {
        className,
        onClick,
        btnContent,
        disabled
    } = props;
    return(
        <button
            type='button'
            className={className}
            disabled={disabled}
            onClick={onClick}
        >
            {btnContent}
        </button>
    )
};

export default Button;