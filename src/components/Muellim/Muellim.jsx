import React from 'react';
import s from './Muellim.module.css';


function Muellim(props) {

    let arr = props.state.map((item) => {
        return (
            <div className={s.muel}>
                {item}
            </div>
        );
    });



    let shpion = React.createRef();

    return (
        <div>
            {arr}
            <div>
                <textarea onChange={() => props.deyis(shpion.current.value)} value={props.soz.get('ad')} ref={shpion} ></textarea>
            </div>
            <div>
                <button onClick={() => props.yarat(shpion.current.value)}> Tesdiqle</button>
            </div>
        </div>
    );
}

export default Muellim;