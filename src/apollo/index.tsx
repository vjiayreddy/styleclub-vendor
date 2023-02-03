import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { reactiveVendorOnBoardFormState } from "./reactiveState";

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_STYLE_CLUB_API_URL,
});

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem("token");
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

const authLink = setContext((_, { headers }) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2IzY2UxZjUzZmFhZjc5MWM4YWIzYWYiLCJmaXJzdE5hbWUiOiJWaWpheSIsImxhc3ROYW1lIjoiUmVkZHkiLCJlbWFpbCI6InZpamF5QGdtYWlsLmNvbSIsInBob25lIjoiODk3MTUzMDg0MiIsImlzTW9iaWxlVmVyaWZpZWQiOnRydWUsImlhdCI6MTY3NTA2NjkyNjEwNiwiZXhwIjoxNjc1MDY3MDEyNTA2LCJzdWIiOiI2M2IzY2UxZjUzZmFhZjc5MWM4YWIzYWYifQ.oDqS7frKu2Zs3QJ2hfgNufF1KQZJt-Ljtgltx_BBDbE";
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    },
  };
});

const initApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: authLink.concat(httpLink),
    uri: process.env.NEXT_PUBLIC_STYLE_CLUB_API_URL,
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            reactiveVendorOnBoardFormState: {
              read(_, { variables }) {
                return reactiveVendorOnBoardFormState();
              },
            },
          },
        },
      },
    }),
    connectToDevTools: process.env.NODE_ENV === "development" ? true : false,
  });

  return apolloClient;
};

const apolloClient: ApolloClient<NormalizedCacheObject> = initApolloClient();

export default apolloClient;
