terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "2.25.0"
    }
  }
}

provider "docker" {
  host = "unix:///var/run/docker.sock"
}

# Variáveis sensíveis
variable "db_user" {
  description = "Usuário do banco de dados"
  type        = string
}

variable "db_password" {
  description = "Senha do banco de dados"
  type        = string
}

variable "db_name" {
  description = "Nome do banco de dados"
  type        = string
}

# Rede Docker
resource "docker_network" "todo_network" {
  name = "todo_network"
}

# Volume para o PostgreSQL
resource "docker_volume" "postgres_data" {
  name = "postgres_data"
}

# Banco de Dados PostgreSQL
resource "docker_container" "database" {
  image = "postgres:15-alpine"
  name  = "todo_database"

  env = [
    "POSTGRES_USER=${var.db_user}",
    "POSTGRES_PASSWORD=${var.db_password}",
    "POSTGRES_DB=${var.db_name}"
  ]

  mounts {
    target = "/var/lib/postgresql/data"
    source = docker_volume.postgres_data.name
    type   = "volume"
  }

  networks_advanced {
    name = docker_network.todo_network.name
  }
}

# Backend
resource "docker_image" "backend_image" {
  name = "todo_backend"
  build {
    context    = "${path.module}/../backend"
    dockerfile = "Dockerfile"
  }
}

resource "docker_container" "backend" {
  image = docker_image.backend_image.name
  name  = "todo_backend"

  env = [
    "PORT=3001",
    "DB_HOST=todo_database",
    "DB_NAME=${var.db_name}",
    "DB_USER=${var.db_user}",
    "DB_PASSWORD=${var.db_password}"
  ]

  ports {
    internal = 3001
    external = 3001
  }

  depends_on = [docker_container.database]

  networks_advanced {
    name = docker_network.todo_network.name
  }
}

# Frontend
resource "docker_image" "frontend_image" {
  name = "todo_frontend"
  build {
    context    = "${path.module}/../frontend"
    dockerfile = "Dockerfile"
  }
}

resource "docker_container" "frontend" {
  image = docker_image.frontend_image.name
  name  = "todo_frontend"

  env = [
    "REACT_APP_API_URL=http://todo_backend:3001/api"
  ]

  ports {
    internal = 3000
    external = 3000
  }

  depends_on = [docker_container.backend]

  networks_advanced {
    name = docker_network.todo_network.name
  }
}

# Executar docker-compose após o terraform apply
resource "null_resource" "start_docker_compose" {
  provisioner "local-exec" {
    command     = "docker-compose -f ./docker-compose.yml up --build -d"
    working_dir = "${path.module}/.."
  }

  depends_on = [
    docker_container.frontend,
    docker_container.backend,
    docker_container.database
  ]
}