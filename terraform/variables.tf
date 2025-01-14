variable "db_password" {
  description = "Senha do banco de dados"
  sensitive   = true
}

variable "db_user" {
  description = "Usuário do banco de dados"
  sensitive   = true
}

variable "db_name" {
  description = "Nome do banco de dados"
  default     = "todo"
}