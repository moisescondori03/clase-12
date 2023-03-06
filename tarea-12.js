/**En ésta última tarea, repasarás una mezcla con los conocimientos de la clase anterior.

Hacé una función llamada saludo, en la que el prompt va a solicitar el nombre del ingresante de
la página. Una vez ingresado, deberá salir una alerta dando una bienvenida.

Si el usuario no ingresa nada, debería salir un mensaje que diga que ingrese su nombre.
¡Además, podes agregar alertas en todos los lugares que necesites,
como por ejemplo, al enviar el formulario! */

function saludo(){
    const nombre=prompt('ingrese su nombre:')||'';
    if(nombre!=''){
        alert(`Hola ${nombre}!!`)
    }else{
        saludo();
    }
    
}
saludo();