import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"], 
  variable: "--font-space-grotesk", 
});


const menuItems = [
  {name: "About"}, 
  {name: "Projects"},
  {name: "Blog"},
  {name: "Contact"}
]


export const metadata: Metadata = {
  title: "Judy Essam",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 

{
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} antialiased font-[family-name:var(--font-space-grotesk)]`}>
        <nav className=" border-b-2 border-Blue3">
          <ul className={` text-sm md:text-lg lg:text-xl flex justify-center font-[family-name:var(--font-space-grotesk)] cursor-pointer`}>
            {menuItems.map((item) => (
              <li className="p-5 hover:text-Blue3" key={item.name}>{item.name}</li>
            ))}
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
