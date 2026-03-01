import { connectDB } from "../../lib/db.js";
import Blog from "../../models/Blog.js";
import slugify from "slugify";

import { addInternalLinks } from "../../lib/internalLinker";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    // Generate slug using slugify
    const slug = slugify(body.title, {
      lower: true,
      strict: true,
    });

    // Safety for thumbnail
    const safeThumbnail =
      typeof body.thumbnail === "string" ? body.thumbnail : "";

    const blog = await Blog.create({
      title: body.title,
      excerpt: body.excerpt,
      content: body.content,
      mediaType: body.mediaType,
      youtubeUrl: body.youtubeUrl,
      thumbnail: safeThumbnail,
      status: body.status || "draft",
      slug,
    });

    return Response.json(blog);
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Error creating blog" }, { status: 500 });
  }
}
