import React, { Component } from 'react';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import Contact from './Components/Signup/Contact';
import index from './Components/Signin/index';
import { BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
  return(
      <div >
        <Router>
        <switch>
          < Route exact path='/' component={Signup}></Route>
          < Route exact path='/Signin' component ={Signin}></Route>
          < Route exact path='/contact'component ={Contact}></Route> 
          < Route exact path='/index'component = {index }></Route>  
        </switch>
        </Router>
    </div>
  );
  }
}

  export default App;
