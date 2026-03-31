import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

let client: ApolloClient | null = null;

export function getApolloClient() {
  const url = process.env.WORDPRESS_GRAPHQL_URL;
  if (!url) return null;

  if (!client) {
    client = new ApolloClient({
      link: new HttpLink({ uri: url }),
      cache: new InMemoryCache(),
      defaultOptions: {
        query: { fetchPolicy: 'no-cache' },
      },
    });
  }
  return client;
}