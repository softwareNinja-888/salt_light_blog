import { BlogUtility, CategoryUtility, AuthorUtility} from "./blogEntry";

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

// export const  blogData = [
//   BlogUtility.createBlogPost(
//     0,
//     "The Power of Faith in Difficult Times",
//     "power-of-faith-in-difficult-times",
//     {
//       introduction: "Life is unpredictable. No matter who you are—rich or poor, believer or atheist—challenges will come your way. Hardships can take many forms: financial struggles, loss, illness, or emotional turmoil. The real question is: how do we overcome them? How do we hold on to hope when everything around us screams, Give up?\n\nThe answer lies in faith. Placing your trust in God Almighty can provide the strength and peace needed to endure life's storms.",
//       theStruggleToHoldOnToFaith: `It’s easy to talk about faith, but when hardship strikes, believing in God can become one of the hardest things to do. In moments of suffering, many ask, *Why has God allowed this to happen to me? Has He forgotten me? Is He punishing me?* These feelings are natural, but they stem from a misunderstanding of God's nature.\n\nGod is neither blind nor unjust. As Deuteronomy 32:4 reminds us:> *"He is the Rock, his works are perfect, and all his ways are just. A faithful God who does no wrong, upright and just is he."* (NIV) Even when we cannot see His plan, He remains perfect in His ways. It may be difficult to understand, but as Isaiah 55:8-9 tells us:\n\n> *"For my thoughts are not your thoughts, neither are your ways my ways," declares the Lord. "As the heavens are higher than the earth, so are my ways higher than your ways and my thoughts than your thoughts."* (NIV) Faith is about trusting God even when we don’t have all the answers. He is the author of life and sees the bigger picture that we cannot.`,
//       thePeaceThatFaithBrings: `This is where faith becomes powerful—because trusting in God brings a peace that nothing in this world can offer. Isaiah 9:6 describes Jesus as the *Prince of Peace*:\n\n> *"For to us a child is born, to us a son is given, and the government will be on his shoulders. And he will be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace."* (NIV) Isaiah 26:3 reassures us:\n\n> *"You will keep in perfect peace those whose minds are steadfast, because they trust in you."* (NIV)And Jesus Himself promises in John 14:27:\n\n> *"Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid."* (NIV)This peace is not based on circumstances. It is not the temporary relief the world offers, but an unshakable calm that comes from knowing God is in control.`,
//       faithDoesntRemoveStrugglesItStrengthensUsThroughThem:`God never promises a life without challenges. However, He does promise to walk with us through them. Philippians 4:7 declares:\n\n> *"And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus."* (NIV)Faith is not just about believing that God exists; it’s about trusting Him with everything. Hebrews 11:6 emphasizes this:\n\n> *"And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him."* (NIV)`,
//       conclusion: "Difficult times will come, but they do not have to break you. With faith in God, you can face any trial with the confidence that He is working behind the scenes. You may not always understand His ways, but you can trust that they are perfect. And in that trust, you will find peace that surpasses all understanding.\n\nHold on to faith. It is the anchor that keeps you steady in the storms of life."
//     },
//     1, // Author ID
//     "2025-03-15T08:00:00Z", // Created at
//     "2025-03-15T08:00:00Z", // Updated at
//     "2025-03-15T12:00:00Z", // Published at
//     "published", // Status
//     "The blog explores how faith in God provides strength and peace during life's hardships. It acknowledges that struggles—whether financial, emotional, or physical—are inevitable for everyone. When difficulties arise, doubt can creep in, making it harder to believe in God's presence and goodness. However, scripture reassures us that God is just, sovereign, and never abandons His people.\n\nThe blog emphasizes that faith does not remove struggles but gives believers the endurance to overcome them. Trusting in God leads to a deep, unshakable peace that surpasses human understanding. It concludes by encouraging readers to hold on to faith as their anchor in life's storms, knowing that God’s plans are greater than what we can see.",
//     [1, 3], // Blog category IDs - Technology, Innovation
//     {
//       twitter: "https://twitter.com/techblog/ai-future",
//       linkedin: "https://linkedin.com/company/techblog/posts/ai-future"
//     },
//     true // Blog of the week
//   ),
  
// ];

