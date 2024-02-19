import { gql } from "..";

function main() {
  const query = gql().query({});

  console.log(query);
}

main();
