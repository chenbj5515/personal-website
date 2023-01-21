import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export async function getAllPosts() {
  const client = new ApolloClient({
    uri: 'http://localhost:8080/v1/graphql',
    cache: new InMemoryCache(),
  });
  const res = await client
    .query({
      query: gql`
        query FetchArticle {
          article {
            content
            title
            type
            sub_title
            id
          }
        }
      `,
    })
  
  return res.data.article;
}
