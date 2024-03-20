function encriptarTexto(text) {
    
    // Input del texto a ser encriptado y conversion para que siempre sea en minusculas
    const promptText = prompt('Texto a ser encriptado');
    text = promptText.toLowerCase();

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

    return console.log(text);
};




encriptarTexto();
