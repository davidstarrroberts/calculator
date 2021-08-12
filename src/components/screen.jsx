import React, { Component } from 'react';

class Screen extends Component {
    state = {  }
    render() { 
        return (
            <div className="card">
                <span>{ this.props.displayText} </span>
            </div>
        );
    }
}
 
export default Screen;