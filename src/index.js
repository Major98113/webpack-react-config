import React, { Component } from 'react';
import { render } from 'react-dom';
import './main.scss';

class App extends Component{
    render() {
        return(
            <React.Fragment>
                <div>Helaslo world</div>
            </React.Fragment>
        );
    }
}

render(<App/>, document.getElementById('root'));