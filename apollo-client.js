import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	uri: `https://api-us-west-2.hygraph.com/v2/${process.env.GRAPHCMS_PROJECT_ID}/${process.env.GRAPHCMS_ENV}`,
	cache: new InMemoryCache(),
});
