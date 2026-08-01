import { AudioProvider } from "@/components/AudioProvider";
import "./globals.css";

export const metadata = {
  title: "Princess.exe",
  description: "A fun interactive game built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <AudioProvider>{children}</AudioProvider>
      </body>
    </html>
  );
}