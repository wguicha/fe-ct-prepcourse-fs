 function esPrimo(num) {
    // Retornar true si "num" es primo.
    // De lo contrario retorna false.
    // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
    // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
    // [Nota]: los números negativos, 0 y 1 NO son números primos.
    // Tu código:
    if (num <= 1){
       return false;
    }else{
       for (i=2;i<num;i++){
        console.log('Iter i:' + i + ' ' + (num % i)) ;
          if(num % i === 0){
             return false;
          }
       }
    }
 
    return true;
 }

 console.log(esPrimo(7));