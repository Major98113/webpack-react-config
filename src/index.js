import React, { Component } from 'react';
import { render } from 'react-dom';
import './main.scss';

class App extends Component{
    render() {
        return(
            <>
                <div>Hello worlde</div>
            </>
        );
    }
}

render(<App/>, document.getElementById('root'));