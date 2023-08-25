import { ApolloWrapper } from '@/lib/apollo-provider'
import { getClient } from '@/lib/client'
import { query } from '@/graphql/strapiquery'
import { Wrapper } from '@/components/RootLayoutInner'

export async function RootLayout({ children }) {
  return (
    // <ApolloWrapper>
    <Wrapper>{children}</Wrapper>
    // </ApolloWrapper>
  )
}
