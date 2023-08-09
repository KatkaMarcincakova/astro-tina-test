import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/1.4/content/5ef01d6a-1902-4444-b96c-688d9c4beae5/github/master', token: '08f6515a40d3341fc73ee12f27d430a5a843d433', queries });
export default client;
  