import { RootLayout } from '@/components/RootLayout'
import { useStore } from '@/store/zustand'
import { getClient } from '@/lib/client'
import { query } from '@/graphql/strapiquery'
import { StoreInitializer } from '@/components/StoreInitializer'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Vinazza',
    default: 'Vinazza - El Arte de Bailar',
  },
}

export default async function Layout({ children }) {
  const client = getClient()
  const {
    data: { homepage },
  } = await client.query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  })
  useStore.setState({ homepage })
  return (
    <html lang="en" className="h-full bg-primary text-base antialiased">
      <body className="flex min-h-full flex-col">
        <StoreInitializer homepage={homepage} />
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
