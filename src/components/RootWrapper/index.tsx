import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import client from '@/utils/apollo'
import 'focus-visible'

interface RootWrapperProps {
  /** Site content */
  children: React.ReactNode
  /** Mocked response to Apollo. Providing mocks swaps ApolloProvider with MockedProvider */
  apolloMocks?: MockedResponse[]
}

const RootWrapper = ({ children, apolloMocks }: RootWrapperProps) => {
  const ApolloWrapper = apolloMocks ? MockedProvider : ApolloProvider

  return (
    <ApolloWrapper client={client} mocks={apolloMocks} addTypename={!apolloMocks}>
      <>{children}</>
    </ApolloWrapper>
  )
}

export default RootWrapper
