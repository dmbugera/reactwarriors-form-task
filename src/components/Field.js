import React from "react";

const Field = props => {
    const {
        labelText,
        type,
        placeholder,
        name,
        value,
        onChange,
        error,
        id,
        isError
    } = props;
    return (
        <div className="form-group">
            <label htmlFor={id}>{labelText}</label>
            <input
                id={id}
                type={type}
                className={error ? "form-control error" : "form-control" }
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
            {error ? <div className="invalid-feedback">{error}</div> : null}
        </div>
    );
};

export default Field;
