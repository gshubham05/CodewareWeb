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
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // INTERNS
  const internUrls = students.map((student) => ({
    url: `${baseUrl}/intern/${student.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // STUDENTS
  const studentsUrls = courseStudents.map((student) => ({
    url: `${baseUrl}/Students/${student.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // STUDENT CERTIFICATES
  const certStudentsUrls = courseStudents.map((student) => ({
    url: `${baseUrl}/Students/${student.id}/certificate`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  // INTERN CERTIFICATES
  const certInternUrls = courseStudents.map((student) => ({
    url: `${baseUrl}/intern/${student.id}/certificate`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },

    // Static pages
    {
      url: `${baseUrl}/Aboutus`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/Coursesnoncoding`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/Coursescoding`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/intern`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Students`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },

    // Blog main page
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },

    // Dynamic pages
    ...blogUrls,
    ...internUrls,
    ...studentsUrls,
    ...certStudentsUrls,
    ...certInternUrls,
  ];
}