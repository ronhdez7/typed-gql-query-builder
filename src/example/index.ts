import { inferQuery, inferResponse } from "../types";
import { gql } from "./gql";

function main() {
  const frag = gql.select("Media", {
    id: true,
    title: true,
  });
  const query = gql.query("getPokemon", {
    Media: {
      args: {
        id: 15125,
      },
      data: frag,
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

  // console.log(frag);
  console.log(query.getQuery());
  // console.log(mutation);
}

main();
