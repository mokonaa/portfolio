import { Cabin } from "next/font/google";
import "./globals.css";

const cabin = Cabin({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  variable: "--font-cabin",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "Aline HY | Portfolio",
  description: "Développeuse Web Front-end à Paris, France 🇫🇷 Hello ! Un matcha vous tente ? Ici vous pourrez retrouvez mes travaux professionnels mais aussi les projets que je réalise pendant  mon temps libre ou bien en bénévolat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${cabin.variable}`}>
        {children}
      </body>
    </html>
  );
}
