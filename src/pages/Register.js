import React, { Component } from 'react';
import NewUser from '../components/newuser/NewUser';

import Request from '../agent';


class Register extends Component {
  state = {
    email: "",
    password: "",
    username: "",
    organization: "",
  };
  constructor(props) {
    super(props);
    

    // this.changeEmail = ev => this.props.onChangeEmail(ev.target.value);
    // this.changePassword = ev => this.props.onChangePassword(ev.target.value);
    // this.changeUsername = ev => this.props.onChangeUsername(ev.target.value);
    // this.changeOrganization = ev => this.props.onChangeUsername(ev.target.value);
    // this.submitForm = (username, email, password) => ev => {
    //   ev.preventDefault();
    //   this.props.onSubmit(username, email, password);
    // };
  }

  registerUser = (email, password, username, organization) => {
    Request.Auth.register(email, password, username, organization)
    .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    
    this.registerUser(this.state.email, this.state.password, this.state.username, this.state.organization);
  }
 
  render() {
    return (

      <div className="container">
        <NewUser 
        email={this.state.email}
        password={this.state.password}
        username={this.state.username}
        organization={this.state.organization}
        handleFormSubmit={this.handleFormSubmit}
        handleInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default Register;
