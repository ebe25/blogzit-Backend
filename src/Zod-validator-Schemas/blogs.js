const {z} = require("zod");

const blogZodSchema = z.object({
  content: z.string(),
  title: z.string(),
  tags: z.array(z.string()),
  category: z.string(),
  picture: z.string(),
  status: z.enum(["published", "draft"]),
});

module.exports = blogZodSchema;
