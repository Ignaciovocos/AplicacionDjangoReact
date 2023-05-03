# Challenge aplicación en Django y React 

| Proyecto en localhost |

Recordar tener instalado docker y dockercompose.

Hay dos formas distintas , una manual y otra bastante automatizada, la manual consiste en ingresar a la carpeta "backend" como así también a la carpeta "frontend" por separado en dos entornos de visual studio distintos, abrir la terminal, situarnos donde se encuentra nuestro archivo dockerfile y buildear la imagen a traves de sudo docker build -t backend . hacemos lo mismo en nuestra carpeta de frontend sudo docker build -t frontend . , de esta forma creamos las imagenes de ambos.

* verificamos que se hayan creado correctamente con el comando "sudo docker images".

A traves de nuestro archivo docker-compose.yml al haberle indicado donde puede encontrar dichas imagenes y bajo que nombre, ingresamos el comando "sudo docker-compose build" creandonos lo nesario para luego poder ingresar el comando "sudo docker-compose up" y correrlo perfectamente. 

* verificamos que se encuentre correctamente levantado a traves del comando "sudo docker ps".

A partir de allí podemos ingresar al local host 3000 para el front como asi tambien al local host 8000 para el back.

* si deseamos bajarlo lo que hacemos es abrir una nueva terminal dentro de la carpeta del docker-compose e ingresamos el comando "sudo docker-compose down".

* eliminamos las imagenes en caso de ser necesario a traves de "sudo docker rmi -f "imagen id".

* limpiamos la terminal con el comando "clear".


La otra forma más automatizada consiste en crear en la carpeta del "deploy" por ejemplo un archivo .sh que lo que hace es crear una secuencia de comandos de bash shell para que pueda hacer el paso "manual" indicado arriba de forma automatica y ahorrarnos tiempo. 

Ya que en ese archivo .sh le indicamos donde se encuentra el archivo dockerfile del back como asi tambien el del front, levanta la imagen y luego una vez que tiene creadas ambas imagenes que se ubique dentro del directorio del docker-compose y lo levante con "up". Para poder ejecutarlo tenemos que abrir la terminal y encontrarnos ubicados dentro de la carpeta donde se encuentra el .sh en mi caso ./deploy ingresando con "cd deploy" ya allí ejecutamos el comando "chmod +x init.sh" asi le damos permiso primero al ordenador. Luego " sudo ./init.sh" lo cual va a ejecutar definitivamente el .sh buildeandonos ambas imagenes ( front y back  ) y una vez finalizado va a correr ambos.

* Luego podemos ingresar al local host de la misma forma que indique arriba con los distintos puertos. 8000/ 3000.



| ¿Como deployarlo en Amazon container registry? |

Para poder deployarlo en un ECR primero debemos tener las imagenes creadas en nuestra terminal , tanto la de backend como la de frontend, verificamos que las mismas se encuentren buildeadas a traves del comando "sudo docker images".

Luego debemos tener una cuenta root en Amazon, nos dirigimos dentro de la consola al servicio IAM , creamos un usuario nuevo en mi caso "challengedevopsvocos" le adherimos los permisos necesarios en "attached policies" - AmazonEC2ContainerRegistryFullAccess  - AmazonElasticContainerRegistryPublicFullAccess , una vez creado el mismo nos dirigimos a la pestaña "Security credencials" le creamos un "Access Key" y guardamos el archivo .csv con los datos de "Access key ID" y el "Access key".

Luego desde nuestro usuario root nos dirigimos dentro de la consola al servico "ECR" Elastic Container Registry , creamos un repositorio publico nuevo, con un nombre de repositorio en mi caso "awsignaciovocos", abrimos el mismo y seleccionamos la pestaña "view push commands" el cual nos va a indicar los pasos y comandos necesarios para pushear nuestra imagen al repo.

Abrimos nuestra terminal y vinculamos nuestro docker con aws a traves del comando "sudo aws configure" , alli agregamos los datos que nos pide de nuestro usuario "challengedevopsvocos" y se vincula.

Luego seguimos los comandos indicados en "view push commands" , es importante ya tener creada la imagen de antes y en mi caso particular agregar el "sudo" donde sea necesario. Una vez finalizado esto veremos la imagen de lo que hayamos pusheado en el repo.

* importante tener instalada la ultima version de aws cli y docker.
