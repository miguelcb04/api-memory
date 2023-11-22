let seed = [
    { id: 1, nombre: "huevos", precio: 2 },
    { id: 2, nombre: "ternera", precio: 20 },
    { id: 3, nombre: "galletas", precio: 3 }
]

let productos = null;

export default function getProductos() {
    // if (users)
    //     return users;
    // if (!global._users) {
    //     users = seed;
    //     global._users = users;
    // } else {
    //     users = global._users;
    // }

    // Sólo cargamos valores iniciales una sóla vez
    if (!productos) 
    productos = seed;
    
    return productos;
}

