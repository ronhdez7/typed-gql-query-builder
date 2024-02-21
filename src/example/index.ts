import { gql } from "..";

function main() {
  const query = gql().query({
    Media: {
      args: {
        averageScore: 1,
      },
      data: {
        airingSchedule: {
          data: {
            pageInfo: {},
          },
        },
      },
    },
  });

  console.log(query);
}

main();
