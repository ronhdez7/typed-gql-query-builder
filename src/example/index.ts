import { inferQuery, inferResponse } from "../types";
import { Query } from "./generated/output";
import { gql } from "./gql";

function main() {
  const query = gql.query("getPokemon", {
    Media: {
      args: {
        id: 15125,
      },
      data: {
        id: true,
        title: true,
      },
    },
    Activity: {
      args: {},
      data: {
        userId: true,
      },
    },
  });

  const mutation = gql.mutation("mutate", {
    SaveMediaListEntry: {
      args: {
        mediaId: 1,
      },
      data: {},
    },
  });

  const a: inferResponse<Query, inferQuery<typeof query>> = {} as any;

  a.Media?.id;
  a.Activity.userId;

  console.log(query.getQuery());
  // console.log(mutation);
}

main();
