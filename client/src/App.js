/* eslint-disable */

import React from 'react';
import './App.css';

import { ClickEPromiseClient } from './click-e_grpc_web_pb.js';
import { Empty } from './click-e_pb.js';

const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => { });

class App extends React.Component {
    
    _client = null;

    constructor(props) {
        super(props)
        
        this._client = new ClickEPromiseClient('http://localhost:8080')
        
        enableDevTools([this._client])

        /*this._client.getCount(new Empty()).then(res => {
            this.setState(state => ({count: res.getValue()}));
        }).catch(console.error)*/
        const stream = this._client.subcribe(new Empty())
        stream.on('data', res => {
            this.setState(state => ({count: res.getValue()}));
        })
        this.state = { count: 0 }

    }

    render() {
        const { count } = this.state;
        return (
            
            <div className="App">
                <header className="App-header">
                <h1>{count}</h1>
                <div>
                    <button onClick={this.inc}>Click-E</button>
                </div>
                </header>
            </div>
        );
    }

    inc = () => {
        this._client.inc(new Empty()).then(res => {
            this.setState(state => ({count: res.getValue()}));
        }).catch(console.log)
    }
}

export default App;
