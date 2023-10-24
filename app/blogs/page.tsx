import BlogList from "../../components/Blogs/BlogsList";

async function getAllBlogs() {
  const res = await fetch(`${process.env.URL}/api/blog-post/all-posts`, {
    method: "GET",
    cache: "no-store",
  });
  const data = await res.json();
  if (data.success) {
    return data.data;
  }
}

export default async function Blogs() {
  const blogsList = await getAllBlogs();
  return <BlogList lists={blogsList} />;
}
