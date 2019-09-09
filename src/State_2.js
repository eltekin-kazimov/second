import caqir from "./middleware";


let adlar = [];
adlar.push('Eltekin');

export function yarat(value){
    adlar.push(value);
    caqir();
}

export default adlar;