import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Tooltip } from './components/tooltip/Tooltip';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Tooltip title="Tooltip">
                    <p>Hello</p>
                </Tooltip>
            </header>
        </div>
    );
}

export default App;
