# DesafioOne
Repositorio para el desafio One 


Primero se crea una variable lista llamada listaAmigos

Luego creamos una función VariableMensaje para mostrar los distintos mensajes que requiere el desafio. La idea de la función es optimizar los distintos mensajes y no utilizar alert o funciones similares. La función crea una variable llamada resultado y lo obtiene del elemento html "resultado". Luego lo deja en blanco y crea una constante li que le asigna el mensaje y lo tiñe de rojo agregando el resultado al listado

Luego la función agregar amigo.Esta crea 3 constantes, la primera para obtener el elemento html "amigo", la segunda para tomar lo escrito en la barra de texto y agregarlo a la constante nombre y la última para crear una variable que sea la lista de amigos obtenida del elemento html "listaamigos"

Posterior a eso, valida si lo agregado son solo letras, en caso contrario despliega un mensaje con la función creada previamente indicando al usuario que solo agregue letras

Luego valida que el nombre no esté repetido para que este sea modificado en caso de existir 2 Juan (uno ser Juan y otro JuanB por ejemplo)

Finalmente agrega el nombre a la variable listaamigos de html y crea el elemento mostrable de esta última.

Por último, tenemos la función sortearamigo que permite elegir un nombre de la lista, mediante el índice de los elementos creados, con el fin de que escoja uno. para mostrar el resultado mediante un nuevo elemento li con el mensaje "el amigo secreto sorteado es XXXX"
