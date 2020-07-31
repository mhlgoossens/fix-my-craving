import React, { Component } from 'react';
import { Map } from './Map';
import Emoji from './Emoji';
import './emoji.css';

// query params
const lat = 52.3577442;
const lng = 4.853146;
const radius = 500;
const type = 'restaurant';
const keyword = 'vis';

class Home extends Component {
// function Home() {

  makeNewPin = async (e) => {
    e.preventDefault();
    console.log(e.target);
    await fetch(`/api/getPlace/?location=${lat},${lng}&radius=${radius}&type=${type}&keyword=${keyword}`)
    .then(res => res.json())
    .then(data => console.log(data));
    // LocationPin call should come here; use fetch result for coordinates
  }

  render() {
  return (
    <div className="container">
      <Map />
      <div className="cravings">
        <ul>
          <li><button className="fetchButton" onClick={this.makeNewPin}><Emoji symbol="🍔🥩" label="glutony" /></button></li>
          <li><button className="fetchButton" onClick={this.makeNewPin}><Emoji symbol="🍆🍑" label="lust" /></button></li>
          <li><button className="fetchButton" onClick={this.makeNewPin}><Emoji symbol="💵🤑" label="greed" /></button></li>
          <li><button className="fetchButton" onClick={this.makeNewPin}><Emoji symbol="🦥💤" label="sloth" /></button></li>
          <li><button className="fetchButton" onClick={this.makeNewPin}><Emoji symbol="😤💣" label="wrath" /></button></li>
          <li><button className="fetchButton" onClick={this.makeNewPin}><Emoji symbol="🏴‍☠️💔" label="envy" /></button></li>
          <li><button className="fetchButton" onClick={this.makeNewPin}><Emoji symbol="😎😏" label="pride" /></button></li>
        </ul>
      </div>
    </div>
  );
}
}

export default Home;
