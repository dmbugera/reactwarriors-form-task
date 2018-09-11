import React from "react";
import countries from "../data/countries";
import cities from "../data/cities";
import Tabs from "./Tabs";
import Basic from "./steps/Basic";
import Contacts from "./steps/Contacts";
import Avatar from "./steps/Avatar";
import Button from "./Button";
import Final from "./steps/Final";
import defaultAvatar from '../img/defaultAvatar.png'


export default class App extends React.Component {

    constructor() {
        super();

        this.state = {
            activeTab : 1,
            avatar: '',
            values: {
                firstname: '',
                lastname: '',
                password: '',
                repeatPassword: '',
                email: '',
                mobile: '',
                country: 1,
                city: 1,
                avatar: defaultAvatar,
            },
            errors: {
                firstname: false,
                lastname: false,
                password: false,
                repeatPassword: false,
                mobile: false,
                email: false,
            }
        }

        this.baseState = this.state
    }

    onChange = event =>{
        // const values = Object.create(this.state.values)
        // values[event.target.name] = event.target.value
        this.setState({
            values: {
                ...this.state.values,
                [event.target.name]: event.target.value
            }
        })
    };

    onChangeAvatar = event => {
        const reader = new FileReader();
        reader.onload = event =>{
            this.setState(
                prevState => ({
                    values: {
                        ...this.state.values,
                        avatar: event.target.result

                    }
                }),
                () => {

            });
        };
        // console.log(event.target.files[0]);
        reader.readAsDataURL(event.target.files[0]);
    };
    nextTab = event =>{
        const errors = {};

        if(this.state.activeTab === 1){
            if (this.state.values.firstname.length < 5) {
                errors.firstname = "Must be more 5 characters";
            }

            if (this.state.values.lastname.length < 5) {
                errors.lastname = "Must be more 5 characters";
            }

            if (!this.state.values.password.length) {
                errors.password = "Must be more 3 characters";
            }

            if (this.state.values.password !== this.state.values.repeatPassword) {
                errors.repeatPassword = "Must be equil password";
            }
        }else if(this.state.activeTab === 2) {

            const validateEmail = (email) => {
                let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            };

            const validateMobile = (mobile) => {
                let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
                return re.test(mobile);
            };

            if( !validateEmail(this.state.values.email)){
                errors.email = "Enter valid email";
            }
            if( !validateMobile(this.state.values.mobile)){
                errors.mobile = "Enter valid number";
            }
        }
            if (Object.keys(errors).length > 0) {
            //error
            this.setState({
                errors: errors
            });
        } else {
            this.setState(
                prevState => ({
                    activeTab: prevState.activeTab + 1,
                    errors: errors
                }),
                () => {
                    console.log(this.state.activeTab);
                },
                {
                errors: {}
            });
        }

    };

    prevTab = event =>{
        this.setState(
            prevState => ({
                activeTab: prevState.activeTab - 1
            }),
            () => {
                console.log(this.state.activeTab);
            }
        )
    };

    reset = event =>{
        this.setState(
            this.setState (this.baseState)
        );
        console.log(this.state.activeTab);
    };

    getOptionsItems = (items) => {

        return items.map(item => (
            <option key={item.id} value={item.id}>
                {item.name}
            </option>
        ));
    };
    getCities = (items) => {
        let currentCities = [];

        for ( let key in items ){
            if( items[key].country === Number(this.state.values.country )){
                currentCities.push( { id : key, name : items[key].name } );
            }
        }
        return currentCities.map(item => (
            <option key={item.id} value={item.id}>
                {item.name}
            </option>
        ));

    };


    render() {
        return (
            <div className="form-container card">

                <form className="form card-body">
                    <Tabs
                        activeTab = {this.state.activeTab}
                    />
                    <div className={this.state.activeTab === 1 ? "step active" : "step"}>
                        {this.state.activeTab === 1 ?
                            <Basic
                                values = {this.state.values}
                                errors = {this.state.errors}
                                onChange = {this.onChange}
                            />: null
                        }

                        {this.state.activeTab === 2 ?
                            <Contacts
                                values = {this.state.values}
                                errors = {this.state.errors}
                                onChange = {this.onChange}
                                getCountries = {this.getOptionsItems(countries)}
                                getCities = {this.getCities(cities)}
                            />: null
                        }
                        {this.state.activeTab === 3 ?
                            <Avatar
                                values = {this.state.values}
                                errors = {this.state.errors}
                                onChangeAvatar = {this.onChangeAvatar}
                            />: null
                        }
                        {this.state.activeTab === 4 ?
                            <Final
                                avatar = {this.state.values.avatar}
                                firstname = {this.state.values.firstname}
                                lastname = {this.state.values.lastname}
                                email = {this.state.values.email}
                                mobile = {this.state.values.mobile}
                                country = {countries[this.state.values.country - 1].name}
                                city= {cities[this.state.values.city].name}

                            />: null
                        }

                    </div>
                    {this.state.activeTab < 4 ?

                        <div className="d-flex justify-content-center">
                            <Button
                                className="btn btn-light mr-4"
                                disabled={this.state.activeTab === 1 ? 'true' : null}
                                onClick={this.prevTab}
                                btnContent='Previous'
                            />
                            <Button
                                className="btn btn-secondary"
                                disabled=''
                                onClick={this.nextTab}
                                btnContent='Next'
                            />
                        </div>: null
                    }
                    {this.state.activeTab === 4 ?

                        <div className="d-flex justify-content-center">
                            <Button
                                className="btn btn-primary"
                                disabled=''
                                onClick={this.reset}
                                btnContent='Reset'
                            />
                        </div>: null
                    }
                </form>
            </div>
        );
    }
}
