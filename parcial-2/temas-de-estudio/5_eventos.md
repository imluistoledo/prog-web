## Eventos (05-10-23)

### Que son los eventos
En Javascript existe un concepto llamado evento, que no es más que una notificación de que alguna característica interesante acaba de ocurrir, generalmente relacionada con el usuario que navega por la página.

Como desarrolladores, nuestro objetivo es preparar nuestro código para que cuando ocurra un determinado evento, se lleve a cabo una funcionalidad asociada. De esta forma, podemos preparar nuestra página o aplicación para que cuando ocurran ciertos eventos (que no podemos predecir de otra forma), reaccionen a ellos.

<div class="page">

Dichas características pueden ser muy variadas:
- Click de ratón del usuario sobre un elemento de la página
- Pulsación de una tecla específica del teclado
- Reproducción de un archivo de audio/video
- Scroll de ratón sobre un elemento de la página
- El usuario ha activado la opción "Imprimir página"

<div class="page">

### Formas de manejar eventos
Existen varias formas diferentes de manejar eventos en Javascript. Cada una de estas opciones se puede utilizar para gestionar eventos en Javascript de forma equivalente, pero cada una de ellas tiene sus ventajas y sus desventajas.

A continuación, utilizaremos el evento clic para demostrar las formas de manejar los eventos.

1. #### Mediante atributos HTML:
Suponiendo el HTML para el elemento botón:
```HTML
<button>Saludar</button>
```
Como cualquier otro elemento, podemos modificar sus atributos directamente en la etiqueta:
```HTML
<button onClick="alert('Hello!')">Saludar</button>
```
De este modo, cuando el usuario haga click con el ratón en el botón "Saludar", se disparará el evento click en ese elemento HTML. Dicho botón, al tener un atributo `onClick` (cuando hagas click), ejecutará el código que tenemos asociado en el valor del atributo HTML.

Otra manera de lograr este mismo resultado es reorganizando la funcionalidad de manera que el código que contendrá la función a ejecutar esté separado del llamado de dicha función en la propiedad HTML. Así, el código es más limpio al tener una función con más de una línea de código:
```HTML
<script>
  function doTask() {
    alert("Hello!");
  }
</script>

<button onClick="doTask()">Saludar</button>
```

1. #### Mediante propiedades JavaScript:


1. #### Mediante escuchadores de eventos:

