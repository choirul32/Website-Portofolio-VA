import { defineCollection, z } from "astro:content";

const metric = z.object({
  label: z.string(),
  value: z.string(),
});

const shot = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string().optional(),
  ratio: z.enum(["square", "portrait", "landscape"]).optional(),
});

const work = defineCollection({
  type: "content",
  schema: z
    .object({
      title: z.string(),
      type: z.enum(["client", "concept"]),
      client: z.string(),
      year: z.string(),
      discipline: z.string(),
      summary: z.string(),
      tone: z.enum(["ink", "olive", "brown"]).default("ink"),
      cover: shot.optional(),
      gallery: z.array(shot).optional(),
      deliverables: z.array(z.string()).min(1),
      tools: z.array(z.string()).optional(),
      metrics: z.array(metric).optional(),
      order: z.number().default(99),
    })
    .refine((data) => data.type !== "concept" || !data.metrics?.length, {
      message:
        "Concept work cannot carry metrics. Remove the metrics array, or label the entry as client work with a verifiable source.",
      path: ["metrics"],
    }),
});

export const collections = { work };
