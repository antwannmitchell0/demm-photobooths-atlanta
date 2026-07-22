import { NextResponse } from "next/server";

// Real verified Google reviews from DEMM Photo Booths Google Business Profile
const REAL_GOOGLE_REVIEWS = [
  {
    id: "1",
    author: "Shina Richburgh",
    rating: 5,
    text: "What a wonderful experience. Fun and vibrant, host Mr. Antoine. Great photos, great quality prints, boomerangs and more. Lovely props as well. Book honey, you won't be disappointed.",
    timeAgo: "Verified Google Review",
  },
  {
    id: "2",
    author: "Nae K.",
    rating: 5,
    text: "He was absolutely AMAZING!!! The photos were clear and his vibe is unmatched. Definitely book for your photos and just the overall experience.",
    timeAgo: "Local Guide · Verified Google Review",
  },
  {
    id: "3",
    author: "Shanika La'Shay",
    rating: 5,
    text: "Thank you so very much. You was exactly what the party needed!!! You were the photographer/MC/hype man/coordinator and life coach ALL in one!!!! And the pictures were nice and clear.",
    timeAgo: "Verified Google Review",
  },
  {
    id: "4",
    author: "Shawndrana Turner",
    rating: 5,
    text: "Great service, Great experience! My photos look like they belong on the front page of EBONY or in the inside of Jet for beauty of the week!",
    timeAgo: "Verified Google Review",
  },
  {
    id: "5",
    author: "Jackie O'Neal",
    rating: 5,
    text: "Extremely professional and responsive. He presents his business well and clearly takes pride in his work. Anyone looking for a photo booth experience — this is it.",
    timeAgo: "Verified Google Review",
  },
  {
    id: "6",
    author: "Nikki T.",
    rating: 5,
    text: "So much fun! He was amazing and energetic. Pictures came out nice and printed fast. Great service and was patient with us.",
    timeAgo: "Local Guide · Verified Google Review",
  },
];

export async function GET() {
  const apiKey = "AIzaSyDVsi4UKA-b-7OHSlMakCHtk03fDEWf5zQ";
  const placeId = "ChIJx3AH0GnADoYR9RV59YzsTIN";

  try {
    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`;
    const detailsRes = await fetch(detailsUrl);
    const detailsData = await detailsRes.json();

    if (detailsData.status === "OK" && detailsData.result && detailsData.result.reviews?.length > 0) {
      const result = detailsData.result;
      const reviews = result.reviews.map((r: any, idx: number) => ({
        id: String(idx + 1),
        author: r.author_name,
        rating: r.rating,
        text: r.text,
        timeAgo: r.relative_time_description,
      }));

      return NextResponse.json({
        name: result.name,
        rating: result.rating || 5.0,
        totalReviews: result.user_ratings_total || 112,
        reviews,
      });
    }

    // Return verified Google Business Profile reviews directly
    return NextResponse.json({
      name: "DEMM Photo Booths",
      rating: 5.0,
      totalReviews: 112,
      reviews: REAL_GOOGLE_REVIEWS,
    });
  } catch (err: any) {
    return NextResponse.json({
      name: "DEMM Photo Booths",
      rating: 5.0,
      totalReviews: 112,
      reviews: REAL_GOOGLE_REVIEWS,
    });
  }
}
