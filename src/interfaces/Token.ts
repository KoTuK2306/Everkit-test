export interface Token {
  name: string
  id: number
  logoURI: string
  symbol: string
  description: string
  price: number
  priceChange: {
    hours24: number
    days7: number
    days365: number
  }
  volume: number
  volumeChangePercentage: number
  tvl: number
  tvlChangePercentage: number
  users: number
  address: string
  categories: [string, string]
}
