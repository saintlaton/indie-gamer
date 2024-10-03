import Heading from "@/components/Heading";
import ShareLinkButton from "@/components/ShareLinkButton";
import { getReview, getSlugs } from "@/lib/review";

interface ReviewPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug: string) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }: ReviewPageProps) {
  const review = await getReview(slug);
  return {
    title: review.title,
  };
}

export default async function ReviewPage({
  params: { slug },
}: ReviewPageProps) {
  const review = await getReview(slug);
  const {
    title,
    date,
    image,
    body,
    youtube,
    ign_score,
    metacritic_score,
    indie_score,
  } = review;

  return (
    <>
      <Heading>{title}</Heading>
      <div className="flex gap-3 items-baseline">
        <p className="italic pb-2">{date}</p>
        <ShareLinkButton />
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center gap-5 md:items-start min-w-min mb-7">
        <img
          src={image}
          alt="Stardew Valley"
          className="mb-2 rounded w-full lg:w-1/2"
        />

        <div className="flex flex-col bg-white p-5 w-full lg:w-1/2">
          <iframe
            className="w-full h-[200px] md:h-[330px]"
            src={youtube}
            title="Stardew Valley Gameplay Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="text-right">{title} Video Review </p>
        </div>
      </div>

      <div className="flex gap-5 xl:gap-0 flex-col items-center xl:flex-row xl:justify-evenly">
        <article
          dangerouslySetInnerHTML={{ __html: body }}
          className="max-w-screen-md prose prose-slate"
        />
        <div className="bg-white w-72 p-5 rounded-md border border-[#2C3E50] max-h-80 overflow-y-auto">
          <h1 className="border-b pb-2 mb-3 text-center">Final Thought</h1>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <img src="/images/ign-seeklogo.svg" className="w-6 h-6" />
              <span>IGN score : {ign_score}</span>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <img src="/images/Metacritic.svg" className="w-6 h-6" />
              <span>Metacritic score : {metacritic_score}</span>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div className="flex flex-col gap-2 ">
            <div className="flex gap-2 items-center">
              <img src="/images/iG.jpg" className="w-6 h-6" />
              <span>Indie Gamer score : {indie_score}</span>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>
      </div>
    </>
  );
}
