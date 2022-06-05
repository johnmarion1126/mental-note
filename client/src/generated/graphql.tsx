import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Note;
  deletePost: Scalars['Boolean'];
  updatePost: Scalars['Boolean'];
};


export type MutationCreatePostArgs = {
  input: NoteInput;
};


export type MutationDeletePostArgs = {
  id: Scalars['Float'];
};


export type MutationUpdatePostArgs = {
  id: Scalars['Int'];
  text?: InputMaybe<Scalars['String']>;
};

export type Note = {
  __typename?: 'Note';
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  text: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type NoteInput = {
  name: Scalars['String'];
  text: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  note?: Maybe<Note>;
  notes: Array<Note>;
};


export type QueryNoteArgs = {
  id: Scalars['Int'];
};

export type NoteQueryVariables = Exact<{
  noteId: Scalars['Int'];
}>;


export type NoteQuery = { __typename?: 'Query', note?: { __typename?: 'Note', name: string, text: string } | null };


export const NoteDocument = gql`
    query Note($noteId: Int!) {
  note(id: $noteId) {
    name
    text
  }
}
    `;

/**
 * __useNoteQuery__
 *
 * To run a query within a React component, call `useNoteQuery` and pass it any options that fit your needs.
 * When your component renders, `useNoteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNoteQuery({
 *   variables: {
 *      noteId: // value for 'noteId'
 *   },
 * });
 */
export function useNoteQuery(baseOptions: Apollo.QueryHookOptions<NoteQuery, NoteQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NoteQuery, NoteQueryVariables>(NoteDocument, options);
      }
export function useNoteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NoteQuery, NoteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NoteQuery, NoteQueryVariables>(NoteDocument, options);
        }
export type NoteQueryHookResult = ReturnType<typeof useNoteQuery>;
export type NoteLazyQueryHookResult = ReturnType<typeof useNoteLazyQuery>;
export type NoteQueryResult = Apollo.QueryResult<NoteQuery, NoteQueryVariables>;