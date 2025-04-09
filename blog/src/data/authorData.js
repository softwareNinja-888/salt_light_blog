import { AuthorUtility} from "./blogEntry";


// Example authors
export const authorData = [
    AuthorUtility.createAuthor(
      1,
      "John Shepherd",
      "john.shepherd@example.com",
      "A devoted believer with a passion for sharing God’s word through thoughtful reflection and practical insights.",
      'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/avatar-1.png'
    ),
    AuthorUtility.createAuthor(
      2,
      "Mary Grace",
      "mary.grace@example.com",
      "An inspirational writer who believes in the transformative power of prayer and living a life of worship.",
      'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/avatar-2.png'
    ),
    AuthorUtility.createAuthor(
      3,
      "David Cross",
      "david.cross@example.com",
      "A seasoned preacher and storyteller, David brings scripture to life with relatable, modern applications.",
      'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/avatar-5.png'
    )
  ];