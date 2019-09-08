import React from 'react';
import s from './X.css'


function X(props){
    let xxx = [1, 2, 3, 4, 5].map(item => <div className={s.divim}> {item} </div>);
    return xxx;
}

export default X;