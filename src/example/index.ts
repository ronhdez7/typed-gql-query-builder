import { gql } from "..";

function main() {
  const query = gql().query({
    Media: {
      chapters: true,
    },
  });

  console.log(query);
}

main();
