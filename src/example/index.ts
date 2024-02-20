import { gql } from "..";

function main() {
  const query = gql().query({
    Media: {
      __typename: "__Field",
      args: {
        countryOfOrigin: 1,
      },
      data: {},
    },
  });

  console.log(query);
}

main();
