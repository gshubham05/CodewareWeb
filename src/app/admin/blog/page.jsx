"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import RichTextEditor from "../../Components/RichTextEditor.jsx";

export default function AdminBlogPage() {
  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    mediaType: "image",
    youtubeUrl: "",
    thumbnail: "",
    status: "draft",
  });

  const [seoScore, setSeoScore] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log("data ", data);
    setSeoScore(data.seoScore);
    setLoading(false);
    alert("Blog Created Successfully");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        <h1 className="text-3xl font-bold mb-8 text-center">Create Blog</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
          <select
            name="mediaType"
            value={form.mediaType}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option value="image">Image</option>
            <option value="youtube">YouTube Video</option>
          </select>

          {form.mediaType === "image" && (
            <input
              type="text"
              name="thumbnail"
              placeholder="Enter image path (example: /hero.jpeg)"
              value={form.thumbnail}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />
          )}

          {form.mediaType === "youtube" && (
            <input
              type="text"
              name="youtubeUrl"
              placeholder="YouTube Video URL"
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />
          )}

          <textarea
            name="excerpt"
            placeholder="Short Description"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <div>
            <div>
              <label className="block mb-2 font-semibold">
                Full Blog Content (HTML Allowed)
              </label>

              <textarea
                name="content"
                rows="15"
                placeholder="<h2>Heading</h2> <p>Your paragraph...</p>"
                value={form.content}
                onChange={handleChange}
                className="w-full border rounded-lg p-4 font-mono text-sm"
              />
            </div>
          </div>

          <select
            name="status"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option value="draft">Draft</option>
            <option value="published" selected>
              Publish
            </option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Create Blog
          </button>
        </form>
      </div>
    </div>
  );
}
