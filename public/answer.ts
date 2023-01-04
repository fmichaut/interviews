import { UseQueryOptions } from "@tanstack/react-query";

type QueryParams<Q> = Q extends (
  variables: infer V,
  options?: UseQueryOptions<infer T, unknown, unknown>
) => any
  ? {
      name: Exclude<keyof T, "__typename">;
      variables: Omit<V, "size" | "cursor">;
    }
  : {
      name: string;
      variables: Record<string, any>;
    };

export type DatatableProps<Q> = {
  query: Q;
} & QueryParams<Q>;
