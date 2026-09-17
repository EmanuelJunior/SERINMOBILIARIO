export function formatCurrency(amount: number, currency: "COP" | "USD" = "COP"): string {
  if (currency === "USD") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);
  }

  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatArea(m2: number): string {
  return `${m2.toLocaleString("es-CO")} m²`;
}

export function formatDateSpanish(dateString: string): string {
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("es-CO", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  } catch {
    return dateString;
  }
}
