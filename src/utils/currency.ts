export function parseCurrency(value: number): string {
  return value.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });
}

export function getDiscount(normalPrice: number, currentPrice: number): number {
  const discount: number = 100 - (currentPrice * 100) / normalPrice;

  return Math.trunc(discount);
}
