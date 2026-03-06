import { connectDB } from "@/app/lib/db";
import Blog from "@/app/models/Blog";

// GET SINGLE BLOG
export async function GET(req, { params }) {

  await connectDB();

  const blog = await Blog.findById(params.id);

  return Response.json(blog);
}


// DELETE BLOG
export async function DELETE(req, { params }) {

  await connectDB();

  await Blog.findByIdAndDelete(params.id);

  return Response.json({
    message: "Blog deleted successfully"
  });
}


// UPDATE BLOG
export async function PUT(req, { params }) {

  await connectDB();

  const body = await req.json();

  const updatedBlog = await Blog.findByIdAndUpdate(
    params.id,
    body,
    { new: true }
  );

  return Response.json({
    message: "Blog updated successfully",
    blog: updatedBlog,
  });
}