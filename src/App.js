import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import MyCart from './pages/MyCart';
import Logo from './pages/Logo';
import MyList from './pages/MyList';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class App extends React.Component {

constructor(props){
  super(props)
  this.state = {
    mylist: []
  }
}
add=(url)=>{
this.setState({
  mylist: [...this.state.mylist, url]
})
}

clearList= () => {
  this.setState({
    mylist : []
  })
}

clearItem = (cat) => {
  const mylist = this.state.mylist; //copy of orignial
  const catIndex = mylist.indexOf(cat)
  mylist.splice(catIndex,1);
  this.setState({mylist})
} 




  render(){
  return (
    <div>
<Router>
  
        <nav>
        <Logo/>

          <Link className="hLink" to='/'>Home </Link>{' | '}
           <Link className="hLink" to='/About'>About </Link>{' | '}
        <Link className="hLink" to='/MyCart'>My Cart</Link>{' | '}
        <Link className="hLink" to='/MyList'>My List </Link>
        </nav>

      <div>
        
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/About' component={About} />
        <Route path='/MyCart' component={ ()=> <MyCart add={this.add} /> }/>
        <Route path='/MyList' component={()=> <MyList clearItem={this.clearItem} clearList={this.clearList} mylist={this.state.mylist}/>} />
        </Switch>
      </div>
  </Router>
  {/* <MyCart /> */}
  
  
   </div>

    );
  }
}
export default App;

