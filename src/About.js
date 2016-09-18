import React, { PropTypes } from 'react';
import {searchGit} from "./util/helper"

class About extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:true,
      inputValue:"hehe"
    }
  }
  handleChange(e){
    let value = e.target.value;
    this.setState({inputValue:value})
  }
  handleClick(){
    let name = this.state.inputValue;
    searchGit(name)
    .then( (recdata) => {
      // console.log(recdata)
      this.setState({
        data:recdata.getdata,
        wait:false
      }) 
    })
  }
  render () {
    let getInfo = (
        <div>
          <h2> {this.state.data.name} </h2>
          <img src={this.state.data.avatar_url}  />   
        </div>
      )
    return(
      <div> 
        <input type="text" placeholder="use" value={this.state.inputValue} onChange={this.handleChange.bind(this)} />
        <button onClick={this.handleClick.bind(this)} >搜索</button><br/>   
        {this.state.wait ? '正在获取数据。。。' : getInfo }
      </div> 
    )
  }
}

export default About;
