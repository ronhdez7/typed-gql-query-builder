import { gql } from "..";

function main() {
  const query = gql().query({
    Follower: {
      args: {
        userId: 1,
      },
      data: {
        // about: {
        //   args: {
        //     asHtml: true,
        //   },
        //   data: true,
        // },
        bannerImage: false,
      },
    },
  });

  console.log(query);
}

main();
