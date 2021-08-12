import React, { Component } from 'react';
import Calculator from './calculator';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
          <div className="card">
            <h3>
              <a class="btn btn-primary m-2" href="https://davidstarrroberts.com" role="button">
                Resume
              </a>
              Calculator Application
              <a class="btn btn-primary m-2" href="https://github.com/davidstarrroberts" role="button">
                GitHub
              </a>
            </h3>
            <Calculator/>
          </div>
        );
  }
}
 
export default Navbar;