import Link from "next/link";

export default function reviews() {
  return (
    <>
      <h1>Reviews</h1>
      <p>Here we list all reviews...</p>
      <div>
        <nav>
          <ul>
            <li>
              <Link href="/reviews/stardew-valley">Stardew Valley</Link>
            </li>
            <li>
              <Link href="/reviews/hollow-knight">Hollow Knight</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
