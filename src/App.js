import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Tekin from "./components/Tekin";
import Kazimov from './components/Kazimov/Kazimov'


let ob = {
    name: 'Eltekin',
    age: 27,
};


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <ul>
                    <li>{ob.name} - {ob.age} - Kazimov !</li>
                    <li>
                        <Route path="/salam" component={Tekin}/>
                        <Route path="/soyad" component={Kazimov} />
                    </li>
                </ul>
            </div>
        </BrowserRouter>
    );
}

export default App;
