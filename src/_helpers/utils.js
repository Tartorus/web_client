export function formatMoney(money, percision=2, delimeter=' ') {
    return Number(money).toFixed(percision).replace(/\d(?=(\d{3})+\.)/g, delimeter)
}
