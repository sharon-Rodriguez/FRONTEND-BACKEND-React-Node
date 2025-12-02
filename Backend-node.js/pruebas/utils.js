/**
 * Valida si un título de artículo es válido según las reglas de negocio.
 * @param {string} titulo
 * @returns {boolean}
 */
function validarTituloArticulo(titulo) {
  if (!titulo || titulo.trim().length === 0) {
    return false; // El título no puede estar vacío
  }
  if (titulo.length > 100) {
    return false; // El título no puede exceder 100 caracteres
  }
  return true; // El título es válido
}

module.exports = validarTituloArticulo;