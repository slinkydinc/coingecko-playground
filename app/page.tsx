import Link from 'next/link'

export default function Home() {
  return (
    <main className="container mx-auto p-8 space-y-2">
      <h1 className="text-3xl">Crypto</h1>
      <nav className="py-5">
        <ul className="grid gap-5 col-span-1 md:col-span-3">
          <li className="bg-slate-50 dark:bg-slate-900 border rounded-lg">
            <Link href="/coins" className="block p-5">
              Coins
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}
