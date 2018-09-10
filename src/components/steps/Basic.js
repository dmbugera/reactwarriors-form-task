import React from 'react';
import Field from '../Field';

const Basic = props => {
    const {
        values,
        errors,
        onChange,
    } = props;
    return (
        <div className="step">
            <Field
                id="firstname"
                labelText="Firstname"
                placeholder="Enter firstname"
                type="text"
                name="firstname"
                value={values.firstname}
                onChange={onChange}
                error={errors.firstname}
            />
            <Field
                id="lastname"
                labelText="Lastname"
                placeholder="Enter lastname"
                type="text"
                name="lastname"
                value={values.lastname}
                onChange={onChange}
                error={errors.lastname}
            />
            <Field
                id="password"
                labelText="Password"
                placeholder="Enter password"
                type="password"
                name="password"
                value={values.password}
                onChange={onChange}
                error={errors.password}
            />
            <Field
                id="repeatPassword"
                labelText="RepeatPassword"
                placeholder="Enter repeatPassword"
                type="password"
                name="repeatPassword"
                value={values.repeatPassword}
                onChange={onChange}
                error={errors.repeatPassword}
            />
            <fieldset className="form-group">
                <div>Gender</div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        checked={values.gender === "male"}
                        onChange={onChange}
                    />
                    <label className="form-check-label" htmlFor="male">
                        Male
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        checked={values.gender === "female"}
                        onChange={onChange}
                    />
                    <label className="form-check-label" htmlFor="female">
                        Female
                    </label>
                </div>
            </fieldset>
        </div>

    )

};

export default Basic;