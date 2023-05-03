# Declaramos la imagen
FROM python:3.7.4 as build

# Creamos el directorio de trabajo "workdir"
WORKDIR /django

# Con este comando podemos instalar las librerias con
# pip3
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

# Copiamos la carpeta del proyecto
COPY . .

# Run server ponemos que pueda correr desde 0.0.0.0 cosa que pueda abrirse de 
# cualquier host.
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"] 