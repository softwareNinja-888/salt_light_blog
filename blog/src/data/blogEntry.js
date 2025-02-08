function createBlogPost(
  title,
  slug,
  content, // Now structured with Markdown-based headings
  authorId,
  createdAt,
  updatedAt,
  publishedAt,
  status,
  summary,
  blogCategoryId = [],
  socialLinks = {},
  blogOfWeek = false
) {
  return {
    post_id: null,
    title,
    slug,
    content, // Now an object with Markdown-formatted sections
    summary,
    preview: Object.values(content).join("\n\n").substring(0, 200), // First 200 characters from all sections
    quote: {
      display: false,
      content: Object.values(content).join("\n\n").substring(0, 150),
    },
    author_id: authorId,
    created_at: createdAt,
    updated_at: updatedAt,
    published_at: publishedAt,
    status,
    blog_category_id: blogCategoryId,
    social_links: socialLinks,
    number_of_views: 0,
    num_of_likes: 0,
    blog_of_week: blogOfWeek,
    reading_time: Math.ceil(Object.values(content).join(" ").split(" ").length / 200),
    img: `/blog/`,
  };
}
