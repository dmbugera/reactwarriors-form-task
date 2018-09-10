import React from 'react';
import Field from '../Field';

const Contacts = props => {
    const {
        values,
        errors,
        onChange,
        getCountries,
        getCities

    } = props;


    return (
        <div className="step">
            <Field
                id="email"
                labelText="Email"
                placeholder="Enter email"
                type="text"
                name="email"
                value={values.email}
                onChange={onChange}
                error={errors.email}
            />
            <Field
                id="mobile"
                labelText="Mobile"
                placeholder="Enter mobile"
                type="text"
                name="mobile"
                value={values.mobile}
                onChange={onChange}
                error={errors.mobile}
            />
            <div className="form-group">
                <label htmlFor="country">Country</label>
                <select
                    className="form-control"
                    id="country"
                    name="country"
                    value={values.country}
                    onChange={onChange}
                >
                    {getCountries}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="country">City</label>
                <select
                    className="form-control"
                    id="city"
                    name="city"
                    value={values.city}
                    onChange={onChange}
                >
                    {getCities}
                </select>
            </div>
        </div>

    )

};

export default Contacts;