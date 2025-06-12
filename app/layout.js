import "./globals.css";

export const metadata = {
  title: "John Wick",
  description: "Reactive YSWS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
