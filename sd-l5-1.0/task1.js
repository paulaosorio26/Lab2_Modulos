// task1.js
export function costCalculator(amount) {
    // Convertir la entrada a un número, en caso de que se pase como string
    const amountNumber = parseFloat(amount);
  
    const fee = 3; // Tarifa fija de 3 dólares
    const interestRate = 0.01; // Interés del 1%
  
    // Calcula el total
    const totalAmount = amountNumber + fee + (amountNumber * interestRate);
  
    // Retorna el total con dos decimales
    return totalAmount.toFixed(2); // Asegura que tenga 2 decimales
  }
  
  