import Back from '@/components/Back'
import Link from 'next/link'
import getCoins from '@/actions/get-coins'

export const revalidate = 3600

export default async function CoinsPage() {
  const coins = await getCoins()

  return (
    <main className="container mx-auto p-8 space-y-2">
      <Back />
      <h1 className="text-3xl">Coins</h1>
      <nav className="py-5">
        <ul className="grid gap-5 col-span-1 md:col-span-3">
          {coins.map((coin) => (
            <li key={coin.id} className="bg-slate-50 dark:bg-slate-900 border rounded-lg">
              <Link href={`/coins/${coin.id}`} className="block p-5">
                {coin.name} ({coin.symbol?.toUpperCase()})
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  )
}