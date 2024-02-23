import { gql } from "..";
import { MediaListStatus } from "../generated/output";

function main() {
  const query = gql().query("getPokemon", {
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

  const mutation = gql().mutation("mutate", {
    SaveMediaListEntry: {
      args: {
        mediaId: 1,
        status: MediaListStatus.CURRENT,
      },
      data: {},
    },
  });

  // console.log(query);
  console.log(mutation);
}

main();
