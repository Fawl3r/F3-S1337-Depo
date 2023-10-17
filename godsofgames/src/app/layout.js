import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Gods of Gaming",
  description:
    "Gods Of Gaming, Mission: Creating a blockchain gaming hub on top of a layer 0. Empowering game developers to profit without marketing and distribution worries. Providing a bridge for traditional developers to enter the blockchain gaming space., Target Audience: Game developers, gamers, and investors., Market Objective: Capture 15% of the $50 billion Blockchain Gaming market by 2026., Team: Led by Fawl3r, the founder., Advantages: Cost-effective, strong developer and gamer relationships, lower fees., Revenue Model: Income generated through lotteries, mini games, NFTs, and merch sales., Current Stage: In the 'Idea Phase,' actively seeking grants for startup funding., Investment: Initial investment of $1000, raising an additional $300000., Incorporation: To Be Announced (TBA), Additional Info: Striving to become a key player in the growing blockchain gaming industry.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" meta>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
