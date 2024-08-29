import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
// clerk components
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import "./globals.css";

const inter = PT_Sans({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Easy Invoicer",
  description: "App for creating and sending business invoices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <nav className="flex justify-between items-center h-[10vh] px-8 border-b-[1px] bg-gray-100">
            <Link href="/" className="text-xl font-extrabold text-blue-700">
              Easy Invoicer
            </Link>
            <div className="flex items-center gap-5">
              {/*-- if user is signed out --*/}
              <SignedOut>
                <SignInButton mode="modal" />
              </SignedOut>
              {/*-- if user is signed in --*/}
              <SignedIn>
                <Link href="/dashboard" className="">
                  Dashboard
                </Link>
                <UserButton showName />
              </SignedIn>
            </div>
          </nav>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
