import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
} from "@apollo/client";
import { useMemo } from "react";

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: "http://localhost:4000/graphql",
      credentials: "include",
    }),
    cache: new InMemoryCache(),
    credentials: "include",
  });
}

export function initializeApollo(initialState: any = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  if (typeof window === "undefined") return _apolloClient;

  apolloClient = apolloClient ?? _apolloClient;

  return apolloClient;
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);

  return store;
}
