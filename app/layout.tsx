import "./globals.css";

export const metadata = {
  title: 'AI Time Capsule',
  description: 'Seal a message for your future self',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
