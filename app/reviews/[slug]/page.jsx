import { getReview } from "@/lib/reviews";
import Heading from "@/components/Heading";

export default async function reviewsPage({ params: { slug } }) {
  const review = await getReview(slug);

  return (
    <>
      <Heading>{review.title}</Heading>
      <p className="italic pb-2">{review.date}</p>
      <img
        src={review.image}
        alt="stardew-valley"
        width="640"
        height="360"
        className="rounded mb-2"
      />
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className="prose prose-slate"
      />
    </>
  );
}
