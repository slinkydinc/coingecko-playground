'use server'

import { coingecko } from '@/lib/coingecko'

export default async function getCoins() {
  return coingecko.coinList({ include_platform: false })
}