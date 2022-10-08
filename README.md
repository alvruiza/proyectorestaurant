Proyecto 4 propuesta de una web app para restaurante realizada con React y Firebase.

Traté de hacer el proyecto lo más real posible en cuanto a funcionalidad, diseño y contenido. A continuación detallo parte de las funcionalidades del sitio.

<h1>Inicio Desktop</h1>

<img src='https://i.postimg.cc/N0QHLVH8/homedesk.png' alt=''>

El sitio nos recibe en el home donde vemos el menu principal que nos permite acceder a las distintas secciones. En ellas podemos ver las secciones requeridas y opcionales del proyecto como el módulo de reservas, el m,ódulo de contacto, la carta y el blog (Sección Nosotros). El sitio carga por defecto mostrando tres entradas de blog realizadas en react, si vien cada tarjeta tiene contenido distinto todas redirecciónan al mismo articulo de blog.

<h6>Sección Blog</h6>
<img src='https://i.postimg.cc/d37Y6qz2/nosotros.png' alt=''>

tarjetas para el blog hechas como componente de React, que iteran sobre un array de objetos para obtener sus datos.

<h6>Entrada de Blog</h6>
<img src='https://i.postimg.cc/L5krNnxZ/blogarticle.png' alt=''>

Entrada de blog con un par de párrafos escritos para apreciar los estilos. Cuenta con un link para regresar al home.


<h1>Inicio Mobile</h1>
<img src='https://i.postimg.cc/pdQ3J9yb/homemobile.png' alt=''>

Vista del sitio al abrir en dispositivos móbiles. El sitio se diseñó haciendo su excperiencia en escritorio como principal objetivo, sin embargo, es completamente funcional en dispositivos móviles sin perder calidad de diseño. Pese a ello, la experiencia en escritorio cuenta con muchos más efectos visuales y de diseño que se pierden en dispositivos móviles.

<h6>Menu Mobile</h6>
<img src='https://i.postimg.cc/T1Bk6GhJ/homemobile2.png' alt=''>

Al pinchar el ícono de hamburguesa se desplega el menú pasando de ser transparente a un fondo negro para mejor legibilidad.

<h1>Footer</h1>

<img src='https://i.postimg.cc/G2DF0Yw9/footer.png' alt=''>

El footer del sitio cuenta con una modificación del logo corporativo en simple tipografía que al pinchar nos redirige al home. abajo se encuentran los iconos de redes sociales, aunque sin links funcionales. Además se agregan los datos de contacto del restaurant y un copyrigth. En en los menús podemos ver tres linstas de links que habitualmente nos encontraríamos en un sitio de restaurant o ecommerce. los links del primer menu, referentes a las secciones del sitio son funcionales. En los otros menus 
solo funciona el link Portal Colaboradores que nos lleva hasta el login de intranet. Por último están los íconos con medios de pago aceptados en el restaurant añadidos como 
informacion para los clientes.

<h6>Footer Mobile</h6>
<img src='https://i.postimg.cc/BncZznVs/footermobile.png' alt=''>

Footer desplegado en dispositivos móviles.

<h1>Carta</h1>

<img src='https://i.postimg.cc/KvcyYDqX/carta.png' alt=''>

Carta del restaurant hecha con un componente de React para la tarjeta que va iterando sobre un array de objetos con los datos de cada plato. Los platos son platos reales y su descripción corresponde a lo que efectivamente son.

<h6>Carta Mobile</h6>
<img src='https://i.postimg.cc/15Fj0WWV/cartamobile.png' alt=''>

<h1>Reservas</h1>

<img src='https://i.postimg.cc/nzVy0vsb/reservadesk.png' alt=''>

Módulo de reservas hecho con las librerías formik, yup, Toaster y Firebase. El módulo es completamente funcional y cuenta con validación de datos desde el front. Es decir para realizar una reserva se debe ingresar un nombre de más de 3 letras, un número de teléfono con formato chileno que debe partir con +569 y tener los 8 digitos de un celular. Además todos los datos son obligatorios para poder hacer la reserva. Cuando la reserva es aceptada se despliga un mensaje de confirmación con Toaster y se almacena en la base de datos de Firebase. Si se rechaza por algún de servidor, se despliega un mensaje de error de Toaster. Cada input entrega instrucciones si se encuentran incompletos o si los formatos ingresados no son correctos.

<h6>Reservas Mobile</h6>
<img src='https://i.postimg.cc/BvPpsbdL/reservasmobile.png' alt=''>

<h1>Contacto</h1>

<img src='https://i.postimg.cc/PxmBX2Bw/contactodesktop.png' alt=''>

El módulo de contacto consta de un formulario no funcional con los campos nombre y mensaje, además de los datos de contacto del restaurant. Además de ello cuenta con un mapa que indica la dirección del restaurante en googlemaps. Esto último fue hecho con la API oficial de Google Maps y el estilo del mapa fue modificado para hacer match con el estilo del sitio. Además se eliminaron a través de código los controles, logos y copyrigth del mapa que lo empobrecían visualmente. El módulo no se hizo funcional por una cuestión de tiempo sin embargo el proceso para hacerlo es idéntico al módulo de reservas.

* El mapa necesita una llave de seguridad que se ha dejado fuera en los envíos a github por temas de seguridad ya que está asociada a un servicio de pago de google, pero si se requiere para revisar su funcionamiento puedo enviarla por correo.

<h6>Contacto Mobile</h6>
<img src='https://i.postimg.cc/YSN3jZCM/contacto-mobile.png' alt=''>

<h1>Login</h1>

<img src='https://i.postimg.cc/FFSjKwWq/logindesktop.png' alt=''>

El login se trata de un sitio de acceso a una intranet. El login está hecho con Firebase Authentication para manejar los permisos y verificar que el usuario cuenta con acceso. No se permite a los usuarios crear cuentas por lo que sólo existe un usuario válido para ingresar, el que fue creado directamente en firebase. El formulario, hecho con Formik y Yup también realiza validaciones desde el front igual que el módulo de reservas. Si el usuario intenta ingresar con datos que aparentemente son válidos para formik y Yup aparece un toaster indicando que cuenta con acceso denegado y debe solicitar credenciales al administrador. Si el usuario cuenta con credenciales le permite acceder a un panel donde los trabjadores pueden administrar las reservas.

las credenciales de acceso al login son: 

email: alv.ruiz@hotmail.com 
pass: 34Rui..21

<h6>Login Mobile</h6>

<img src='https://i.postimg.cc/d1PVNN2k/loginmobile.png' alt=''>

<h1>Modulo Interno de Reservas</h1>

<img src='https://i.postimg.cc/8c3pWyzz/intranet.png' alt=''>

El módulo interno de reservas es básicamente un CRUD hecho con Firebase que permite Edita o borrar las reservas hechas por los usuarios del sitio y que están almacenadas en la base de datos de Firebase. De forma adicional, cada reserva cuenta con un tercer botón que nos permite confirmar la reserva a través de un correo electrónico al cliente. Por último el módulo tiene dos botones, uno que permite agregar manualmente una reserva, en caso de que un cliente quiera reservar por teléfono, y despliega el módulo de reservas. El otro botón cierra la sesión y nos devuelve al login ya sin credenciales de acceso.

<h6>Módulo interno de reservas Mobile</h6>

<img src='https://i.postimg.cc/yYcxcH0q/intranetmobile.png' alt=''>
