import React, { Component } from 'react';
import { Map, LocationPin } from './Map';
import Emoji from './Emoji';
import './emoji.css'

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
        <ol>
          <li><a href="#" onClick={this.makeNewPin}><Emoji symbol="🍔🥩" label="glutony" /></a></li>
          <li><Emoji symbol="🍆🍑" label="lust" /></li>
          <li><Emoji symbol="💵🤑" label="greed" /></li>
          <li><Emoji symbol="🦥💤" label="sloth" /></li>
          <li><Emoji symbol="😤💣" label="wrath" /></li>
          <li><Emoji symbol="🏴‍☠️💔" label="envy" /></li>
          <li><Emoji symbol="😎😏" label="pride" /></li>
        </ol>
      </div>
    </div>
  );
}
}

export default Home;
