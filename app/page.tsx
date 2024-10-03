import Heading from "@/components/Heading";

import { getFeaturedReview } from "@/lib/review";
import Link from "next/link";

export default async function Home() {
  const review = await getFeaturedReview();
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p>Only the best indies game, reviewed for you</p>

      <div key={review.slug} className="card relative">
        <Link href={`/reviews/${review.slug}`}>
          <img
            src={review.image}
            alt={review.title}
            width="320"
            height="180"
            className="rounded-t"
          />
          <h1 className="uppercase font-orbitron font-bold text-orange-800">
            New review released
          </h1>
          <h2 className="py-1 text-center">{review.title}</h2>
          {/* Dropdown content */}
          <div className="dropdown-content absolute left-0 right-0 bottom-0 overflow-hidden h-0 bg-gradient-to-b from-[#2C3E50] to-[#FD746C] transition-all duration-300">
            <p className="py-10 text-white">
              This is a dropdown description for {review.title}.
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}
