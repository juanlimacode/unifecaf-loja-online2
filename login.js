function validarLogin(usuario, senha) {
  if (usuario === "admin" && senha === "123456") {
    return true;
  }
  return false;
}

module.exports = { validarLogin };