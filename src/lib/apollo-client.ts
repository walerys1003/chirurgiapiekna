import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

let client: ReturnType<typeof createApolloClient> | null = null;

function createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({ uri: process.env.WORDPRESS_GRAPHQL_URL || '' }),
    cache: new InMemoryCache(),
    defaultOptions: {
      query: { fetchPolicy: 'no-cache' },
    },
  });
}

export function getApolloClient() {
  if (!process.env.WORDPRESS_GRAPHQL_URL) return null;
  if (!client) {
    client = createApolloClient();
  }
  return client;
}