#!/bin/bash

create_network_if_not_exists() {
   network_name=$1
   if ! docker network inspect "$network_name" >/dev/null 2>&1; then
      docker network create "$network_name"
      echo "Network $network_name created."
   else
      echo "Network $network_name already exists."
   fi
}

docker-compose down

docker network rm backend || true
docker network rm infrastructure || true

create_network_if_not_exists backend
create_network_if_not_exists infrastructure

docker-compose build
docker-compose up -d
