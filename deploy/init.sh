# navigate to reactjs folder
cd ../frontend

# build Dockerfile reactjs
docker build -t frontend:latest .

# navigate to backend django folder
cd ../backend/proyectobackend

# build Dockerfile python-django
docker build -t backend:latest .

# navigate back to the root folder and run containers
cd ../../deploy
docker-compose up