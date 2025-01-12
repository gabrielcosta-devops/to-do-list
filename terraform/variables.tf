# terraform/variables.tf

variable "db_user" {
  type    = string
  default = "admin"
}

variable "db_pass" {
  type    = string
  default = "admin123"
}

variable "db_name" {
  type    = string
  default = "todolist"
}