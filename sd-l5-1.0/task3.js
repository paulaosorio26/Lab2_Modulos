export function ageCalculator(year, month, day) {
    const today = new Date();
    let age = today.getFullYear() - year;
    const isBeforeBirthday = 
        today.getMonth() + 1 < month || 
        (today.getMonth() + 1 === month && today.getDate() < day);
    if (isBeforeBirthday) {
        age--;
    }
    console.log("Successful"); // Log exitoso
    return age;
}

