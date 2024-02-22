import { gql } from "..";

function main() {
  const query = gql().query("getAnime", {
    pokemon: {
      args: {
        name: "ditto",
      },
      data: {
        id: true,
        name: true,
        abilities: {
          ability: {
            name: true,
          },
        },
        moves: {
          move: {
            name: true,
          },
        },
        types: {
          type: {
            name: true,
          },
        },
        message: true,
        status: true,
      },
    },
  });

  console.log(query);
}

main();
