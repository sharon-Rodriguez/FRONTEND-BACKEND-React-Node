// Archivo: utils.test.js
const validarTituloArticulo = require('./utils'); // Importa la función creada

// 'describe' agrupa un conjunto de pruebas para una misma función/módulo
describe('Pruebas de la función validarTituloArticulo', () => {

  // Primer caso de prueba: Prueba de éxito (PASS)
  test('debería devolver true para un título válido', () => {
    const tituloValido = 'Libro de Historia Antigüa en buen estado';
    // 'expect' evalúa la función y 'toBe(true)' verifica el resultado esperado
    expect(validarTituloArticulo(tituloValido)).toBe(true);
  });

  // Segundo caso de prueba: Prueba de fallo (FAIL) por título vacío
  test('debería devolver false si el título está vacío', () => {
    const tituloVacio = '';
    expect(validarTituloArticulo(tituloVacio)).toBe(false);
  });

  // Tercer caso de prueba: Prueba de fallo (FAIL) por título demasiado largo
  test('debería devolver false si el título supera los 100 caracteres', () => {
    // String de 101 caracteres 'A'
    const tituloLargo = 'A'.repeat(101); 
    expect(validarTituloArticulo(tituloLargo)).toBe(false);
  });
});