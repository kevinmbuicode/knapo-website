"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Moon, Sun, User } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "../lib/utils"
import { useTheme } from "next-themes"
import { 
  UserButton, 
  SignInButton, 
  SignUpButton, 
  useUser, 
  SignedIn, 
  SignedOut,
  useAuth
} from "@clerk/nextjs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "./ui/dropdown-menu"
import { useRouter } from "next/navigation"

// Modified navItems - removed Members Dashboard from public navigation
const publicNavItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Membership", href: "/membership" },
  { name: "Events", href: "/events" },
  { name: "Resources", href: "/resources" },
  { name: "Advocacy", href: "/advocacy" },
  { name: "Contact", href: "/contact" },
]

// Members-only navigation items
const memberNavItems = [
  { name: "Members Dashboard", href: "/member-dashboard" }
]

// Inline ThemeToggle component since the import path might be different
function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" aria-label="Toggle theme">
        <Sun className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { isSignedIn } = useUser()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jfif-8e1iYWqw1HcEO5RMMo2L4LndxqNZQP.jpeg"
              alt="KNAPO Logo"
              width={120}
              height={40}
              className="h-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:gap-5 lg:gap-8">
          {/* Public navigation */}
          {publicNavItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
          
          {/* Member-only navigation - ONLY visible if signed in */}
          <SignedIn>
            {memberNavItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </SignedIn>
        </nav>

        <div className="flex items-center gap-4">
          {/* ThemeToggle - visible in both desktop and mobile */}
          <ThemeToggle />
          
          <div className="hidden md:block">
            <SignedIn>
              {/* User is signed in - On hover shows sign out */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div>
                    <UserButton 
                      afterSignOutUrl="/"
                      appearance={{
                        elements: {
                          userButtonAvatarBox: "w-8 h-8"
                        }
                      }}
                    />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <UserButton 
                      afterSignOutUrl="/"
                      showName={true}
                    />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SignedIn>
            <SignedOut>
              {/* User is signed out - Shows user icon that expands to Sign In/Sign Up on hover */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <SignInButton mode="modal">
                      <Button variant="ghost" className="w-full justify-start">
                        Sign In
                      </Button>
                    </SignInButton>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <SignUpButton mode="modal">
                      <Button variant="ghost" className="w-full justify-start">
                        Sign Up
                      </Button>
                    </SignUpButton>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SignedOut>
          </div>

          {/* Mobile Navigation Toggle */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn("fixed inset-0 top-16 z-50 bg-background md:hidden", isOpen ? "block" : "hidden")}>
        <div className="container flex flex-col gap-6 py-6">
          <nav className="flex flex-col gap-4">
            {/* Public navigation */}
            {publicNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Member-only navigation for signed-in users - ONLY visible if signed in */}
            <SignedIn>
              {memberNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </SignedIn>
          </nav>
          <div className="flex flex-col gap-4">
            <SignedIn>
              <div className="flex items-center justify-between border p-3 rounded-md">
                <span className="text-lg font-medium">Your Account</span>
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "w-8 h-8"
                    }
                  }}
                />
              </div>
            </SignedIn>
            <SignedOut>
              <div className="flex items-center justify-between border p-3 rounded-md">
                <span className="text-lg font-medium">Your Account</span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <User className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <SignInButton mode="modal">
                        <Button variant="ghost" className="w-full justify-start">
                          Sign In
                        </Button>
                      </SignInButton>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <SignUpButton mode="modal">
                        <Button variant="ghost" className="w-full justify-start">
                          Sign Up
                        </Button>
                      </SignUpButton>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  )
}
