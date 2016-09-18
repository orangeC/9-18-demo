import React, { PropTypes } from 'react';
import Card from './components/Card';

import Bg from './image/home1.jpg';
import { getJson } from './util/helper';


class Work extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:true
    }
  }
  componentDidMount(){
    getJson()
    .then( (recdata) => {
      this.setState({
        data:recdata.getJson,
        wait:false
      })
    } )
  }
  render () {

    let Cards = this.state.data.map( (item,i) => <Card {...item} key={i} /> );

    return(
      <div className="container-fluid">
        <div className="row" style={{marginTop:'20px'}}>
        {this.state.wait ? "aaa" : Cards}
        </div>
      </div>
    )
  }
}

export default Work;
