import React, { Component } from 'react';
import Screen from './screen';
import CalcBtns from './calcbtns';

class Calculator extends Component {
    state = {  
        screen: "0"
    }
    render() { 
        return ( 
            <div className="card"> 
                <Screen
                    displayText={this.state.screen}
                />
                <CalcBtns

                />
            </div>
        );
    }
}
 
export default Calculator;