import caqir from "./middleware";


let adlar = [];
adlar.push('Eltekin');

export let soz = new Map();
soz.set('ad', 'Eltekin');

export function deyis(value){
    debugger;
    soz.set('ad', value);
    caqir();
}


export function yarat(value){
    adlar.push(value);
    caqir();
}

export default adlar;