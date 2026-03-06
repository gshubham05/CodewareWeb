import { connectDB } from "@/app/lib/db";

import students from "@/app/intern/data";
import courseStudents from "./Students/data";
import Blog from "./models/Blog";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  await connectDB();

  // BLOGS
  const blogs = await Blog.find();

  const blogUrls = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: blog.updatedAt || new Date(),
  }));

  // INTERNS / STUDENTS from JS file
  const internUrls = students.map((student) => ({
    url: `${baseUrl}/intern/${student.id}`,
    lastModified: new Date(),
  }));
  const studentsUrls = courseStudents.map((student) => ({
    url: `${baseUrl}/Students/${student.id}`,
    lastModified: new Date(),
  }));
  const certStudentsUrls = courseStudents.map((student) => ({
    url: `${baseUrl}/Students/${student.id}/certificate`,
    lastModified: new Date(),
  }));
  const certInternUrls = courseStudents.map((student) => ({
    url: `${baseUrl}/intern/${student.id}/certificate`,
    lastModified: new Date(),
  }));

  return [
    { url: baseUrl, lastModified: new Date() },

    // Static pages
    { url: `${baseUrl}/Aboutus`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    { url: `${baseUrl}/Coursesnoncoding`, lastModified: new Date() },
    { url: `${baseUrl}/Coursescoding`, lastModified: new Date() },
    { url: `${baseUrl}/intern`, lastModified: new Date() },
    { url: `${baseUrl}/Students`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },

    // Blog main page
    { url: `${baseUrl}/blog`, lastModified: new Date() },

    // Dynamic pages
    ...blogUrls,
    ...internUrls,
    ...studentsUrls,
    ...certStudentsUrls,
    ...certInternUrls,
  ];
}
