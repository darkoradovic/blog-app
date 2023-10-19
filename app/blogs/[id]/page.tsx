import BlogDetailsPage from "../../../components/Blogs/BlogDetails";

interface Param {
  id: string;
}

async function extractBlogDetails(id: string) {
  const res = await fetch(
    `${process.env.URL}/api/blog-post/blog-details?blogId=${id}`,
    {
      method: "GET",
      next: {
        revalidate: 0,
      },
    }
  );

  const data = await res.json();

  if (data.success) return data.data;
}

export default async function BlogDetails({ params }: { params: Param }) {
  const { id } = params;

  const blogData = await extractBlogDetails(id);

  return <BlogDetailsPage blogData={blogData} />;
}
