import { readFile } from "node:fs/promises";
import Heading from "@/components/Heading";

export default async function stardewValleyPage() {
  const text = await readFile("./content/reviews/stardew-valley.md", "utf8");
  return (
    <>
      <Heading>Stardew Valley</Heading>
      <img
        src="/images/stardew-valley.jpg"
        alt="stardew-valley"
        width="640"
        height="360"
        className="rounded mb-2"
      />
      {text}
    </>
  );
}
