import React from "react";

class FirstComponent extends React.Component {
    
    state = {
        number: 0
    }

    minus = () => {
        if (this.state.number > 0) {
            this.setState({number: this.state.number - 1})
        }
    }
    
    plus = () => {
        this.setState({number: this.state.number + 1})
    }

    render() {
        return (
            <div>
                <h1>Hai {this.props.nama},Selamat Datang di Halaman ke {this.state.number}</h1>
                <button onClick={this.minus}>-</button>
                <span>{' '} {this.state.number} {' '}</span>
                <button onClick={this.plus}>+</button>
            </div>
        )
    }

}

export default FirstComponent;