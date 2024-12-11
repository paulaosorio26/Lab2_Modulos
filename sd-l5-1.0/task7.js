// task7.js
export function rubricPerfect(score) {
    score = Number(score);  // Convertir el puntaje a número, por si llega como cadena
  
    if (score === 11) {
      return "Perfect";  // Si el puntaje es exactamente 11, devolver "Perfect"
    } else if (score >= 9) {
      return "Excellent";  // Si el puntaje es entre 9 y 10, devolver "Excellent"
    } else if (score >= 5) {
      return "Pass";  // Si el puntaje es entre 5 y 8, devolver "Pass"
    } else {
      return "Fail";  // Si el puntaje es menor que 5, devolver "Fail"
    }
  }
   