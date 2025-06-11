import "./globals.css";

export const metadata = {
  title: "Starter Template",
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
