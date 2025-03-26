"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Moon, Sun, User } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/lib/authProvider";

const publicNavItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Membership", href: "/membership" },
  { name: "Events", href: "/events" },
  { name: "Resources", href: "/resources" },
  { name: "Advocacy", href: "/advocacy" },
  { name: "Contact", href: "/contact" },
];

const memberNavItems = [
  { name: "Members Dashboard", href: "/member-dashboard" },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {mounted ? (
        theme === "dark" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { session } = useAuth();
  const user = session?.user;

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh(); // Refresh the page to reflect the logout
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jfif-8e1iYWqw1HcEO5RMMo2L4LndxqNZQP.jpeg"
            alt="KNAPO Logo"
            width={120}
            height={40}
            className="h-auto"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex md:gap-2 lg:gap-4">
          {publicNavItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="inline-flex items-center justify-center 
              rounded-md 
              bg-[#008F39] 
              text-white 
              px-3 py-2 
              text-sm 
              font-medium 
              transition-colors 
              hover:bg-[#007030] 
              focus:outline-none 
              focus:ring-2 
              focus:ring-[#008F39] 
              focus:ring-offset-2"
            >
              {item.name}
            </Link>
          ))}
          {user &&
            memberNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="inline-flex items-center justify-center 
                rounded-md 
                bg-[#008F39] 
                text-white 
                px-3 py-2 
                text-sm 
                font-medium 
                transition-colors 
                hover:bg-[#007030] 
                focus:outline-none 
                focus:ring-2 
                focus:ring-[#008F39] 
                focus:ring-offset-2"
              >
                {item.name}
              </Link>
            ))}
        </nav>

        {/* Right Side (Theme Toggle + User Dropdown) */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {user ? (
                <>
                  <DropdownMenuItem onClick={() => router.push("/profile")}>
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut}>
                    Sign Out
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem onClick={() => router.push("/auth/login")}>
                    Sign In
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => router.push("/auth/signup")}>
                    Sign Up
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background md:hidden">
          <div className="container flex flex-col gap-6 py-6">
            <nav className="flex flex-col gap-4">
              {publicNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="inline-flex items-center justify-center 
                  rounded-md 
                  bg-[#008F39] 
                  text-white 
                  px-4 py-3 
                  text-lg 
                  font-medium 
                  transition-colors 
                  hover:bg-[#007030] 
                  focus:outline-none 
                  focus:ring-2 
                  focus:ring-[#008F39] 
                  focus:ring-offset-2 
                  w-full"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {user &&
                memberNavItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="inline-flex items-center justify-center 
                    rounded-md 
                    bg-[#008F39] 
                    text-white 
                    px-4 py-3 
                    text-lg 
                    font-medium 
                    transition-colors 
                    hover:bg-[#007030] 
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-[#008F39] 
                    focus:ring-offset-2 
                    w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
            </nav>

            <Button
              variant="ghost"
              onClick={user ? handleSignOut : () => router.push("/auth/login")}
            >
              {user ? "Sign Out" : "Sign In"}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
