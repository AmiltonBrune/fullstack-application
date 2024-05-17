#!/bin/bash

# Função para iniciar o projeto
start_project() {
  dir=$1
  echo "Iniciando projeto em $dir"
  cd $dir
  if [ -f "package.json" ]; then
    npm start &
  else
    echo "Nenhum package.json encontrado em $dir"
  fi
  cd ..
}

# Lista de diretórios
directories=("frontend" "gateway" "mailer" "permission" "token" "user")

# Iniciar projetos em cada diretório
for dir in "${directories[@]}"; do
  start_project $dir
done

echo "Todos os projetos foram iniciados!"
