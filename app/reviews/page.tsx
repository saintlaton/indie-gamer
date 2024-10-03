import Heading from "@/components/Heading";
import { getReviews } from "@/lib/review";
import Link from "next/link";

export const metadata = {
  title: "Reviews",
};

export default async function ReviewsPage() {
  const reviews = await getReviews();

  return (
    <>
      <Heading>Reviews</Heading>

      <ul className="grid grid-cols-1 flex-wrap md:grid-cols-2 xl:grid-cols-4 gap-7">
        {reviews.map((review) => (
          <li key={review.slug} className="card relative">
            <Link href={`/reviews/${review.slug}`}>
              <img
                src={review.image}
                alt={review.title}
                width="320"
                height="180"
                className="rounded-t"
              />
              <h2 className="py-1 text-center">{review.title}</h2>
              {/* Dropdown content */}
              <div className="dropdown-content absolute left-0 right-0 bottom-0 overflow-hidden h-0 bg-gradient-to-b from-[#2C3E50] to-[#FD746C] transition-all duration-300">
                <p className="py-10 text-white">
                  This is a dropdown description for {review.title}.
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
