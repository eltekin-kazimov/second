import React from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import './App.css';
import Tekin from "./components/Tekin";
import Kazimov from './components/Kazimov/Kazimov'
import X from './components/X/X';


let ob = {
    name: 'Eltekin',
    age: 27,
};


function App() {

    let arr = [];

    for (let x = 1; x <= 5; x++) {
        arr.push(x);
    }

    let new_li = arr.map(item => {
        let x = <Tekin num={item} />;
        return <li>{x}</li>;
    });

    return (
        <BrowserRouter>
            <div className="App">
                <ul>
                    <li> <X /> </li>
                    <li> <NavLink to="/soyad"> soyad </NavLink> </li>
                    <li> <NavLink to="/salam"> salam </NavLink> </li>
                    <br />
                    <li>{ob.name} - {ob.age} - Kazimov !</li>
                    <li>
                        <Route exact path="/salam" component={() => <Tekin num="99" />}/>
                        <Route path="/soyad" component={() => <Kazimov name="Xaqan" />} />
                    </li>
                    {new_li}
                </ul>
            </div>
        </BrowserRouter>
    );
}

export default App;
