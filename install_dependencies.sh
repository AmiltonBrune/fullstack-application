#!/bin/bash

install_dependencies() {
   dir=$1
   echo "Instalando dependências em $dir"
   cd $dir
   if [ -f "package.json" ]; then
      npm install
   else
      echo "Nenhum package.json encontrado em $dir"
   fi
   cd ..
}

directories=("frontend" "gateway" "mailer" "permission" "token" "user")

for dir in "${directories[@]}"; do
   install_dependencies $dir
done

echo "Instalação de dependências concluída!"
