import { connectDB } from "../lib/db.js";
import Blog from "../models/Blog.js";
import Link from "next/link";

export default async function BlogListPage() {
  await connectDB();
  const blogs = await Blog.find().sort({
    createdAt: -1,
  });

  console.log("blogs : ",blogs)

  return (
    <div className="bg-gray-50 mt-20 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12 text-center">
          Our Latest Blogs
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link
              key={blog._id}
              href={`/blog/${blog.slug}`}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              {blog.thumbnail && (
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="w-full h-52 object-cover"
                />
              )}

              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3">{blog.title}</h2>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {blog.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
