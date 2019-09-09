import React from 'react';
import s from './Tekin.module.css';

function Tekin (props) {

    return (
        <div className={s.ad}>
            Kazimov {props.num.toString()}!
            x ----  {props.name.name}!
            y ----  {props.arr}
            {props.qis()}
        </div>
    );
}

export default Tekin;
