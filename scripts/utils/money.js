export function formatCurrency(priceCents){
    // covert cents to dollars and format to 2 decimal places
    return (Math.round(priceCents)/100).toFixed(2);
}