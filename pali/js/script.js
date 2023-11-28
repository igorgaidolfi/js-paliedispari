// 1. CHIEDERE ALL'UTENTE DI SCRIVERE UNA PAROLA
let word = prompt('Inserisci una parola')
isPalindrome(word)
// 2. FUNZIONE CHE PERMETTE DI VERIFICARE SE UNA PAROLA E' PALINDROMA
function isPalindrome(pali){
    const arr = []
// 3. DIVIDERE PER LETTERA LA PAROLA INSERITA IN UN ARRAY 
    for(let i=0;i<pali.length;i++){
        arr.push(pali[i])
    }
// 4. INVERTIRE L'ORDINE DELL'ARRAY
    arr.reverse()
// 5. DICHIARARE UNA VARIABILE PER LA PAROLA INVERTITA
    let word2= ""
// 6. TRASFORMARE L'ARRAY IN UNA PAROLA
    for(let i=0;i<word.length;i++){
        word2+= arr[i]
    }
// 7. CONTROLLARE SE LA PAROLA E' PALINDROMA E STAMPARE IL RISULATO
    if(pali == word2){
        console.log(`${word2} e' palindroma`)
    }
    else{
        console.log(`${word2} non e' palindroma`)
    }
    
}