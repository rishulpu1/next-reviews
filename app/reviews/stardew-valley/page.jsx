import { getReview } from "@/lib/reviews";
import Heading from "@/components/Heading";

export default async function stardewValleyPage() {
  const review = await getReview("stardew-valley");

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
