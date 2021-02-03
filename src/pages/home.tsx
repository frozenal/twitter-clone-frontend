import React from "react";
import { initializeApollo } from "../utils/apollo";
import { useGetAllTweetsQuery } from "../generated/graphql";
import { gql, useQuery } from "@apollo/client";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../components/home/sidebar";

const GET_TWEETS_QUERY = gql`
  query getAllTweets {
    tweets {
      id
      content
      author {
        id
        handle
      }
    }
  }
`;

interface Props {}

const home = (props: Props) => {
  const { data, loading } = useGetAllTweetsQuery();

  if (loading) return <div>loading...</div>;

  return (
    <Flex
      flexDir="row"
      w="100vw"
      h="100vh"
      bg="black"
      justifyContent="center"
      alignItems="center"
    >
      <Sidebar />
    </Flex>
    // <div>
    //   {data?.tweets.map((tweet) => (
    //     <div>
    //       {tweet.id}, {tweet.content}{" "}
    //     </div>
    //   ))}
    // </div>
  );
};

export default home;

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_TWEETS_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
