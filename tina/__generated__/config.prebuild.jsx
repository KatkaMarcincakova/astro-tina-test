// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";
var config_default = defineConfig({
  branch,
  clientId: "5ef01d6a-1902-4444-b96c-688d9c4beae5",
  // Get this from tina.io
  token: "08f6515a40d3341fc73ee12f27d430a5a843d433",
  // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            ui: {
              timeFormat: "HH:mm"
            }
          },
          {
            type: "rich-text",
            name: "body1",
            label: "Body1",
            isBody: true
          },
          {
            type: "image",
            label: "Hero image",
            name: "img2"
          },
          {
            type: "rich-text",
            name: "body2",
            label: "Body2",
            isBody: true
          },
          {
            type: "image",
            label: "Hero image",
            name: "imgSrc"
          },
          {
            label: "Categories",
            name: "categories",
            type: "string",
            list: true,
            options: [
              {
                value: "movies",
                label: "Movies"
              },
              {
                value: "music",
                label: "Music"
              }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
