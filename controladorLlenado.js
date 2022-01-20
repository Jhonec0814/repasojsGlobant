let productos=[
    {nombre:"Aguardiente tapa roja",tamano:"1/2 Botella", precio:200000, foto:"img/taparoja.jpg"},
    {nombre:"Aguardiente tapa azul", tamano:"1/2 Botella", precio:220000, foto:"img/tapaazul.png"},
    {nombre:"Tequila Don Julio",tamano:"1 Botella Grande", precio:300000, foto:"img/tequiladonjulio.png"},
    {nombre:"Cerveza Aguila",tamano:"1 Botella", precio:8000, foto:"img/cervezaaguila.jpg"},
    {nombre:"Cerveza Pilsen",tamano:"1 Botella", precio:7000, foto:"img/cervezapilsen.png"},
    {nombre:"Ron Medellin",tamano:"1/2 Botella", precio:220000, foto:"img/ronmedellin.png"},
    {nombre:"Ron Añejo 220 años de Caldas",tamano:"1/2 Botella", precio:100000, foto:"img/ronañejodecaldas.jpg"},
    {nombre:"Agua",tamano:"1 Botella", precio:4000, foto:"img/agua.png"},
    {nombre:"Soda",tamano:"1 Botella", precio:6000, foto:"img/soda.png"},
    {nombre:"Gatorade",tamano:"1 Botella", precio:9000, foto:"img/gatorade.png"},
    
]

let productos2=[1,2,3,4,5,6]

// Crear una referencia a la etiquete fila

let fila=document.getElementById("fila")

// Recorrer el arreglo y sacarle fotocopia a la información que hay por dentro

productos.forEach(function(producto){
    
    let columna = document.createElement("div")
    columna.classList.add("col")
    
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    let imagen = document.createElement("img")
    imagen.classList.add("card-img-top")
    imagen.classList.add("h-50")
    imagen.classList.add("p-3")
    imagen.src=producto.foto

    let nombreProducto = document.createElement("h2")
    nombreProducto.textContent=producto.nombre

    let tamanoProducto = document.createElement("h4")
    tamanoProducto.textContent=producto.tamano

    let precioProducto = document.createElement("h3")
    precioProducto.textContent=producto.precio

    // Padres e hijos

    tarjeta.appendChild(imagen)
    tarjeta.appendChild(nombreProducto)
    tarjeta.appendChild(tamanoProducto)
    tarjeta.appendChild(precioProducto)

    columna.appendChild(tarjeta)

    fila.appendChild(columna)

    

})
