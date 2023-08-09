import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '08f6515a40d3341fc73ee12f27d430a5a843d433', queries });
export default client;
  