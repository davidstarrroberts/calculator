import React, { Component } from 'react';

class CalcBtns extends Component {
    state = { 
        row1: [
            '7', '8', '9', '/'
        ],
        row2: [
            '4', '5', '6', 'x'
        ],
        row3: [
            '1', '2', '3', '-'
        ],
        row4: [
            '0', '.', '=', '+'
        ]
    }
    render() { 
        return ( 
            <div>{this.state.row1.map(c => (
                <button
                    className="btn btn-sm btn-primary"
                >
                    {c}
                </button>
            ))}</div>
        );
    }

    makeButton(btnSymbol) {
        <button
            className="btn btn-sm btn-primary"
        >
            <span>{ btnSymbol }</span>
        </button>
    }
}
 
export default CalcBtns;
