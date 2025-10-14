// ✅ src/app/api/cards/route.js

export async function GET() {
  const cards = [
    {
      title: "Ideal Duration",
      text: "Plan your trip for around 5 beautiful days to explore and relax peacefully.",
      dynamic: "5 Days", // ⏰ dynamically fetched value
    },
    {
      title: "Best Time",
      text: "The ideal months are October to February when the weather is cool and pleasant.",
      dynamic: "October - February", // 📅 dynamically fetched value
    },
    {
      title: "Average Price",
      text: "A 5-day trip typically costs between ₹25,000 to ₹40,000 per person.",
      dynamic: "₹30,000 Avg", // 💰 dynamically fetched value
    },
    {
      title: "Top Attractions",
      text: "Explore Alleppey backwaters, Munnar tea gardens, Kochi Fort, and Kovalam beaches.",
      dynamic: "Alleppey, Munnar, Kochi, Kovalam", // 📍 dynamically fetched value
    },
  ];

  return Response.json(cards);
}
