import Navigation from "./components/Navigation";

export const metadata = {
  title: "The Wild Oasis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <haeder>
          <Navigation />
        </haeder>
        <main>{children}</main>
      </body>
    </html>
  );
}
