import { BlogUtility } from "./blogEntry";

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

export const  blogData = [
  BlogUtility.createBlogPost(
    0,
    "The Power of Faith in Difficult Times",
    "power-of-faith-in-difficult-times",
    {
      introduction: "Life is unpredictable. No matter who you are—rich or poor, believer or atheist—challenges will come your way. Hardships can take many forms: financial struggles, loss, illness, or emotional turmoil. The real question is: how do we overcome them? How do we hold on to hope when everything around us screams, Give up?\n\nThe answer lies in faith. Placing your trust in God Almighty can provide the strength and peace needed to endure life's storms.",
      theStruggleToHoldOnToFaith: `It’s easy to talk about faith, but when hardship strikes, believing in God can become one of the hardest things to do. In moments of suffering, many ask, *Why has God allowed this to happen to me? Has He forgotten me? Is He punishing me?* These feelings are natural, but they stem from a misunderstanding of God's nature.\n\nGod is neither blind nor unjust. As Deuteronomy 32:4 reminds us:> *"He is the Rock, his works are perfect, and all his ways are just. A faithful God who does no wrong, upright and just is he."* (NIV) Even when we cannot see His plan, He remains perfect in His ways. It may be difficult to understand, but as Isaiah 55:8-9 tells us:\n\n> *"For my thoughts are not your thoughts, neither are your ways my ways," declares the Lord. "As the heavens are higher than the earth, so are my ways higher than your ways and my thoughts than your thoughts."* (NIV) Faith is about trusting God even when we don’t have all the answers. He is the author of life and sees the bigger picture that we cannot.`,
      thePeaceThatFaithBrings: `This is where faith becomes powerful—because trusting in God brings a peace that nothing in this world can offer. Isaiah 9:6 describes Jesus as the *Prince of Peace*:\n\n> *"For to us a child is born, to us a son is given, and the government will be on his shoulders. And he will be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace."* (NIV) Isaiah 26:3 reassures us:\n\n> *"You will keep in perfect peace those whose minds are steadfast, because they trust in you."* (NIV)And Jesus Himself promises in John 14:27:\n\n> *"Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid."* (NIV)This peace is not based on circumstances. It is not the temporary relief the world offers, but an unshakable calm that comes from knowing God is in control.`,
      faithDoesntRemoveStrugglesItStrengthensUsThroughThem:`God never promises a life without challenges. However, He does promise to walk with us through them. Philippians 4:7 declares:\n\n> *"And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus."* (NIV)Faith is not just about believing that God exists; it’s about trusting Him with everything. Hebrews 11:6 emphasizes this:\n\n> *"And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him."* (NIV)`,
      conclusion: "Difficult times will come, but they do not have to break you. With faith in God, you can face any trial with the confidence that He is working behind the scenes. You may not always understand His ways, but you can trust that they are perfect. And in that trust, you will find peace that surpasses all understanding.\n\nHold on to faith. It is the anchor that keeps you steady in the storms of life."
    },
    1, // Author ID
    "2025-03-15T08:00:00Z", // Created at
    "2025-03-15T08:00:00Z", // Updated at
    "2025-03-15T12:00:00Z", // Published at
    "published", // Status
    "The blog explores how faith in God provides strength and peace during life's hardships. It acknowledges that struggles—whether financial, emotional, or physical—are inevitable for everyone. When difficulties arise, doubt can creep in, making it harder to believe in God's presence and goodness. However, scripture reassures us that God is just, sovereign, and never abandons His people.\n\nThe blog emphasizes that faith does not remove struggles but gives believers the endurance to overcome them. Trusting in God leads to a deep, unshakable peace that surpasses human understanding. It concludes by encouraging readers to hold on to faith as their anchor in life's storms, knowing that God’s plans are greater than what we can see.",
    [1, 3], // Blog category IDs - Technology, Innovation
    {
      twitter: "https://twitter.com/techblog/ai-future",
      linkedin: "https://linkedin.com/company/techblog/posts/ai-future"
    },
    true // Blog of the week
  ),
  
];