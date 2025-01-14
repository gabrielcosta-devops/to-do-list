To-Do List Application

Bem-vindo ao repositório da aplicação de Gestão de Tarefas (To-Do List)! Este projeto foi desenvolvido para demonstrar habilidades em desenvolvimento de software e DevOps, com foco na integração entre Terraform, Docker, React, Node.js, e PostgreSQL.

Tecnologias Utilizadas

Frontend: React com Material-UI

Backend: Node.js com Express

Banco de Dados: PostgreSQL

Infraestrutura: Terraform + Docker Compose

Requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

Git: Para clonar o repositório.

Terraform: Para provisionar a infraestrutura local.

Docker: Para gerenciar os contêineres.

Node.js: Opcional, caso queira rodar o frontend ou backend localmente sem Docker.

Passo a Passo para Configuração

1. Clonar o Repositório

git clone https://github.com/seu-usuario/todo-list-project.git
cd todo-list-project

2. Configurar Variáveis de Ambiente

Crie os arquivos .env para o backend e frontend com base nos exemplos fornecidos:

2.1 Backend

No diretório backend, crie um arquivo .env:

PORT=3001
DB_HOST=database
DB_NAME=todo
DB_USER=postgres
DB_PASSWORD=sua_senha_segura
JWT_SECRET=sua_chave_jwt_segura

2.2 Frontend

No diretório frontend, crie um arquivo .env:

REACT_APP_API_URL=http://localhost:3001/api

2.3 Terraform

No diretório terraform, crie um arquivo terraform.tfvars:

db_user = "postgres"
db_password = "sua_senha_segura"

Atenção: Esses arquivos não devem ser commitados para o repositório. O .gitignore já está configurado para evitar isso.

3. Provisionar a Infraestrutura

Entre no diretório terraform e execute os comandos abaixo:

terraform init
terraform apply

Confirme a aplicação do plano digitando yes quando solicitado. Este passo criará a infraestrutura local e iniciará automaticamente os serviços com o Docker Compose.

4. Verificar os Serviços

Após o provisionamento:

Acesse o frontend no navegador:

http://localhost:3000

A API do backend estará disponível em:

http://localhost:3001/api

Comandos Úteis

Subir os Contêineres Manualmente

Caso o Docker Compose não seja iniciado automaticamente, você pode fazer manualmente:

docker-compose up --build -d

Parar os Contêineres

docker-compose down

Remover Recursos Terraform

Para destruir a infraestrutura provisionada:

terraform destroy

Estrutura do Projeto

.
├── backend
│   ├── Dockerfile
│   ├── package.json
│   ├── .env (não commitado)
│   └── src
├── frontend
│   ├── Dockerfile
│   ├── package.json
│   ├── .env (não commitado)
│   └── src
├── terraform
│   ├── main.tf
│   ├── variables.tf
│   ├── outputs.tf
│   └── terraform.tfvars (não commitado)
├── docker-compose.yml
├── README.md
└── .gitignore

Testes

Testar Localmente (Sem Docker)

Backend

Entre no diretório backend:

cd backend
npm install
npm start

Acesse o backend em http://localhost:3001/api.

Frontend

Entre no diretório frontend:

cd frontend
npm install
npm start

Acesse o frontend em http://localhost:3000.

Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

Licença

Este projeto está licenciado sob a MIT License.