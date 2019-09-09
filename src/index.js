import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Muellim from './components/Muellim/Muellim';
import State, {qisqir} from './State';
import * as serviceWorker from './serviceWorker';
import state_2 from './State_2';
import {yarat, deyis, soz} from "./State_2";


let ob = {
    name: 'Sultan',
};
State.ob = ob;

ReactDOM.render(<App state={State} qis={qisqir}/>, document.getElementById('root'));

export function muellimCaqir(){
    ReactDOM.render(<Muellim state={state_2} yarat={yarat} deyis={deyis} soz={soz} />, document.getElementById('eltekin'));
}

muellimCaqir();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
