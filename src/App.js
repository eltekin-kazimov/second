import React from 'react';
import './App.css';
import Tekin from "./components/Tekin";


let ob = {
    name: 'Eltekin',
    age: 27,
};


function App() {
    return (
        <div className="App">
            <ul>
                <li>{ob.name} - {ob.age}  - Kazimov ! </li>
                <li> {Tekin()} </li>
                <li> <Tekin /> </li>
                <li> Baki Nesimi r. </li>
                <li> Baki Sebail r. </li>
            </ul>
        </div>
    );
}

export default App;
