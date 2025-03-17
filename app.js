const listaAmigos = [];

function VariableMensaje(mensaje) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    const li = document.createElement("li");
    li.textContent = mensaje;
    li.style.color = "red";
    resultado.appendChild(li);
}

function agregarAmigo() {
    const NombreAgregado = document.getElementById("amigo");
    const nombre = NombreAgregado.value.trim();
    const listaAmigosFinal = document.getElementById("listaAmigos");
    
    // Validación carácteres
    if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/.test(nombre)) {
        VariableMensaje("Por favor, ingresa solo letras y sin espacios vacíos.");
        return;
    }
    
    // Validación nombre repetido
    if (listaAmigos.includes(nombre)) {
        VariableMensaje("Ese nombre ya fue agregado.");
        return;
    }
    
    listaAmigos.push(nombre);
    
    // Creación de la lista
    const li = document.createElement("li");
    li.textContent = nombre;
    listaAmigosFinal.appendChild(li);
    
    NombreAgregado.value = ""; // Para limpiar la barra de texto
    resultado.innerHTML = ""; // Para limpiar mensajes
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        VariableMensaje("Debe ingresar al menos un nombre antes de sortear.");
        return;
    }
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    // Para elegir el nombre aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const nombreSorteado = listaAmigos[indiceAleatorio];
    
    // Para mostrar resultado
    const li = document.createElement("li");
    li.textContent = `El amigo secreto sorteado es: ${nombreSorteado}`;
    li.style.color = "green";
    resultado.appendChild(li);
}
