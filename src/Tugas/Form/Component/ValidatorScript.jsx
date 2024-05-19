import React from "react";
import * as Validator from 'validatorjs';



const Input = ({label, type, name, onChange}) => {
    return (
        <div>
            <label>
                {label}: <br /> <input style={{width: '80%'}} type={type} name={name} onChange={e => onChange(e.target.value)} />
            </label>
            <br />
        </div>
    )
}

const ShowError = ({errors}) => {
    if(errors.length > 0) {
        return (
            <ul style={{color: 'red', marginLeft: '-20px' }}>
                <li>{errors}</li>
            </ul>
        )
    }
    
}

export default class ValidatorScript extends React.Component {

    state = {
        email: '',
        password: '',
        emailErrors: '',
        passErrors: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {email, password} = this.state

        let data = {email, password}

        let rules = {
            email: 'required|email',
            password: 'required|min:8'
        }

        const validation = new Validator(data, rules)
        if (validation.passes()) {
            alert(`
            Email = ${email}
            Password = ${password}

            Thanks!
            `)
        }
        this.setState({
            emailErrors: [
                ...validation.errors.get('email'),
            ],
            
            passErrors: [
                ...validation.errors.get('password')
            ]
        })
        
    }

    render() {

        const style = {
            width: '400px',
            padding: '20px',
            margin: '100px auto',
            border: '1px solid black'
        }

        return (
            <div style={style}>
                <form onSubmit={this.handleSubmit}>
                    <h4>Login Form</h4>
                    <Input type="email" name="email" label="Email"
                    onChange={value => this.setState({email: value})} />
                    {
                        this.state.emailErrors && <ShowError errors={this.state.emailErrors} />
                    }

                    <Input type="password" name="password" label="Password" 
                    onChange={value => this.setState({password: value})} />
                    {
                        this.state.passErrors && <ShowError errors={this.state.passErrors} />
                    }
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}