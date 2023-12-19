import Link from "next/link";
import Heading from "@/components/Heading";

export default function homePage() {
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Best indie games will be reviewd here...</p>
      <div className="bg-white border rounded shadow w-80 sm:w-full hover:shadow-xl">
        <Link
          href="/reviews/hollow-knight"
          className="flex flex-col sm:flex-row"
        >
          <img
            src="/images/hollow-knight.jpg"
            alt="hollow knight"
            width="320"
            height="180"
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="text-center py-1 font-orbitron font-semibold sm:px-2">
            Hollow Khnight
          </h2>
        </Link>
      </div>
    </>
  );
}
