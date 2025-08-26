export function formatNaira(amount: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount).replace('NGN', '₦')
}

export function formatNairaBasic(amount: number): string {
  return `₦${amount.toLocaleString('en-NG')}`
}

// Common service prices in Lagos
export const servicePrices = {
  oilChange: {
    standard: 8000,
    synthetic: 15000,
    premium: 25000
  },
  battery: {
    basic: 25000,
    premium: 45000,
    deluxe: 65000
  },
  brakes: {
    pads: 18000,
    discs: 35000,
    fullService: 50000
  },
  ac: {
    gasRefill: 15000,
    service: 25000,
    compressor: 85000
  },
  diagnostics: {
    basic: 5000,
    comprehensive: 10000,
    electrical: 8000
  },
  emergency: {
    callout: 8000,
    jumpStart: 5000,
    towing: 15000
  }
}

export function getPriceRange(min: number, max: number): string {
  return `${formatNairaBasic(min)} - ${formatNairaBasic(max)}`
}
