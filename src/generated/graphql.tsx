import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  users: Array<User>;
  user: UserResponse;
  tweets: Array<Tweet>;
  tweet: TweetResponse;
};


export type QueryUserArgs = {
  userId: Scalars['Float'];
};


export type QueryTweetArgs = {
  tweetId: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  handle: Scalars['String'];
  user_bio?: Maybe<Scalars['String']>;
  tweets: Array<Tweet>;
  likedPosts: Array<TweetLike>;
};

export type Tweet = {
  __typename?: 'Tweet';
  id: Scalars['Int'];
  content: Scalars['String'];
  authorId: Scalars['Float'];
  author: User;
  userLikes: Array<TweetLike>;
  created_at: Scalars['DateTime'];
};

export type TweetLike = {
  __typename?: 'TweetLike';
  userId: Scalars['Int'];
  user: User;
  tweetId: Scalars['Int'];
  tweet: Tweet;
};


export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type TweetResponse = {
  __typename?: 'TweetResponse';
  errors?: Maybe<Array<FieldError>>;
  tweet?: Maybe<Tweet>;
};

export type Mutation = {
  __typename?: 'Mutation';
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  createTweet: TweetResponse;
  deleteTweet: Scalars['Boolean'];
  likeTweet: Scalars['Boolean'];
};


export type MutationRegisterArgs = {
  options: RegisterInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  handleOrEmail: Scalars['String'];
};


export type MutationCreateTweetArgs = {
  content: Scalars['String'];
};


export type MutationDeleteTweetArgs = {
  tweetId: Scalars['Float'];
};


export type MutationLikeTweetArgs = {
  tweetid: Scalars['Float'];
};

export type RegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  handle?: Maybe<Scalars['String']>;
  user_bio?: Maybe<Scalars['String']>;
};

export type LoginMutationVariables = Exact<{
  handleOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email'>
    )> }
  ) }
);

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  bio?: Maybe<Scalars['String']>;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'password'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type GetAllTweetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTweetsQuery = (
  { __typename?: 'Query' }
  & { tweets: Array<(
    { __typename?: 'Tweet' }
    & Pick<Tweet, 'id' | 'content'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'handle'>
    ) }
  )> }
);


export const LoginDocument = gql`
    mutation login($handleOrEmail: String!, $password: String!) {
  login(handleOrEmail: $handleOrEmail, password: $password) {
    errors {
      field
      message
    }
    user {
      id
      email
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      handleOrEmail: // value for 'handleOrEmail'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation register($username: String!, $email: String!, $password: String!, $bio: String) {
  register(
    options: {username: $username, email: $email, password: $password, user_bio: $bio}
  ) {
    user {
      id
      email
      password
    }
    errors {
      field
      message
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      bio: // value for 'bio'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const GetAllTweetsDocument = gql`
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

/**
 * __useGetAllTweetsQuery__
 *
 * To run a query within a React component, call `useGetAllTweetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTweetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTweetsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTweetsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTweetsQuery, GetAllTweetsQueryVariables>) {
        return Apollo.useQuery<GetAllTweetsQuery, GetAllTweetsQueryVariables>(GetAllTweetsDocument, baseOptions);
      }
export function useGetAllTweetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTweetsQuery, GetAllTweetsQueryVariables>) {
          return Apollo.useLazyQuery<GetAllTweetsQuery, GetAllTweetsQueryVariables>(GetAllTweetsDocument, baseOptions);
        }
export type GetAllTweetsQueryHookResult = ReturnType<typeof useGetAllTweetsQuery>;
export type GetAllTweetsLazyQueryHookResult = ReturnType<typeof useGetAllTweetsLazyQuery>;
export type GetAllTweetsQueryResult = Apollo.QueryResult<GetAllTweetsQuery, GetAllTweetsQueryVariables>;