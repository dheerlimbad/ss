export const metadata = {
  title: "Relationship Patch",
  description: "Developer Edition",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}