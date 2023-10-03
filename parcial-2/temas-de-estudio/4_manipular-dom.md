## Manipulacion del DOM (03-10-23)

### DOM


### Como seleccionar objetos del DOM
#### getElementById()
Dado un contenedor:

```html
<div id="containerId" class="containerClass" name="containerName">
    ...
</div>
```

Se puede seleccionar con JS mediante el atributo id del elemento HTML:

```js
const containerById = document.getElementById("containerId")
```

#### getElementByClassName()
El anterior elemento se puede seleccionar con la clase del elemento:

```js
const containerByClassName = document.getElementByClassName("containerClass")
```

#### getElementByName()
O con el atributo name del elemento HTML:
```js
const containerByName = document.getElementByName("containerName")
```

#### getElementByTagName()
Este metodo permite seleccionar un arreglo de elementos que coincidan con el nombre de la etiqueta dada como argumento.

Por ejemplo:
```js
const arrElementsByTagName = document.getElementByTagName("div")
```

O bien, suponiendo una estructura mas compleja, puede seleccionarse un elemento especifico de este arreglo mediante:
```js
const firstElementByTagName = document.getElementByTagName("div")[0]
```

#### querySelector()
Selecciona un elemento por:

1. Id: 
```js
const containerId = document.querySelector("#containerId")
```

2. Clase:
```js
const containerClass = document.querySelector(".containerId")
```

3. Etiqueta:
```js
const containerTag = document.querySelector("div")
```


#### querySelectorAll()
Selecciona un arreglo de elementos con los metodos de querySelector(): id, clase o etiqueta.

```js
const arrElements = document.querySelectorAll(".container")
```

### Gestionar clases del DOM

#### className()
#### classList()


### Gestionar nodos del DOM
#### appendChild()