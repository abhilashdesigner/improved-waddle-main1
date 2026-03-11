'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Image from "next/image";

export default function Page() {
  const router = useRouter()

  useEffect(() => {
    router.push('/')
  }, [])

  return <div className=" min-h-screen items-center justify-center font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
        <Image
          className="w-screen h-auto hidden md:block"
          src="/drinkhitonic.jpg"
          alt="Coming Soon"
          width={2100}
          height={1364}
          priority
        />
		<Image
          className="w-screen h-auto block lg:hidden"
          src="/drinkhitonic-m.jpg"
          alt="Coming Soon"
          width={768}
          height={1700}
          priority
        />
        
      </main>
    </div>
}

