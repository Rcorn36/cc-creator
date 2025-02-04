'use client';
import { useState } from "react";
import BrandLogo from "@/components/BrandLogo";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex max-w-screen py-6 shadow-xl fixed top-0 w-full z-10 bg-background/95">
      <nav className="flex items-center gap-10 container font-semibold">
        <Link className="mr-auto" href="/"><BrandLogo /></Link>
        <div className="hidden md:flex gap-10">
          <Link className="text-lg" href="#">Features</Link>
          <Link className="text-lg" href="#pricing">Pricing</Link>
          <Link className="text-lg" href="#">About</Link>
        </div>
        <span className="text-lg hidden md:block">
          <SignedIn>
            <Link href="/dashboard">Dashboard</Link>
          </SignedIn>
          <SignedOut>
            <SignInButton>Login</SignInButton>
          </SignedOut>
        </span>
        <div className="md:hidden">
          <Popover>
            <PopoverTrigger onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </PopoverTrigger>
            {isOpen && (
              <PopoverContent>
                <div className="flex flex-col gap-2">
                  <Link href="#">Features</Link>
                  <Link href="#pricing">Pricing</Link>
                  <Link href="#">About</Link>
                  <SignedIn>
                    <Link href="/dashboard">Dashboard</Link>
                  </SignedIn>
                  <SignedOut>
                    <SignInButton>Login</SignInButton>
                  </SignedOut>
                </div>
              </PopoverContent>
            )}
          </Popover>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
