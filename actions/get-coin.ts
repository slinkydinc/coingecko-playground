'use server'

import { coingecko } from '@/lib/coingecko'

export default async function getCoin({ id }: { id: string }) {
  return coingecko.coinId({
    id,
    localization: true,
    tickers: true,
    market_data: true,
    community_data: true,
    developer_data: true,
    sparkline: true
  })
}