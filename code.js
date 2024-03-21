//Funcion para encriptar el texto pasados los parametros
function encriptarTexto(text) {
    // Input del texto a ser encriptado y conversion para que siempre sea en minusculas
    text = text.toLowerCase();
    // Reglas de desencriptación
    const reglasEncriptacion = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    }
    
    for (let id in reglasEncriptacion)  {
        const regla = new RegExp(id, 'gi');
        text = text.replace(regla, reglasEncriptacion[id]);
    }
    console.log(text);
    return text;
};

//Funcion para modificar el dom
function actualizarContenido () {
    //Esta variable guarda el contenido del texto
    let textoIngresado = document.getElementById('textEntered').value;
    //Esta parte elimina la imagen del elemento
    let imagen = document.getElementById('imagenTarjeta');
    imagen.parentNode.removeChild(imagen);
    //Esta parte llama la funcion textElement para cambiar el contenido del texto
    textElement ('#tituloTarjeta', '');
    textElement ('#tituloModificado', 'Texto Encriptado...');
    textElement ('#cuerpoTarjeta', '');
    textElement ('#textoModificado', encriptarTexto(textoIngresado));
    clearBox();
}

//Funcion para cambiar los atributos de un elemento
function textElement (id, textWritten) {
    let innerElement = document.querySelector(id);
    innerElement.innerHTML = textWritten;
}

//Esta funcion limpia el contenido del input de texto
function clearBox(){
    document.querySelector('#textEntered').value = ' ';
}
