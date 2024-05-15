import React from "react";

const Input = ({label, type, name, onChange}) => {
    return (
        <div>
            <label>
                {label}: <br /> <input type={type} name={name} onChange={e => onChange(e.target.value)}/>
            </label>
            <br />
        </div>
    )
}

const ShowError = ({errors}) => {
    return (
        <ul style={{color: 'red'}}>
            {
                errors.map((error, i) => <li key={i}>{error}</li> )
            }
        </ul>
    )
}

export default class Validation extends React.Component {

    state = {
        email: '',
        password: '',
        errors: []
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = this.state

        let message = [];

        if(email.length === 0) {
            message = [...message, 'Email tidak boleh kosong']
        }

        if(password.length === 0) {
            message = [...message, 'Password tidak boleh kosong']
        }

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(email).toLowerCase())) {
            message = [...message, 'Email tidak valid']
        }

        if(password.length < 8) {
            message = [...message, 'Password terlalu pendek']
        }

        if(message.length > 0) {
            this.setState({
                errors: message
            })
        } else {
            alert(`
            Email: ${this.state.email}
            Password: ${this.state.password}
            `);
            this.setState({
                errors: []
            })
        }

        
    }

    render() {
        const style = {
            width: '400px',
            border: '1px solid black',
            padding: '10px',
            margin: '100px auto 0'

        }

        return (
            <div style={style}>
                {
                    this.state.errors && <ShowError errors={this.state.errors}/>
                }
                <h4>Login Page</h4>
                <form onSubmit={this.handleSubmit}>
                    <Input type="email" name="email" label="Email" 
                    onChange={value => this.setState({email : value})} />
                    <Input type="password" name="password" label="Password" 
                    onChange={value => this.setState({password : value})} />
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}