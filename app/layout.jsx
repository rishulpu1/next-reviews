import NavBar from "../components/NavBar";
import { orbitron, exo2 } from "./fonts";
import "./globals.css";

export default function rootLayout({ children }) {
  return (
    <html lang="en" className={` ${exo2.variable} ${orbitron.variable}`}>
      <body className="bg-orange-50 px-4 py-2 flex flex-col min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className="py-4 grow">{children}</main>
        <footer className="text-center text-xs border-t py-2">
          Game data and image courtesy of{" "}
          <a
            href="https://rawg.io/"
            target="_blank"
            className="text-orange-800 hover:underline"
          >
            Rawg.io
          </a>
        </footer>
      </body>
    </html>
  );
}
