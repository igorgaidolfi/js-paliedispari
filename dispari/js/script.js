// alert('Pari o Dispari?')
// 1. CHIEDERE ALL'UTENTE DI INSERIRE UN NUMERO DA 1 A 5
let num = parseInt(prompt('Inserisci un numero da 1 a 5'))
// 2. CREARE UNA FUNZIONE CHE CREA UN NUMERO RANDOM DA 1 A 5
function random5Num(){
    return Math.floor(Math.random() * 5)+ 1
}
// 3. ASSEGNARE ALLA VARIABILE IL RISULTATO DELLA FUNZIONE
let numIA = random5Num()
// 4. FUNZIONE CHE RENDE LA SCELTA DEL IA OPPOSTA ALL'UTENTE
function againRand(x,y){
    while(x%2 == y%2){
        y = random5Num()
    }
    return y
}
//5. SE IL COMPUTER FA LA STESSA SCELTA DELL'UTENTE LO FA CAMBIARE DALLA FUNZIONE
if(num%2==0 || num%2==1){
    numIA = againRand(num, numIA)
}
// 6. FUNZIONE CHE SOMMA I DUE NUMERI, LI SOMMA E RITORNA IL RISULTATO
function isEvenOdd(x,y){
    let sum = x+y

    if(sum%2 == 0){
        return true
    }
    else{
        return false
    }
}
// 7. STAMPA IL RISULTATO DELLA FUNZIONE
if(isEvenOdd(num, numIA)){
    console.log(`${num} e ${numIA}. Ha vinto PARI`)
}
else{
    console.log(`${num} e ${numIA}. Ha vinto DISPARI`)
}



/* VERIFICA SE E' STATO INSERITO UN CARATTERE
let num=0
let flag = true
while(flag){
    num = parseInt(prompt('Inserisci un numero da 1 a 5'))
    if(num){
        flag = false
    }
    else{
        alert('Non hai inserito un numero!!!! Riprova!') 
    }
} */