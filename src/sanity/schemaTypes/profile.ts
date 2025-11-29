import { defineField, defineType } from "sanity";

export const profile = defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        defineField({
          name: "github",
          title: "GitHub URL",
          type: "url",
        }),
        defineField({
          name: "linkedin",
          title: "LinkedIn URL",
          type: "url",
        }),
        defineField({
          name: "twitter",
          title: "Twitter/X URL",
          type: "url",
        }),
      ],
    }),
  ],
});
