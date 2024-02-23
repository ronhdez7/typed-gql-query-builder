import { generateSchema } from "./lib/gen";

const schemaEndpoint = "https://graphql.anilist.co";
// const schemaEndpoint = "https://countries.trevorblades.com";
// const schemaEndpoint = "https://graphql-pokeapi.graphcdn.app/";
generateSchema(schemaEndpoint);
