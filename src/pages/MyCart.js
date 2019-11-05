import React, { Component } from 'react';
import axios from 'axios'
import MyList from './MyList';


class MyCart extends Component {

  constructor(props) {
    super(props)
    this.state = {
      images: [],
      imgUrl: ''
    }
  }
  // componentDidMount() {

    // for (let i = 0; i < 5; i++) {

      // this.getImages()

    // }
    // getImages = () => {

      // const newe = [...this.state.images]
      // console.log(this.state.images);

    // }
     random = () => {
      axios({
        url: 'https://api.thecatapi.com/v1/images/search?format=json',
        method: 'get'
      })
        .then(res => {
          this.setState({
            imgUrl: res.data[0].url
          })
        })
    }
    // let allTasks;
    /////
    // allTasks = this.state.images.map((task) => {
    //   return <img src={task.url} />

    // })

    // add= ()=>{

  
    // }
    render() {
      
      return (
        <div>

          <button onClick={this.random}>random</button>
          <img onClick={this.addToList}src={this.state.imgUrl}/>
          <button onClick={()=>this.props.add(this.state.imgUrl)}>add </button>
          <br />
          {/* {allTasks} */}
        </div>
      )
    }
  }

export default MyCart;