// Generate 12 Christian-themed blog posts
// export const blogData = [
//   BlogUtility.createBlogPost(
//     0,
//     "The Power of Faith in Difficult Times",
//     "power-of-faith-in-difficult-times",
//     {
//       introduction: "Life can be challenging, yet faith in God provides a solid rock to stand on even during life's fiercest storms.",
//       scripturalInsights: "As the Psalms remind us, our strength comes from the Lord. Even in despair, God’s promises shine through.",
//       prayerAndReflection: "Prayer offers a moment of reflection and a direct line to God’s comfort and guidance.",
//       conclusion: "Remember, no matter the hardship, your faith anchors you and gives you the strength to overcome."
//     },
//     1,
//     "2025-03-15T08:00:00Z",
//     "2025-03-15T08:00:00Z",
//     "2025-03-15T12:00:00Z",
//     "published",
//     "A reflective look at how faith in God can provide strength during challenging moments in life.",
//     [1, 3],
//     {
//       twitter: "https://twitter.com/christianfaith",
//       linkedin: "https://linkedin.com/company/christianfaith"
//     },
//     true,
//     "/blog/blogA1"
//   ),
//   BlogUtility.createBlogPost(
//     1,
//     "Finding Peace Through Prayer",
//     "finding-peace-through-prayer",
//     {
//       introduction: "Prayer is more than a ritual—it’s a conversation with our Heavenly Father, a way to release our worries.",
//       spiritualJourney: "Scripture tells us in Philippians 4:6 to not be anxious about anything but in every situation, present your requests to God.",
//       personalTestimony: "Many believers have found solace in the quiet moments of prayer, experiencing peace that surpasses understanding.",
//       conclusion: "Through prayer, we find that our burdens become lighter and our faith grows stronger."
//     },
//     2,
//     "2025-03-16T09:00:00Z",
//     "2025-03-16T09:00:00Z",
//     "2025-03-16T13:00:00Z",
//     "published",
//     "An exploration of how prayer serves as a gateway to inner peace and spiritual strength.",
//     [2, 4],
//     {
//       twitter: "https://twitter.com/prayerjourney",
//       linkedin: "https://linkedin.com/company/prayerjourney"
//     },
//     false,
//     "/blog/blogB1"
//   ),
//   BlogUtility.createBlogPost(
//     2,
//     "Scripture: A Lamp to Our Feet",
//     "scripture-a-lamp-to-our-feet",
//     {
//       introduction: "The Bible is not just an ancient book—it is a living guide that illuminates our path in life.",
//       deepDive: "From Genesis to Revelation, the Word of God provides direction, inspiration, and comfort.",
//       modernApplication: "In a fast-paced world, the timeless truths of Scripture remind us to slow down and listen to God’s voice.",
//       conclusion: "Embrace Scripture as your daily guide and experience the transformative power of God’s wisdom."
//     },
//     1,
//     "2025-03-17T10:00:00Z",
//     "2025-03-17T10:00:00Z",
//     "2025-03-17T14:00:00Z",
//     "published",
//     "Discover how the Bible can light your path and offer guidance in every season of life.",
//     [3],
//     {
//       twitter: "https://twitter.com/biblelight",
//       linkedin: "https://linkedin.com/company/biblelight"
//     },
//     false,
//     "/blog/blogC1"
//   ),
//   BlogUtility.createBlogPost(
//     3,
//     "Living a Life of Worship",
//     "living-a-life-of-worship",
//     {
//       introduction: "Worship is not limited to a Sunday service—it’s a lifestyle of adoration and gratitude towards God.",
//       dailyWorship: "Every moment offers an opportunity to praise God, whether through song, prayer, or acts of service.",
//       communalPraise: "Coming together in fellowship amplifies our worship and strengthens our bond as a community of believers.",
//       conclusion: "Let every day be a testament to the love and grace of God, living in continual worship."
//     },
//     3,
//     "2025-03-18T11:00:00Z",
//     "2025-03-18T11:00:00Z",
//     "2025-03-18T15:00:00Z",
//     "published",
//     "An invitation to transform everyday life into a continual act of worship and praise.",
//     [4, 5],
//     {
//       twitter: "https://twitter.com/lifeworship",
//       linkedin: "https://linkedin.com/company/lifeworship"
//     },
//     true,
//     "/blog/blogD1"
//   ),
//   BlogUtility.createBlogPost(
//     4,
//     "Embracing God’s Unconditional Love",
//     "embracing-gods-unconditional-love",
//     {
//       introduction: "God’s love knows no bounds—it’s unconditional, infinite, and ever-present.",
//       understandingLove: "Reflecting on scriptures such as Romans 8:38-39, we learn that nothing can separate us from God’s love.",
//       livingInLove: "Let His love be the foundation of your actions and decisions, shaping a life filled with kindness and compassion.",
//       conclusion: "Accept God’s love and let it transform your heart, renewing your spirit every day."
//     },
//     2,
//     "2025-03-19T12:00:00Z",
//     "2025-03-19T12:00:00Z",
//     "2025-03-19T16:00:00Z",
//     "published",
//     "Exploring the depth of God’s unconditional love and its transformative power in our lives.",
//     [1, 5],
//     {
//       twitter: "https://twitter.com/godslove",
//       linkedin: "https://linkedin.com/company/godslove"
//     },
//     false,
//     "/blog/blogE1"
//   ),
//   BlogUtility.createBlogPost(
//     5,
//     "Overcoming Trials Through Christ",
//     "overcoming-trials-through-christ",
//     {
//       introduction: "Trials and tribulations are inevitable, but with Christ by our side, we find the strength to endure.",
//       biblicalLessons: "James 1:2-4 reminds us that trials produce perseverance and a deeper faith in God’s plan.",
//       hopeInSuffering: "Each hardship is a stepping stone that draws us closer to the understanding of God’s infinite wisdom.",
//       conclusion: "In every trial, trust in Christ’s guidance and know that you are never alone."
//     },
//     3,
//     "2025-03-20T13:00:00Z",
//     "2025-03-20T13:00:00Z",
//     "2025-03-20T17:00:00Z",
//     "published",
//     "A message of hope and perseverance inspired by the teachings of Christ during difficult times.",
//     [2, 3],
//     {
//       twitter: "https://twitter.com/christtrials",
//       linkedin: "https://linkedin.com/company/christtrials"
//     },
//     true,
//     "/blog/blogF1"
//   ),
//   BlogUtility.createBlogPost(
//     6,
//     "Walking in the Light of the Lord",
//     "walking-in-the-light-of-the-lord",
//     {
//       introduction: "The light of the Lord guides our steps, dispelling darkness and leading us on the right path.",
//       personalReflection: "Reflect on John 8:12 where Jesus proclaims Himself as the light of the world, a beacon in times of uncertainty.",
//       communityImpact: "Sharing this light with others can transform communities, sparking hope and unity.",
//       conclusion: "May the light of Christ lead your every step and illuminate your journey."
//     },
//     1,
//     "2025-03-21T14:00:00Z",
//     "2025-03-21T14:00:00Z",
//     "2025-03-21T18:00:00Z",
//     "published",
//     "An uplifting post on how following the light of Christ can guide you through life’s darkness.",
//     [3, 4],
//     {
//       twitter: "https://twitter.com/lordslight",
//       linkedin: "https://linkedin.com/company/lordslight"
//     },
//     false,
//     "/blog/blogG1"
//   ),
//   BlogUtility.createBlogPost(
//     7,
//     "The Journey of Spiritual Renewal",
//     "the-journey-of-spiritual-renewal",
//     {
//       introduction: "Spiritual renewal is a continuous journey that refreshes the soul and deepens our connection with God.",
//       innerTransformation: "By embracing repentance and forgiveness, we open the door to a new beginning in Christ.",
//       encouragement: "Let every day be an opportunity to renew your spirit and walk with renewed vigor in your faith.",
//       conclusion: "Trust that every step you take in this journey is guided by God’s everlasting grace."
//     },
//     2,
//     "2025-03-22T15:00:00Z",
//     "2025-03-22T15:00:00Z",
//     "2025-03-22T19:00:00Z",
//     "published",
//     "A heartfelt exploration into the transformative journey of renewing one’s spirit in God.",
//     [1, 2],
//     {
//       twitter: "https://twitter.com/renewaljourney",
//       linkedin: "https://linkedin.com/company/renewaljourney"
//     },
//     true,
//     "/blog/blogH1"
//   ),
//   BlogUtility.createBlogPost(
//     8,
//     "Trusting God in Uncertain Times",
//     "trusting-god-in-uncertain-times",
//     {
//       introduction: "When the future seems unclear, our faith in God provides a sure foundation and a reason for hope.",
//       leaningOnScripture: "Scriptures like Proverbs 3:5-6 remind us to trust in the Lord with all our hearts and lean not on our own understanding.",
//       personalEncouragement: "Many believers have found renewed strength by surrendering their worries to God.",
//       conclusion: "In the midst of uncertainty, trust that God’s plan is perfect and His timing impeccable."
//     },
//     3,
//     "2025-03-23T16:00:00Z",
//     "2025-03-23T16:00:00Z",
//     "2025-03-23T20:00:00Z",
//     "published",
//     "Discover the strength that comes from trusting in God’s plan even when life is unpredictable.",
//     [2, 5],
//     {
//       twitter: "https://twitter.com/trustinggod",
//       linkedin: "https://linkedin.com/company/trustinggod"
//     },
//     false,
//     "/blog/blogI1"
//   ),
//   BlogUtility.createBlogPost(
//     9,
//     "Renewed by the Spirit",
//     "renewed-by-the-spirit",
//     {
//       introduction: "The Holy Spirit renews us from within, breathing life and hope into every believer’s heart.",
//       experienceOfGrace: "Acts 2 shows how the Spirit came upon the disciples, empowering them to live boldly and spread the Gospel.",
//       modernTestimony: "Today, countless believers testify to the renewing power of the Holy Spirit in their daily lives.",
//       conclusion: "Let the Spirit of God renew your heart, mind, and soul every day."
//     },
//     1,
//     "2025-03-24T17:00:00Z",
//     "2025-03-24T17:00:00Z",
//     "2025-03-24T21:00:00Z",
//     "published",
//     "An inspiring post on how the Holy Spirit brings renewal and transformation to believers’ lives.",
//     [3],
//     {
//       twitter: "https://twitter.com/renewedspirit",
//       linkedin: "https://linkedin.com/company/renewedspirit"
//     },
//     true,
//     "/blog/blogJ1"
//   ),
//   BlogUtility.createBlogPost(
//     10,
//     "The Blessings of Gratitude",
//     "the-blessings-of-gratitude",
//     {
//       introduction: "Gratitude opens our hearts to the blessings that God pours out each day.",
//       recognizingBlessings: "By counting our blessings, we learn to see God’s hand in every circumstance.",
//       livingThankfully: "A grateful heart is one that trusts in God’s goodness and remains open to His abundant love.",
//       conclusion: "May gratitude lead you to a deeper understanding of God’s grace and a more joyful life."
//     },
//     2,
//     "2025-03-25T18:00:00Z",
//     "2025-03-25T18:00:00Z",
//     "2025-03-25T22:00:00Z",
//     "published",
//     "An exploration of how a thankful heart can transform your life through the recognition of God’s countless blessings.",
//     [1, 4],
//     {
//       twitter: "https://twitter.com/gratefulheart",
//       linkedin: "https://linkedin.com/company/gratefulheart"
//     },
//     false,
//     "/blog/blogK1"
//   ),
//   BlogUtility.createBlogPost(
//     11,
//     "Steadfast in the Midst of Chaos",
//     "steadfast-in-the-midst-of-chaos",
//     {
//       introduction: "In a world filled with turmoil, being steadfast in faith can bring order to the chaos.",
//       trustingGod: "The Bible reassures us that God is our refuge and strength in times of trouble.",
//       communitySupport: "Sharing our struggles with fellow believers can strengthen our resolve and deepen our faith.",
//       conclusion: "Remain steadfast and let your faith be the calm in the storm, knowing that God is in control."
//     },
//     3,
//     "2025-03-26T19:00:00Z",
//     "2025-03-26T19:00:00Z",
//     "2025-03-26T23:00:00Z",
//     "published",
//     "A call to remain firm in your faith even when life’s storms seem overwhelming.",
//     [2, 3, 5],
//     {
//       twitter: "https://twitter.com/steadfastfaith",
//       linkedin: "https://linkedin.com/company/steadfastfaith"
//     },
//     true,
//     "/blog/blogL1"
//   )
// ];

