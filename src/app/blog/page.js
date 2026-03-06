import Link from "next/link"

export const metadata = {
 title: "Blog | Codeware IT Dehradun",
 description: "Latest programming blogs from Codeware IT Dehradun"
}

async function getBlogs() {
//  const res = await fetch(`http://localhost:3000/api/blog`, {
//   cache: "no-store"
//  })
 const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blog`, {
  cache: "no-store"
 })

 return res.json()
}

export default async function BlogPage() {

 const blogs = await getBlogs()

 return (

  <div className="max-w-6xl mx-auto p-10">

   <h1 className="text-4xl font-bold text-center mb-10">
    Our Latest Blogs
   </h1>

   <div className="grid md:grid-cols-3 gap-8">

    {blogs?.map(blog => (

     <Link key={blog._id} href={`/blog/${blog.slug}`}>

      <div className="border rounded-xl p-5 hover:shadow-lg">

       <img
        src={blog.thumbnail}
        alt={blog.title}
        className="rounded-lg mb-4"
       />

       <h2 className="text-xl font-semibold">
        {blog.title}
       </h2>

       <p className="text-gray-600 mt-2">
        {blog.description}
       </p>

      </div>

     </Link>

    ))}

   </div>

  </div>

 )
}