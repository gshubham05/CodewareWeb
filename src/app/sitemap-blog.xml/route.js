import { connectDB } from "../lib/db";
import Blog from "../models/Blog";

export async function GET() {
  await connectDB();

  const blogs = await Blog.find().lean();

  const baseUrl = "https://www.codewareit.in";

  const urls = blogs
    .map(
      (blog) => `

<url>
<loc>${baseUrl}/blog/${blog.slug}</loc>
<changefreq>weekly</changefreq>
<priority>0.9</priority>
</url>

`
    )
    .join("");

  const xml = `<?xml version="1.0"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${urls}

</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