export const blogData = [
  BlogUtility.createBlogPost(
    0,
    "The Power of Faith in Difficult Times",
    "power-of-faith-in-difficult-times",
    {
      introduction: "Life can be challenging, yet faith in God provides a solid rock to stand on even during life's fiercest storms.",
      scripturalInsights: "As the Psalms remind us, our strength comes from the Lord. Even in despair, God’s promises shine through.",
      prayerAndReflection: "Prayer offers a moment of reflection and a direct line to God’s comfort and guidance.",
      conclusion: "Remember, no matter the hardship, your faith anchors you and gives you the strength to overcome."
    },
    1,
    "2025-03-15T08:00:00Z",
    "2025-03-15T08:00:00Z",
    "2025-03-15T12:00:00Z",
    "published",
    "A reflective look at how faith in God can provide strength during challenging moments in life.",
    [1, 3],
    {
      twitter: "https://twitter.com/christianfaith",
      linkedin: "https://linkedin.com/company/christianfaith"
    },
    true,
    "/blog/blogA1.webp"
  ),
  BlogUtility.createBlogPost(
    1,
    "Finding Peace Through Prayer",
    "finding-peace-through-prayer",
    {
      introduction: "Prayer is more than a ritual—it’s a conversation with our Heavenly Father, a way to release our worries.",
      spiritualJourney: "Scripture tells us in Philippians 4:6 to not be anxious about anything but in every situation, present your requests to God.",
      personalTestimony: "Many believers have found solace in the quiet moments of prayer, experiencing peace that surpasses understanding.",
      conclusion: "Through prayer, we find that our burdens become lighter and our faith grows stronger."
    },
    2,
    "2025-03-16T09:00:00Z",
    "2025-03-16T09:00:00Z",
    "2025-03-16T13:00:00Z",
    "published",
    "An exploration of how prayer serves as a gateway to inner peace and spiritual strength.",
    [2, 4],
    {
      twitter: "https://twitter.com/prayerjourney",
      linkedin: "https://linkedin.com/company/prayerjourney"
    },
    false,
    "/blog/blogB1.webp"
  ),
  BlogUtility.createBlogPost(
    2,
    "Scripture: A Lamp to Our Feet",
    "scripture-a-lamp-to-our-feet",
    {
      introduction: "The Bible is not just an ancient book—it is a living guide that illuminates our path in life.",
      deepDive: "From Genesis to Revelation, the Word of God provides direction, inspiration, and comfort.",
      modernApplication: "In a fast-paced world, the timeless truths of Scripture remind us to slow down and listen to God’s voice.",
      conclusion: "Embrace Scripture as your daily guide and experience the transformative power of God’s wisdom."
    },
    1,
    "2025-03-17T10:00:00Z",
    "2025-03-17T10:00:00Z",
    "2025-03-17T14:00:00Z",
    "published",
    "Discover how the Bible can light your path and offer guidance in every season of life.",
    [3],
    {
      twitter: "https://twitter.com/biblelight",
      linkedin: "https://linkedin.com/company/biblelight"
    },
    false,
    "/blog/blogC1.webp"
  ),
  BlogUtility.createBlogPost(
    3,
    "Living a Life of Worship",
    "living-a-life-of-worship",
    {
      introduction: "Worship is not limited to a Sunday service—it’s a lifestyle of adoration and gratitude towards God.",
      dailyWorship: "Every moment offers an opportunity to praise God, whether through song, prayer, or acts of service.",
      communalPraise: "Coming together in fellowship amplifies our worship and strengthens our bond as a community of believers.",
      conclusion: "Let every day be a testament to the love and grace of God, living in continual worship."
    },
    3,
    "2025-03-18T11:00:00Z",
    "2025-03-18T11:00:00Z",
    "2025-03-18T15:00:00Z",
    "published",
    "An invitation to transform everyday life into a continual act of worship and praise.",
    [4, 5],
    {
      twitter: "https://twitter.com/lifeworship",
      linkedin: "https://linkedin.com/company/lifeworship"
    },
    true,
    "/blog/blogD1.webp"
  ),
  BlogUtility.createBlogPost(
    4,
    "Embracing God’s Unconditional Love",
    "embracing-gods-unconditional-love",
    {
      introduction: "God’s love knows no bounds—it’s unconditional, infinite, and ever-present.",
      understandingLove: "Reflecting on scriptures such as Romans 8:38-39, we learn that nothing can separate us from God’s love.",
      livingInLove: "Let His love be the foundation of your actions and decisions, shaping a life filled with kindness and compassion.",
      conclusion: "Accept God’s love and let it transform your heart, renewing your spirit every day."
    },
    2,
    "2025-03-19T12:00:00Z",
    "2025-03-19T12:00:00Z",
    "2025-03-19T16:00:00Z",
    "published",
    "Exploring the depth of God’s unconditional love and its transformative power in our lives.",
    [1, 5],
    {
      twitter: "https://twitter.com/godslove",
      linkedin: "https://linkedin.com/company/godslove"
    },
    false,
    "/blog/blogE1.webp"
  ),
  BlogUtility.createBlogPost(
    5,
    "Overcoming Trials Through Christ",
    "overcoming-trials-through-christ",
    {
      introduction: "Trials and tribulations are inevitable, but with Christ by our side, we find the strength to endure.",
      biblicalLessons: "James 1:2-4 reminds us that trials produce perseverance and a deeper faith in God’s plan.",
      hopeInSuffering: "Each hardship is a stepping stone that draws us closer to the understanding of God’s infinite wisdom.",
      conclusion: "In every trial, trust in Christ’s guidance and know that you are never alone."
    },
    3,
    "2025-03-20T13:00:00Z",
    "2025-03-20T13:00:00Z",
    "2025-03-20T17:00:00Z",
    "published",
    "A message of hope and perseverance inspired by the teachings of Christ during difficult times.",
    [2, 3],
    {
      twitter: "https://twitter.com/christtrials",
      linkedin: "https://linkedin.com/company/christtrials"
    },
    true,
    "/blog/blogF1.webp"
  ),
  BlogUtility.createBlogPost(
    6,
    "Walking in the Light of the Lord",
    "walking-in-the-light-of-the-lord",
    {
      introduction: "The light of the Lord guides our steps, dispelling darkness and leading us on the right path.",
      personalReflection: "Reflect on John 8:12 where Jesus proclaims Himself as the light of the world, a beacon in times of uncertainty.",
      communityImpact: "Sharing this light with others can transform communities, sparking hope and unity.",
      conclusion: "May the light of Christ lead your every step and illuminate your journey."
    },
    1,
    "2025-03-21T14:00:00Z",
    "2025-03-21T14:00:00Z",
    "2025-03-21T18:00:00Z",
    "published",
    "An uplifting post on how following the light of Christ can guide you through life’s darkness.",
    [3, 4],
    {
      twitter: "https://twitter.com/lordslight",
      linkedin: "https://linkedin.com/company/lordslight"
    },
    false,
    "/blog/blogG1.webp"
  ),
  BlogUtility.createBlogPost(
    7,
    "The Journey of Spiritual Renewal",
    "the-journey-of-spiritual-renewal",
    {
      introduction: "Spiritual renewal is a continuous journey that refreshes the soul and deepens our connection with God.",
      innerTransformation: "By embracing repentance and forgiveness, we open the door to a new beginning in Christ.",
      encouragement: "Let every day be an opportunity to renew your spirit and walk with renewed vigor in your faith.",
      conclusion: "Trust that every step you take in this journey is guided by God’s everlasting grace."
    },
    2,
    "2025-03-22T15:00:00Z",
    "2025-03-22T15:00:00Z",
    "2025-03-22T19:00:00Z",
    "published",
    "A heartfelt exploration into the transformative journey of renewing one’s spirit in God.",
    [1, 2],
    {
      twitter: "https://twitter.com/renewaljourney",
      linkedin: "https://linkedin.com/company/renewaljourney"
    },
    true,
    "/blog/blogH1.webp"
  ),
  BlogUtility.createBlogPost(
    8,
    "Trusting God in Uncertain Times",
    "trusting-god-in-uncertain-times",
    {
      introduction: "When the future seems unclear, our faith in God provides a sure foundation and a reason for hope.",
      leaningOnScripture: "Scriptures like Proverbs 3:5-6 remind us to trust in the Lord with all our hearts and lean not on our own understanding.",
      personalEncouragement: "Many believers have found renewed strength by surrendering their worries to God.",
      conclusion: "In the midst of uncertainty, trust that God’s plan is perfect and His timing impeccable."
    },
    3,
    "2025-03-23T16:00:00Z",
    "2025-03-23T16:00:00Z",
    "2025-03-23T20:00:00Z",
    "published",
    "Discover the strength that comes from trusting in God’s plan even when life is unpredictable.",
    [2, 5],
    {
      twitter: "https://twitter.com/trustinggod",
      linkedin: "https://linkedin.com/company/trustinggod"
    },
    false,
    "/blog/blogI1.webp"
  ),
  BlogUtility.createBlogPost(
    9,
    "Renewed by the Spirit",
    "renewed-by-the-spirit",
    {
      introduction: "The Holy Spirit renews us from within, breathing life and hope into every believer’s heart.",
      experienceOfGrace: "Acts 2 shows how the Spirit came upon the disciples, empowering them to live boldly and spread the Gospel.",
      modernTestimony: "Today, countless believers testify to the renewing power of the Holy Spirit in their daily lives.",
      conclusion: "Let the Spirit of God renew your heart, mind, and soul every day."
    },
    1,
    "2025-03-24T17:00:00Z",
    "2025-03-24T17:00:00Z",
    "2025-03-24T21:00:00Z",
    "published",
    "An inspiring post on how the Holy Spirit brings renewal and transformation to believers’ lives.",
    [3],
    {
      twitter: "https://twitter.com/renewedspirit",
      linkedin: "https://linkedin.com/company/renewedspirit"
    },
    true,
    "/blog/blogJ1.webp"
  ),
  BlogUtility.createBlogPost(
    10,
    "The Blessings of Gratitude",
    "the-blessings-of-gratitude",
    {
      introduction: "Gratitude opens our hearts to the blessings that God pours out each day.",
      recognizingBlessings: "By counting our blessings, we learn to see God’s hand in every circumstance.",
      livingThankfully: "A grateful heart is one that trusts in God’s goodness and remains open to His abundant love.",
      conclusion: "May gratitude lead you to a deeper understanding of God’s grace and a more joyful life."
    },
    2,
    "2025-03-25T18:00:00Z",
    "2025-03-25T18:00:00Z",
    "2025-03-25T22:00:00Z",
    "published",
    "An exploration of how a thankful heart can transform your life through the recognition of God’s countless blessings.",
    [1, 4],
    {
      twitter: "https://twitter.com/gratefulheart",
      linkedin: "https://linkedin.com/company/gratefulheart"
    },
    false,
    "/blog/blogK1.webp"
  ),
  BlogUtility.createBlogPost(
    11,
    "Steadfast in the Midst of Chaos",
    "steadfast-in-the-midst-of-chaos",
    {
      introduction: "In a world filled with turmoil, being steadfast in faith can bring order to the chaos.",
      trustingGod: "The Bible reassures us that God is our refuge and strength in times of trouble.",
      communitySupport: "Sharing our struggles with fellow believers can strengthen our resolve and deepen our faith.",
      conclusion: "Remain steadfast and let your faith be the calm in the storm, knowing that God is in control."
    },
    3,
    "2025-03-26T19:00:00Z",
    "2025-03-26T19:00:00Z",
    "2025-03-26T23:00:00Z",
    "published",
    "A call to remain firm in your faith even when life’s storms seem overwhelming.",
    [2, 3, 5],
    {
      twitter: "https://twitter.com/steadfastfaith",
      linkedin: "https://linkedin.com/company/steadfastfaith"
    },
    true,
    "/blog/blogL1.webp"
  )
];


// Example authors
export const authorData = [
  AuthorUtility.createAuthor(
    1,
    "John Shepherd",
    "john.shepherd@example.com",
    "A devoted believer with a passion for sharing God’s word through thoughtful reflection and practical insights."
  ),
  AuthorUtility.createAuthor(
    2,
    "Mary Grace",
    "mary.grace@example.com",
    "An inspirational writer who believes in the transformative power of prayer and living a life of worship."
  ),
  AuthorUtility.createAuthor(
    3,
    "David Cross",
    "david.cross@example.com",
    "A seasoned preacher and storyteller, David brings scripture to life with relatable, modern applications."
  )
];

// Category Utility function for generating category objects

// Example categories
export const categoryData = [
  CategoryUtility.createCategory(1, "Faith", 9),
  CategoryUtility.createCategory(2, "Prayer", 10),
  CategoryUtility.createCategory(3, "Scripture", 9),
  CategoryUtility.createCategory(4, "Worship", 8),
  CategoryUtility.createCategory(5, "Inspiration", 7)
];
