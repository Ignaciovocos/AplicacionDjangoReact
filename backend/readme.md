# Aplicacion Backend Django

Creamos un dockerfile que nos permita poder realizar la imagen de nuestro proyecto backend, al principio tenia multiples errores a la hora de "buildear" la imagen ya que saltaban errores vinculados a setup.py y pip.. por ende probé actualizando mis paquetes, apps, librerias, django, python, etc, pero el problema continuaba.. comencé a verificar mas en profundidad cuales eran los problemas que arrojaba la terminal y me di cuenta que surgian del "collecting" requirements principalmente con psycopg2 elimine el mismo permitiendome "collect" todos ellos de forma exitosa.

Luego en la estapa de instalacion de las dependencias el problema volvio a surgir con pillow 5.4.1 , pygraphviz==1.5 eliminé los mismos de mi .txt y me permitio buildear la imagen perfectamente.

* sudo docker build -t backend .

Para poder llevar adelante esto es necesario tener instalado python , pip3 , django , virtualenv.

- Al env creado lo ignoraamos con .dockerignore instalamos solo las que estan en proyectobackend/requirements.txt

* Podemos hacer correr el backend una vez buildeada la imagen con :sudo docker run backend
