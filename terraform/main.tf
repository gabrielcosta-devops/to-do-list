# terraform/main.tf

terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 2.0"  # ou qualquer versão desejada
    }
  }
}

provider "docker" {}

resource "docker_network" "to_do_list_network" {
  name = "to-do-list_network"
}

resource "docker_volume" "postgres_data" {
  name = "postgres_data"
}

resource "docker_container" "postgres" {
  name  = "postgres"
  image = "postgres:15"
  env = [
    "POSTGRES_USER=${var.db_user}",
    "POSTGRES_PASSWORD=${var.db_pass}",
    "POSTGRES_DB=${var.db_name}",
  ]
  ports {
    internal = 5432
    external = 5432
  }
  volumes {
    host_path      = "/var/lib/postgresql/data"  # Caminho absoluto no sistema de arquivos do host
    container_path = "/var/lib/postgresql/data"
  }
  networks_advanced {
    name = docker_network.to_do_list_network.name
  }
}

resource "docker_container" "backend" {
  name  = "to-do-list-backend"
  image = "to-do-list_backend"
  ports {
    internal = 3000
    external = 3002
  }
  networks_advanced {
    name = docker_network.to_do_list_network.name
  }
}

resource "docker_container" "frontend" {
  name  = "to-do-list-frontend"
  image = "to-do-list_frontend"
  ports {
    internal = 3000
    external = 3000
  }
  networks_advanced {
    name = docker_network.to_do_list_network.name
  }
}