## Peticiones y metodos HTTP (11-10-23)

### Metodos de peticion HTTP

HTTP define un conjunto de métodos de petición para indicar la acción que se desea realizar para un recurso determinado. Aunque estos también pueden ser sustantivos, estos métodos de solicitud a veces son llamados HTTP verbs. Cada uno de ellos implementan una semántica diferente, pero algunas características similares son compartidas por un grupo de ellos: ej. un request method puede ser safe, idempotent (en-US), o cacheable.

<div class="page"></div>

### Cuales son los diferentes metodos
1. **GET**
El método GET solicita una representación de un recurso específico. Las peticiones que usan el método GET sólo deben recuperar datos.

1. **HEAD (en-US)**
El método HEAD pide una respuesta idéntica a la de una petición GET, pero sin el cuerpo de la respuesta.

1. **POST**
El método POST se utiliza para enviar una entidad a un recurso en específico, causando a menudo un cambio en el estado o efectos secundarios en el servidor.

1. **PUT**
El modo PUT reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.

1. **DELETE**
El método DELETE borra un recurso en específico.

1. **CONNECT**
El método CONNECT establece un túnel hacia el servidor identificado por el recurso.

1. **OPTIONS (en-US)**
El método OPTIONS es utilizado para describir las opciones de comunicación para el recurso de destino.

1. **TRACE**
El método TRACE realiza una prueba de bucle de retorno de mensaje a lo largo de la ruta al recurso de destino.

1. **PATCH**
El método PATCH es utilizado para aplicar modificaciones parciales a un recurso.

<div class="page"></div>

### Headers HTTP

Las cabeceras (en inglés headers) HTTP permiten al cliente y al servidor enviar información adicional junto a una petición o respuesta. Una cabecera de petición esta compuesta por su nombre (no sensible a las mayusculas) seguido de dos puntos ':', y a continuación su valor (sin saltos de línea). Los espacios en blanco a la izquierda del valor son ignorados

continuar:

[HTTP headers](https://developer.mozilla.org/es/docs/Web/HTTP/Headers)

[Anatomia de una peticion](https://gavilanch.wordpress.com/2019/01/03/anatomia-de-una-peticion-http/)

[Autenticacion HTTP](https://developer.mozilla.org/es/docs/Web/HTTP/Authentication)

[JSON](https://www.hostgator.mx/blog/json-para-principiantes-la-guia/)