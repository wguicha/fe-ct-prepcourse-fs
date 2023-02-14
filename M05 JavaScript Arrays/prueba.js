function incrementarPorUno(array) {
    // El arreglo recibido por parámetro contiene números.
    // Retornar un arreglo con los elementos incrementados en +1.
    // Tu código:
    return array.map((x) => {
       x + 1;
    })
 }

 console.log(incrementarPorUno(['1', '2', '3', '4']));