variable "prefix" {
    description = "What to use as prefix for all resource names in this deployment."
    default = "itpd"
    type = string
}

variable "location" {
    description = "Which geographical region to use for this deployment."
    default = "eastus" #canadaeast
    type = string
}

# Cannot use this one yet as not every occurrence has been parameterized.
# (login name occurs in files we write and we'd need to do replacements there.)
# variable "login" {
#     description = "Login name for VM administrator account."
#     default = "adminuser"
#     type = string
# }

variable "public_key_file_name" {
    description = "Public key to use when provisioning the vm."
    default = "./ssh-keys/tadpole-web-server-vm-key.pub"
}

variable "user_data" {
    description = "cloud-config file for post-deployment provisioning."
    default = "./cloud-init/cloud-config.yaml"
}
