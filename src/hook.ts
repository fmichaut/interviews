// DO NOT TOUCH

import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { gql, request } from "graphql-request";

const MyQueryDocument = gql`
  query myQuery($id: ID!, $checked: boolean!) {
    myQuery(id: $id, checked: $checked) {
      __typename
      _id
      title
      createdAt
    }
  }
`;

type MyQuery = {
  __typename: "Query";
  myQuery: {
    __typename: "Item";
    _id: string;
    title: string;
    createdAt: string;
  }[];
};

type MyQueryVariables = {
  id: string;
  checked: boolean;
};

const useMyQuery = <TData = MyQuery, TError = unknown>(
  variables: MyQueryVariables,
  options?: UseQueryOptions<MyQuery, TError, TData>
) =>
  useQuery<MyQuery, TError, TData>(
    ["query", variables],
    () => request("myendpoint", MyQueryDocument, variables),
    options
  );

export default useMyQuery;
