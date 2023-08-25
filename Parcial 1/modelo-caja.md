# Box-model: El modelo de caja para HTML.

El modelo de caja es el comportamiento de CSS que hace que todos los elementos de HTML se representen mediante cajas rectangulares.

![Box model](https://th.bing.com/th/id/R.5e1459697c1d3d713fc7f0c439b10b9d?rik=HZ4g44YCJWJ8hg&pid=ImgRaw&r=0)

Como se aprecia en la imagen, el modelo de caja esta compuestra por cuatro elementos: **contenido**, **relleno**, **borde** y **margen**.

Todos los elementos en HTML tienen, aunque no siempre visible a simple vista, una caja al rededor. Por este motivo, comprender el comportamiento de las cajas es clave para poder crear estructuras y, posteriormente, modificar su apariencia. Veamos un ejemplo:

Suponiendo que tenemos el siguiente fragmento de codigo en HTML:
```HTML
<p>Esta etiqueta sirve para parrafos de texto</p>
```
En el navegador, este elemento cuenta, automaticamente, con los elementos que componen el modelo de caja; aunque no podremos verlos sencillamente.

![Elementos del modelo de caja](https://francescricart.com/wp-content/uploads/2018/08/interpretacion-modelo-cajas-navegador.jpg)


# La propiedad display: Aprendiendo a utilizarla.