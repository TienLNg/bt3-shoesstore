import React, { Component } from 'react'
import Shoesitem from './shoes-item'
import data from './data.json';


export default class Shoesstore extends Component {
  render() {
    return (
      <div>
        <h1>Shoes Store</h1>

        <Shoesitem></Shoesitem>
        data
      </div>
    )
  }
}
