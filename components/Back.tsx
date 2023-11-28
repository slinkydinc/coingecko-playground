'use client'

import { CaretLeft } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'

export default function Back() {
  const router = useRouter()

  return (
    <button className="flex gap-2 items-center text-sm" onClick={() => router.back()}>
      <CaretLeft />
      Back
    </button>
  )
}