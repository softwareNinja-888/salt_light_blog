

export const BlogUtility = (function(){

  function createBlogPost(
    post_id,
    title,
    slug,
    content, 
    authorId,
    createdAt,
    updatedAt,
    publishedAt,
    status,
    summary,
    blogCategoryId = [],
    socialLinks = {},
    featured = false,
    img=`/blog/blogB1.webp`,
    comments=[],
  ) {
    return {
      post_id,
      title,
      slug,
      content, 
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
      comments,
      number_of_views: 0,
      num_of_likes: 0,
      featured: featured,
      reading_time: Math.ceil(Object.values(content).join(" ").split(" ").length / 200),
      img,
      numOfComments(){
        return this.comments.comments.length
      },
      formatedDate() {
        const date = new Date(this.published_at);
        const options = { year: 'numeric', month: 'short', day: '2-digit' };
        const formatted = new Intl.DateTimeFormat('en-US', options).format(date);
        
        return formatted;
      }
    };
  }

  return {createBlogPost}
})()

export const CategoryUtility = (function(){
  function createCategory(category_id, name, rating) {
    return {
      category_id,
      name,
      rating,
    };
  }
  return { createCategory };
})();

// Author Utility function for generating author objects
export const AuthorUtility = (function(){
  function createAuthor(author_id, name, email, bio,profile_picture='placeholder.png') {
    return {
      author_id,
      name,
      email,
      bio,
      profile_picture
    };
  }
  return { createAuthor };
})();


export const CommentUtility = (function (){
  function createComment(comment_id,username,profile_picture,date,text,replies=[]){
    return {
      comment_id,
      username,
      profile_picture,
      date,
      text,
      replies,
    }

  }

  return {createComment}
})()

export const CommentSectionUtility = (function (){
  function createCommentSection(section_id,comments=[],){
    return {
      section_id,
      comments,
    }

  }

  return {createCommentSection}
})()

