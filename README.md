# OTT Application Development

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white) ![React.js](https://img.shields.io/badge/React.js-61DAFB?logo=react&logoColor=white)

Este repositório contém o código-fonte e a documentação para o desenvolvimento de um aplicativo OTT que permite aos usuários criar e personalizar sua própria galeria de vídeos.

### Documentação

- [Design das páginas](docs/desing.md)
- [User Stories](docs/user_stories.md)

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes softwares instalados em sua máquina:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Passo a passo para iniciar o projeto

1. **Torne o script de inicialização executável**:

   Certifique-se de que você tem permissão para executar o script `up_docker_compose.sh`. Caso contrário, torne-o executável:

   ```bash
   chmod +x up_docker_compose.sh
   ```
## Inicie os containers Docker

```bash
 sudo ./up_docker_compose.sh
```


### Serviços

- **Frontend**: O frontend estará disponível em [http://localhost:3000](http://localhost:3000)
- **Gateway**: O gateway estará disponível na porta definida pela variável [http://localhost:8000/api](http://localhost:8000/api)

### Usando o Mailinator

Caso queira usar o Mailinator para realizar o cadastro, pois tem um link de ativação por email, o serviço estará disponível em [https://www.mailinator.com/v4/public/inboxes.jsp?to=test123456789](https://www.mailinator.com/v4/public/inboxes.jsp?to=test123456789).

Use as seguintes credenciais para testes, caso não queira usar o seu email,
**lembrando que precisa realizar o cadastro em o mesmo email e senha informado abaixo**:

```json
{
  "email": "test1234567890@mailinator.com",
  "password": "1234567890"
}
```