# To-Do List Application

Bem-vindo ao repositório da **Aplicação de Gestão de Tarefas (To-Do List)**! Este projeto foi desenvolvido para demonstrar habilidades em desenvolvimento de software e DevOps, com foco na integração entre **Terraform**, **Docker**, **React**, **Node.js** e **PostgreSQL**.

## Tecnologias Utilizadas

- **Frontend**: React com Material-UI
- **Backend**: Node.js com Express
- **Banco de Dados**: PostgreSQL
- **Infraestrutura**: Terraform + Docker Compose

## Requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- **Git**: Para clonar o repositório.
- **Terraform**: Para provisionar a infraestrutura local.
- **Docker**: Para gerenciar os contêineres.
- **Node.js** (Opcional): Caso queira rodar o frontend ou backend localmente sem Docker.

## Passo a Passo para Configuração

### 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/todo-list-project.git
cd todo-list-project
2. Configurar Variáveis de Ambiente
Crie os arquivos .env para o backend e frontend, com base nos exemplos fornecidos.

2.1 Backend
No diretório backend, crie o arquivo .env com o seguinte conteúdo:

env
Copiar código
PORT=3001
DB_HOST=database
DB_NAME=todo
DB_USER=postgres
DB_PASSWORD=sua_senha_segura
JWT_SECRET=sua_chave_jwt_segura
2.2 Frontend
No diretório frontend, crie o arquivo .env com o seguinte conteúdo:

env
Copiar código
REACT_APP_API_URL=http://localhost:3001/api
2.3 Terraform
No diretório terraform, crie o arquivo terraform.tfvars com o seguinte conteúdo:

hcl
Copiar código
db_user = "postgres"
db_password = "sua_senha_segura"
⚠️ Atenção: Não commite esses arquivos. O .gitignore já está configurado para evitar isso.

3. Provisionar a Infraestrutura
Entre no diretório terraform e execute os seguintes comandos:

bash
Copiar código
terraform init
terraform apply
Confirme a aplicação do plano digitando yes quando solicitado. Este passo criará a infraestrutura local e iniciará automaticamente os serviços com o Docker Compose.

4. Verificar os Serviços
Após o provisionamento, você pode acessar:

Frontend: http://localhost:3000
Backend API: http://localhost:3001/api
Comandos Úteis
Subir os Contêineres Manualmente (caso o Docker Compose não seja iniciado automaticamente):
bash
Copiar código
docker-compose up --build -d
Parar os Contêineres:
bash
Copiar código
docker-compose down
Remover Recursos do Terraform:
bash
Copiar código
terraform destroy
Estrutura do Projeto
scss
Copiar código
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

bash
Copiar código
cd backend
npm install
npm start
Acesse a API em http://localhost:3001/api.

Frontend
Entre no diretório frontend:

bash
Copiar código
cd frontend
npm install
npm start
Acesse o frontend em http://localhost:3000.

Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.
