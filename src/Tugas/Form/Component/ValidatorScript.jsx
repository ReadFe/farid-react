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
    return (
        <ul style={{color: 'red', marginLeft: '-20px' }}>
            {errors.map((error, i) => <li key={i}>{error}</li> )}
        </ul>
    )
}

export default class ValidatorScript extends React.Component {

    state = {
        email: '',
        password: '',
        errors: ''
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
            errors: [
                ...validation.errors.get('email'),
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
                    {
                        this.state.errors && <ShowError errors={this.state.errors} />
                    }
                    <h4>Login Form</h4>
                    <Input type="email" name="email" label="Email"
                    onChange={value => this.setState({email: value})} />

                    <Input type="password" name="password" label="Password" 
                    onChange={value => this.setState({password: value})} />
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}