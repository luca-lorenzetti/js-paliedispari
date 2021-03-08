/* 

Palidroma

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma


Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */


// FUNZIONE DI CONTROLLO
function inputIsOk(scelta){

    if( scelta  == 1 || scelta == 2){
        return true;
    }
    else{
        return false;
    }
}

// FUNZIONE PALINDROMA
function palindromo(){
    var input = prompt("Inserisci una parola");
    var string = input.split('').reverse().join('');

    if(input.toLowerCase() == string){
        console.log(input + " e' una parola palindroma")
    }
    else{
        console.log(input + " non e' una parola palindroma") 
    }
}

// FUNZIONE PARI O DISPARI

function whoWIn(){
    var numero,scelta;

    do{
        scelta = prompt("Scegli pari o dispari");
    }while( scelta.toLocaleLowerCase() != "pari" && scelta.toLocaleLowerCase() != "dispari" )


    do{
        numero =  parseInt(prompt("Inserisci un numero tra 1 e 5"));
    }while(  numero < 1 || numero > 5 )

    var ris = numero + Math.floor(Math.random()*5+1);
    
    if( scelta.toLocaleLowerCase() == "pari"){
        scelta = 0;
    }
    else{
        scelta = 1;
    }

    if( ris%2 == scelta ){
        console.log("La somma dei vostri numeri e' "+ris+",  bravo hai vinto!");
    }
    else{
        console.log("La somma dei vostri numeri e' "+ris+", mi dispiace hai perso");
    }

}



var scelta = 0;

do{
    scelta = parseInt(prompt("Inserisci la modalità interessata\n1) Palindromo\n2) Gioco pari o dispari"));
}while( !inputIsOk(scelta))


// PALINDROMO

if( scelta == 1){
    palindromo();
}

// GIOCO PARI E DISPARI
else{
    whoWIn();
}

