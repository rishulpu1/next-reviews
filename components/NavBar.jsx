import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <ul className="flex gap-4 py-4">
        <li>
          <Link
            href="/"
            className="text-orange-800 font-bold font-orbitron hover:underline"
          >
            Indie Gamer
          </Link>
        </li>
        <li className="ml-auto">
          <Link href="/reviews" className="text-orange-800 hover:underline">
            Reviews
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-orange-800 hover:underline">
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
