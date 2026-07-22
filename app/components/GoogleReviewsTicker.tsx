"use client";

import React, { useState, useEffect } from "react";

interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  timeAgo: string;
}

const VERIFIED_REAL_REVIEWS: Review[] = [
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

export default function GoogleReviewsTicker() {
  const [reviews, setReviews] = useState<Review[]>(VERIFIED_REAL_REVIEWS);
  const [rating, setRating] = useState<number>(5.0);
  const [totalCount, setTotalCount] = useState<number>(112);

  const googleReviewUrl = "https://g.page/r/CfUVefWL7EyNEAE/review";

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        if (data.reviews && data.reviews.length > 0) {
          setReviews(data.reviews);
        }
        if (data.rating) setRating(data.rating);
        if (data.totalReviews) setTotalCount(data.totalReviews);
      })
      .catch(() => {
        // Keeps verified real reviews default
      });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        background: "rgba(7, 20, 38, 0.8)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(99, 179, 255, 0.2)",
        borderBottom: "1px solid rgba(99, 179, 255, 0.2)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        height: "56px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
        margin: "0 0 40px 0",
      }}
    >
      {/* Fixed Badge on the left */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "0 18px",
          background: "#071426",
          borderRight: "1px solid rgba(99, 179, 255, 0.2)",
          height: "100%",
          zIndex: 2,
          flexShrink: 0,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
          />
        </svg>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: "0.88rem" }}>
              {rating.toFixed(1)}
            </span>
            <span style={{ color: "#FFD700", fontSize: "0.75rem" }}>★★★★★</span>
          </div>
          <span style={{ color: "#63b3ff", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 600 }}>
            {totalCount} Google Reviews
          </span>
        </div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div
        style={{
          flex: 1,
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="marquee-track"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "30px",
            animation: "marquee 35s linear infinite",
          }}
        >
          {reviews.concat(reviews).map((rev, i) => (
            <div
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.82rem",
                color: "#e8f5ee",
              }}
            >
              <strong style={{ color: "#63b3ff" }}>{rev.author}:</strong>
              <span>"{rev.text}"</span>
              <span style={{ color: "#FFD700", fontSize: "0.7rem" }}>★★★★★</span>
            </div>
          ))}
        </div>
      </div>

      {/* Leave a Review Button on the right */}
      <a
        href={googleReviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: "linear-gradient(135deg, #37a2ff, #2468e8)",
          color: "#fff",
          padding: "0 18px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          fontSize: "0.75rem",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "1px",
          textDecoration: "none",
          flexShrink: 0,
          zIndex: 2,
          borderLeft: "1px solid rgba(99, 179, 255, 0.2)",
        }}
      >
        Leave a Review ↗
      </a>
    </div>
  );
}
