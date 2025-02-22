function formatNumber(num) {
  if (num < 1000) {
    return num.toString();
  } else if (num < 1000000) {
    // Divide by 1000 to get the thousands value.
    const thousands = num / 1000;
    // If the result is an integer, show no decimals; otherwise, show one decimal.
    const formatted = thousands % 1 === 0 ? thousands.toFixed(0) : thousands.toFixed(1);
    return formatted + "k";
  } else {
    // Divide by 1,000,000 to get the millions value.
    const millions = num / 1000000;
    const formatted = millions % 1 === 0 ? millions.toFixed(0) : millions.toFixed(1);
    return formatted + " mil";
  }
}
export const  blogData =
    [
      {
        "username": "FaithfulFollower",
        "date": "March 23, 2023",
        "title": "Embracing Grace in Everyday Life",
        "estimatedReadTime": "6 min read",
        "summary": "A journey through the transformative power of grace and forgiveness, encouraging believers to embrace divine love in every moment.",
        "numViews": formatNumber(1023),
        "numComments": formatNumber(15),
        "numLikes": formatNumber(2000),
        "img": "/blog/grace.jpeg"
      },
      {
        "username": "GraceSeeker",
        "date": "April 5, 2023",
        "title": "The Path of Righteousness",
        "estimatedReadTime": "7 min read",
        "summary": "Discovering the ancient truths of the Bible and the call to lead a righteous life, this blog reflects on spiritual discipline and hope. Join the ride!",
        "numViews": formatNumber(875),
        "numComments": formatNumber(8),
        "numLikes": formatNumber(15000),
        "img": "/blog/right.jpeg"
      },
      {
        "username": "BlessedJourney",
        "date": "February 14, 2023",
        "title": "Finding Peace Through Prayer",
        "estimatedReadTime": "4 min read",
        "summary": "An exploration of the solace and strength found in prayer, inviting readers to experience inner peace and a profound spiritual connection.",
        "numViews": formatNumber(1340),
        "numComments": formatNumber(20),
        "numLikes": formatNumber(300),
        "img": "/blog/prayer.jpeg"
      },
      {
        "username": "RedeemedSoul",
        "date": "January 10, 2023",
        "title": "The Miracles of Faith",
        "estimatedReadTime": "5 min read",
        "summary": "This blog recounts personal testimonies of miraculous events and deep spiritual encounters, underscoring the power of unwavering faith.",
        "numViews": formatNumber(980),
        "numComments": formatNumber(12),
        "numLikes": formatNumber(180),
        "img": "/blog/faith.jpeg"
      },
      {
        "username": "LightBringer",
        "date": "March 15, 2023",
        "title": "Walking in the Light of Christ",
        "estimatedReadTime": "8 min read",
        "summary": "A reflective piece on living a life illuminated by the teachings of Christ, highlighting both the joys and challenges of the Christian journey.",
        "numViews": formatNumber(1100),
        "numComments": formatNumber(25),
        "numLikes": formatNumber(350),
        "img": "/blog/light.jpeg"
      },
      {
        "username": "HopeInHim",
        "date": "April 1, 2023",
        "title": "Trusting God's Plan",
        "estimatedReadTime": "6 min read",
        "summary": "A heartfelt discussion on surrendering to God's plan, exploring how trust and faith can lead to unexpected blessings in life's most trying moments.",
        "numViews": formatNumber(1425),
        "numComments": formatNumber(18),
        "numLikes": formatNumber(400),
        "img": "/blog/plan.jpeg"
      }
    ]
    
