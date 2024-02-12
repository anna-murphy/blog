import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    uploadDate: z.date(),
    description: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
      adjustX: z.number(),
      adjustY: z.number(),
    }),
    tags: z.array(z.string()),
    link: z.optional(z.string()),
  }),
});

export const collections = {
  projects: projectsCollection,
};
