module.exports = function(number, endex, total_sec) {
  return [
    ['ahora mismo', 'ahora mismo'],
    ['hace %s segundos', 'en %s segundos'],
    ['hace 1 menuto', 'en 1 minuto'],
    ['hace %s menutos', 'en %s minutos'],
    ['hace 1 hora', 'en 1 hora'],
    ['hace %s horas', 'en %s horas'],
    ['hace 1 día', 'en 1 día'],
    ['hace %s días', 'en %s día'],
    ['hace 1 semana', 'en 1 semana'],
    ['hace %s semanas', 'en %s semanas'],
    ['hace 1 mes', 'en 1 mes'],
    ['hace %s meses', 'en %s meses'],
    ['hace 1 año', 'en 1 año'],
    ['hace %s años', 'en %s años']
  ][endex];
};