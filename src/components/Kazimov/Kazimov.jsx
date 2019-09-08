import React from 'react';
import s from './Kazimov.module.css';


function Kazimov () {
    return (
        <div>
            <table className={s.soyad}>
                <tr>
                    <td>Eltekin Kazimov</td>
                    <td>Elturan Kazimov</td>
                </tr>
                <tr>
                    <td>Ruslan Kazimov</td>
                    <td>Ali Kazimov</td>
                    <td>Farid Kazimov</td>
                </tr>
            </table>
        </div>
    );
}

export default Kazimov;