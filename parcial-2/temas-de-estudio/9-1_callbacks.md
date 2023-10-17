## Asincronia en JavaScript (17/10/23)

### Callbacks

Las funciones callback no son más que un tipo de funciones que se pasan por parámetro a otras funciones. Además, los parámetros de dichas funciones toman un valor especial en el contexto del interior de la función.

Por ejemplo, el siguiente codigo:

```js
const list = ["A", "B", "C"];

for (let i = 0; i < list.length; i++) {
  console.log("i=", i, " list=", list[i]);
}
```

En la variable `i` tenemos la posición del array que estamos recorriendo. Este valor irá desde 0 hasta 2, mientras que con `list[i]` accedemos a la posición del array para obtener el elemento, es decir, desde A hasta C.

Ahora veamos, como podemos hacer este mismo bucle utilizando el método `forEach()` del array al cuál le pasamos una función callback:

```js
const list = ["A", "B", "C"];

function action(element, index) {
  console.log("i=", index, "list=", element);
}

list.forEach(action);
```

Esto representa el mismo codigo que:

```js
list.forEach((element, index) => {
  console.log("i=", index, "list=", element)
});
```

[Callbacks](https://lenguajejs.com/javascript/asincronia/callbacks/)

### Promises
[Promises](https://lenguajejs.com/javascript/asincronia/promesas/)

### Async / Await
[Async/await](https://lenguajejs.com/javascript/asincronia/async-await/)