import matter from "gray-matter";
import { readdir, readFile } from "node:fs/promises";
import { marked } from "marked";
import { get } from "node:http";

export async function getFeaturedReview() {
  const review = await getReviews();
  return review[0];
}

export async function getReview(slug: string) {
  const text = await readFile(`./content/reviews/${slug}.md`, "utf-8");
  const {
    content,
    data: {
      title,
      date,
      image,
      youtube,
      ign_score,
      metacritic_score,
      indie_score,
    },
  } = matter(text);
  const body = marked(content);
  return {
    title,
    date,
    image,
    body,
    youtube,
    ign_score,
    metacritic_score,
    indie_score,
    slug,
  };
}

export async function getReviews() {
  const slugs = getSlugs();

  const reviews = [];
  for (const slug of await slugs) {
    const review = await getReview(slug);
    reviews.push(review);
  }

  reviews.sort((a, b) => {
    return b.date.localeCompare(a.date);
  });

  return reviews;
}

export async function getSlugs() {
  const files = await readdir("./content/reviews");
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""));
}
