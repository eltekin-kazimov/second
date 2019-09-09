import React from 'react';
import s from './Kazimov.module.css';
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import Tekin from './../Tekin';


function Kazimov(props) {

    let newLink = React.createRef();

    function play(){
        let Z = newLink.current.value;
        alert ( Z );
    }

    return (
        <div>
            <table className={s.soyad}>
                {/*<tr>*/}
                {/*    <td><NavLink to="/bla"> Google </NavLink></td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td><Route path="/bla" render={() => <Tekin num={88} />}/></td>*/}
                {/*</tr>*/}
                <tr>
                    <td>{props.name}</td>
                </tr>
                <tr>
                    <td>Eltekin Kazimov</td>
                    <td>Elturan Kazimov</td>
                </tr>
                <tr>
                    <td>Ruslan Kazimov</td>
                    <td>Ali Kazimov</td>
                    <td>Farid Kazimov</td>
                </tr>
                <tr>
                    <td><textarea ref={newLink}></textarea></td>
                    <td><button onClick={() => alert ( newLink.current.value )}></button></td>
                </tr>
            </table>
        </div>
    );
}

export default Kazimov;