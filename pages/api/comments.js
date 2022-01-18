// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {GraphQlClient,gql} from 'graphql-request'

 const graphqlAPI= process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
 const graphqlTokken=process.env.GRAPHCMS_TOKEN


export default async function comments(req, res) {
  const GraphQlClient =new GraphQlClient(graphqlAPI,{
    headers:{
      authorization:`Bearer ${graphqlTokken}`
    }
  })
  const query = gql`
  mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
    createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) { id }
  }
`;
  const result = await graphQLClient.request(query, {
    name: req.body.name,
    email: req.body.email,
    comment: req.body.comment,
    slug: req.body.slug,
  });
  return res.status(200).send(result)
}
