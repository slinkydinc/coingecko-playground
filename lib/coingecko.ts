import { CoinGeckoClient } from 'coingecko-api-v3'

export const coingecko = new CoinGeckoClient({
  timeout: 10000,
  autoRetry: true
})