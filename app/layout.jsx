export default function rootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>Header code will go here</header>
        <main>{children}</main>
        <footer>footer code wil go here</footer>
      </body>
    </html>
  );
}
