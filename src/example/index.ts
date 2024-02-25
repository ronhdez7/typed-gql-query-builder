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
  });

  const mutation = gql.mutation("mutate", {
    SaveMediaListEntry: {
      args: {
        mediaId: 1,
      },
      data: {},
    },
  });

  console.log(query);
  // console.log(mutation);
}

main();
