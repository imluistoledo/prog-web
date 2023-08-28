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
### En que consiste
La propiedad `display` de CSS, especifica como es tratado un elemento HTML, y el diseño usado por los elementos que contendra.


Formalmente, la propiedad display establece los tipos de visualizacion interna y externa de un elemento. Por un lado, la tipo externa establece la participacion de un elemento en el diseño de flujo; mientras que la tipo interna establece el diseño de los elementos hijos.

![Display en CSS](https://i.ytimg.com/vi/dPfn_PdZoUU/maxresdefault.jpg)

### Los valores mas usados
Algunos de los valores mas usados de esta propiedad son: 
```CSS
p {
    display: flex;
    display: grid;
    display: none;
    /* Y entre otros */
}
```
A continuacion, algunos ejemplos de estos.
#### `Display: flex;`
![Display flex](https://i.pinimg.com/736x/51/af/bb/51afbb220540ba0e891194cff256fd23.jpg)
#### `Display: grid;`
![Display grid](https://www.freecodecamp.org/news/content/images/2022/05/CSS-GRID-3.png)
#### `Display: none;`
###### (La broma es que no se mira)


### Los posibles valores
A continuacion la lista de posibles valores clasificados:
```CSS
/* Valores <display-outside> */

display: block;
display: inline;
display: run-in;

/* Valores <display-inside> */
display: flow;
display: flow-root;
display: table;
display: flex;
display: grid;
display: ruby;
display: subgrid;

/* Valores <display-outside> más valores <display-inside> */
display: block flow;
display: inline table;
display: flex run-in;

/* Valores <display-listitem> */
display: list-item;
display: list-item block;
display: list-item inline;
display: list-item flow;
display: list-item flow-root;
display: list-item block flow;
display: list-item block flow-root;
display: flow list-item block;

/* Valores <display-internal> */
display: table-row-group;
display: table-header-group;
display: table-footer-group;
display: table-row;
display: table-cell;
display: table-column-group;
display: table-column;
display: table-caption;
display: ruby-base;
display: ruby-text;
display: ruby-base-container;
display: ruby-text-container;

/* Valores <display-box> */
display: contents;
display: none;

/* Valores <display-legacy> */
display: inline-block;
display: inline-table;
display: inline-flex;
display: inline-grid;

/* Valores globales */
display: heredar;
display: initial;
display: unset;

```