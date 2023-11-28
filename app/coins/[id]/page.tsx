import Image from 'next/image'
import Back from '@/components/Back'
import getCoin from '@/actions/get-coin'

export const revalidate = 60

export default async function CoinPage({ params }: { params: { id: string } }) {
  const coin = await getCoin({ id: params.id })

  return (
    <main className="container mx-auto p-8 space-y-2">
      <Back />
      <h1 className="flex gap-2 items-center text-3xl">
        {coin.name && coin.image?.thumb && (
          <Image src={coin.image.thumb} width={16} height={16} alt={coin.name} className="inline-block rounded-full" />
        )}
        {coin.name}
      </h1>
      <pre className="">
        {JSON.stringify(coin, null, 2)}
      </pre>
    </main>
  )
}