export function formatCurrency(quantity: number){
    return new Intl.NumberFormat('es-ES', {
        style: 'currency', 
        currency: 'EUR' 
    }).format(quantity); // Aquí se aplica el formato al número
}
