import Heading from "@/components/Heading";

export default function stardewValleyPage() {
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
      <p>Review of the game...</p>
    </>
  );
}
