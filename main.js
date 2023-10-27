const distanza = prompt( "quanti km vuoi percorrere?", "20");
const eta = prompt( "quanti anni hai?", "20");

const distNum = Number(distanza);
console.log = (distNum);
const etaNum = Number(eta) 
console.log = (etaNum)


let prezzo = (distNum * 0.21 );
console.log =(prezzo);
document.getElementById("price").innerHTML = `il viaggio costa:${prezzo.toFixed(2)} $`;

let discount20 = (prezzo - (prezzo/100*20));

let discount40 = (prezzo - (prezzo/100*40));



if (etaNum < 18 ) {
    
    document.getElementById("sconto").innerHTML = ` per te uno sconto del 20%, il biglietto per te costa: ${ discount20.toFixed(2) } $ `;

}else if (etaNum > 65) {
    document.getElementById("sconto").innerHTML = ` per te uno sconto del 40%, il biglietto per te costa: ${ discount20.toFixed(2) } $`
}else {
    document.getElementById("sconto").innerHTML = ` tu pagi intero, il biglietto per te costa: ${ prezzo.toFixed(2) } $ `
}

