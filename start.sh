#!/bin/bash

# Derruba todos os containers existentes
echo "Derrubando todos os containers..."
docker-compose down

# Constrói a imagem do back-end sem usar cache e a tag como "my-backend"
echo "Construindo a imagem do back-end..."
docker-compose build --no-cache sbootapp

# Constrói a imagem do front-end sem usar cache e a tag como "my-frontend"
echo "Construindo a imagem do front-end..."
docker-compose build --no-cache app

# Sobe todos os containers, forçando a recriação e removendo orfãos
echo "Subindo todos os containers..."
docker-compose up --build --force-recreate --remove-orphans

echo "Todos os containers estão rodando!"