# Box-model: El modelo de caja para HTML.
### El modelo de caja.
El modelo de caja es el comportamiento de CSS que hace que todos los elementos de HTML se representen mediante cajas rectangulares.

![Box model](https://th.bing.com/th/id/R.5e1459697c1d3d713fc7f0c439b10b9d?rik=HZ4g44YCJWJ8hg&pid=ImgRaw&r=0)

Como se aprecia en la imagen, el modelo de caja esta compuestra por cuatro elementos: **contenido**, **relleno**, **borde** y **margen**.

### Reconociendo los elementos

Todos los elementos en HTML tienen, aunque no siempre visible a simple vista, una caja al rededor. Por este motivo, comprender el comportamiento de las cajas es clave para poder crear estructuras y, posteriormente, modificar su apariencia. Veamos un ejemplo:

Suponiendo que tenemos el siguiente fragmento de codigo en HTML:
```HTML
<p>Esta etiqueta sirve para parrafos de texto</p>
```
En el navegador, este elemento cuenta, automaticamente, con los elementos que componen el modelo de caja; aunque no podremos verlos sencillamente. Para eso, recurrimos a la ayuda de las herramientas de desarrollador pulsando la tecla *F12*

![Elementos del modelo de caja](https://francescricart.com/wp-content/uploads/2018/08/interpretacion-modelo-cajas-navegador.jpg)

De esta imagen, podemos rescatar los elementos que conforman la caja. Observando detenidamenta podemos notar como cada elemento tiene numeros distintos entre si. Estos numeros hacen referencia al tamaño y/o medida del elemento de la caja.

### Reglas de estilos
Las reglas de estilos son utilizadas para modificar la apariencia de las "cajas". Consisten basicamente en una seleccion del elemento a modificar, la(s) propiedad(es) que se deseean modificar y su(s) valor(es). Y la sintaxis es la siguiente:

```CSS
#elemento {
    propiedad: --valor;
}
```

Continuando con el elemento `<p></p>` mostrado anteriormente, aqui un ejemplo de como modificar las propiedades de la caja:

1. **El contenido.**
Este se refiere a los elementos que iran dentro de la etiqueta HTML. Puede ser texto, para el caso de una etiqueta de parrafo `<p></p>`; una imagen, en el caso de la etiqueta `<img>`.

2. **El relleno.**
Se refiere al espacio en blanco contenido entre el borde y el contenido. Su sintaxis es: 
```CSS
p {
    padding: 5px 10px;
}
```

3. **El borde.**
Es, normalmente, una linea delgada que delimita el elemento. Su sintaxis puede ser: 
```CSS
p {
    border: 10px solid #ccc;
}
```

4. **El margen.**
El margen comunmente es utilizado como un espacio en blanco para separar elementos dentro del contenedor en el que se encuentran. Su sintaxis puede ser:
```CSS
p {
    margin: 1.4em auto;
}
```
---
# La propiedad display: Aprendiendo a utilizarla.