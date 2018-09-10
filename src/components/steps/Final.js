import React from 'react'


const Final = props => {
    const{
        avatar,
        firstname,
        lastname,
        email,
        mobile,
        country,
        city
    } = props;
    return (
        <div className="container-fluid final">
            <div className="row">
                <div className="col-4">
                    <img src={avatar}/>
                </div>
                <div className="col-8">
                    <h2>{firstname} {lastname}</h2>
                </div>
            </div>
            <div className="row">
                <table>
                    <tbody>
                    <tr className="mb-10">
                        <td>Email: </td>
                        <td>{email}</td>
                    </tr>
                    <tr className="tr"/>
                    <tr className="mb-10">
                        <td>Mobile: </td>
                        <td>{mobile}</td>
                    </tr>
                    <tr className="tr"/>
                    <tr className="mb-10">
                        <td>Location: </td>
                        <td>{country}, {city}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>


    )

};

export default Final;