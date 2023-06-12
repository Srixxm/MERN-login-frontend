import React, { Component } from 'react'

export class SignUpComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            firstName : "",
            lastName : "",
            email : "",
            password : ""
        }
    }

    firstNameHandler = event => {
        this.setState(
            {
                firstName : event.target.value
            }
        )
    }

    lastNameHandler = event => {
        this.setState(
            {
                lastName : event.target.value
            }
        )
    }

    emailHandler = event => {
        this.setState(
            {
                email : event.target.value
            }
        )
    }

    passwordHandler = event => {
        this.setState(
            {
                password : event.target.value
            }
        )
    }

    formSubmitHandler = event => {
        event.preventDefault()
        console.log(
            this.state.firstName,
            this.state.lastName,
            this.state.email,
            this.state.password
        )

        fetch('http://localhost:3500/api/v1/signup',{
            method : 'POST',
            crossDomain: true,
            headers: {
                'Content-type' : 'application/json',
                'Access-Control-Allow-Origin' : '*' 
            },
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
            })
        })
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
         })
    }


  render() {
    const {firstName, lastName, email, password} = this.state
    return (
        <form onSubmit={this.formSubmitHandler}>
            <h3>Sign Up</h3>

            <div className='mb-3'>
                <lable>First Name</lable>
                <input
                type='text'
                className='form-control'
                placeholder='Enter your First Name'
                value={firstName}
                onChange={this.firstNameHandler}
                required
                />
            </div>

            <div className='mb-3'>
                <lable>Last Name</lable>
                <input
                type='text'
                className='form-control'
                placeholder='Enter your Last Name'
                value={lastName}
                onChange={this.lastNameHandler}
                required
                />
            </div>

            <div className='mb-3'>
                <lable>Email</lable>
                <input
                type='email'
                className='form-control'
                placeholder='Enter your email'
                value={email}
                onChange={this.emailHandler}
                required
                />
            </div>

            <div className='mb-3'>
                <lable>Password</lable>
                <input
                type='password'
                className='form-control'
                placeholder='Enter your password'
                value={password}
                onChange={this.passwordHandler}
                required
                />
            </div>


            <div className='d-grid'>
                <button type='submit' className='btn btn-primary'>Sign up</button>
            </div>

            <p className='forgot-password text-right'>
                Already registered, <a href='/login'> sign-in here</a>
            </p>
        </form>
    )
  }
}

export default SignUpComponent