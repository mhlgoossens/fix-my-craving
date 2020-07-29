import React, { Component } from 'react';

class API extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: '',
    };
  }

  componentDidMount() {
    this.callAPI();
  }

  callAPI() {
    fetch('http://localhost:9000/test')
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  render() {
    const { apiResponse } = this.state;
    return (
      <div className="APItest">
        Hello from API test jsx
        <p className="backend">{apiResponse}</p>
      </div>
    );
  }
}

export default API;
