import React from 'react';
import Field from '../Field';

const Avatar = props => {
    const {
        values,
        errors,
        onChangeAvatar,

    } = props;


    return (
        <div className="step">
            <img src={values.avatar} className = "avatar" alt=""/>
            <Field
                id="avatar"
                placeholder="Choose avatar"
                type="file"
                name="avatar"
                onChange={onChangeAvatar}
                error={errors.avatar}
            />
        </div>

    )

};

export default Avatar;