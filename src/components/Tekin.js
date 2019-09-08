import React from 'react';
import s from './Tekin.module.css';

function Tekin (props) {
    return (
        <div className={s.ad}>
            Kazimov {props.num.toString()}!
        </div>
    );
}

export default Tekin;
