import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

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

const socialLinks = [
  { name: "GitHub", url: "https://github.com/theJudyEssam" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/judy-essam-a92081219/" }
];

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
        className={`${spaceGrotesk.variable} antialiased font-[family-name:var(--font-space-grotesk)] min-h-screen flex flex-col`}>
        <nav className="border-b-2 border-Blue3">
          <ul className={`text-sm md:text-lg lg:text-xl flex justify-center font-[family-name:var(--font-space-grotesk)] cursor-pointer`}>
            {menuItems.map((item) => (
              <li className="p-5 hover:text-Blue3" key={item.name}>{item.name}</li>
            ))}
          </ul>
        </nav>
        
        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-Blue1 text-Blue3 py-12 mt-auto">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            


              <div className="space-y-4">
                <h3 className="text-xl font-bold text-Blue3">Contact (★‿★)</h3>
                <p className="text-Blue3">judy.essam@gmail.com</p>
                <p className="text-Blue3">Alexandria, Egypt</p>
              </div>

            
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-Blue3">Quick Links (★‿★)</h3>
                <ul className="space-y-2">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <Link href={`#${item.name.toLowerCase()}`} className="text-Blue3 hover:text-Blue3 transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-Blue3">Connect (★‿★)</h3>


                <ul className="space-y-2">
                  {socialLinks.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-Blue3 hover:text-Blue3 transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-8 border-t border-Blue3/20">
              <p className="text-center text-gray-400">
                © {new Date().getFullYear()} Judy Essam. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
