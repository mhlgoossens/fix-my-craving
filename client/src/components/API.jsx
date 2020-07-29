import React, { Component } from 'react';

class API extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: ''
        };
    }

    callAPI() {
        fetch('http://localhost:9000/test')
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
    }

    componentDidMount() { 
        this.callAPI();
    }

    render() {
        return (
            <div className="APItest">
                Hello from API test jsx
                <p className="backend">{this.state.apiResponse}</p>
            </div>
        )
    }
}

export default API;