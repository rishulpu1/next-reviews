import Link from "next/link";
import Heading from "@/components/Heading";

export default function reviews() {
  return (
    <>
      <Heading>Reviews</Heading>
      <p>Here we list all reviews...</p>
      <div>
        <nav>
          <ul className="flex flex-col gap-3">
            <li className="bg-white border rounded shadow w-80 hover:shadow-xl">
              <Link href="/reviews/stardew-valley">
                <img
                  src="/images/stardew-valley.jpg"
                  alt="stardew-valley"
                  width="320"
                  height="180"
                  className="rounded-t"
                />
                <h2 className="text-center py-1 font-orbitron font-semibold">
                  Stardew Valley
                </h2>
              </Link>
            </li>
            <li className="bg-white border rounded shadow w-80 hover:shadow-xl">
              <Link href="/reviews/hollow-knight">
                <img
                  src="/images/hollow-knight.jpg"
                  alt="hollow knight"
                  width="320"
                  height="180"
                  className="rounded-t"
                />
                <h2 className="text-center py-1 font-orbitron font-semibold">
                  Hollow Khnoght
                </h2>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
