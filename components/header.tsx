"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ThemeToggle } from "@/components/ui/mode-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="KNAPO Logo"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span className="hidden font-bold sm:inline-block">KNAPO</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/about"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">About KNAPO</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Learn about our history, vision, values, and leadership structure.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>Overview</NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/leadership" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>Leadership</NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/structure" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>Structure</NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/committees" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>Committees</NavigationMenuLink>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/membership" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Membership</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/events" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Events</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/resources" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Resources</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/advocacy" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Advocacy</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          {/* ThemeToggle visible in both desktop and mobile views */}
          <ThemeToggle />
          <Link href="/member/login" className="hidden md:inline-flex">
            <Button variant="outline">Member Login</Button>
          </Link>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 h-[calc(100vh-4rem)] w-full overflow-auto bg-background p-6 md:hidden">
          <nav className="grid gap-4">
            <Link href="/" className="flex items-center gap-2 py-2 font-medium" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <div className="border-t py-2">
              <h3 className="font-semibold mb-2">About Us</h3>
              <div className="grid grid-cols-2 gap-2 pl-2">
                <Link href="/about" className="py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
                  Overview
                </Link>
                <Link href="/about/leadership" className="py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
                  Leadership
                </Link>
                <Link href="/about/structure" className="py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
                  Structure
                </Link>
                <Link href="/about/committees" className="py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
                  Committees
                </Link>
              </div>
            </div>
            <Link href="/membership" className="border-t py-2 font-medium" onClick={() => setIsMenuOpen(false)}>
              Membership
            </Link>
            <Link href="/events" className="border-t py-2 font-medium" onClick={() => setIsMenuOpen(false)}>
              Events
            </Link>
            <Link href="/resources" className="border-t py-2 font-medium" onClick={() => setIsMenuOpen(false)}>
              Resources
            </Link>
            <Link href="/advocacy" className="border-t py-2 font-medium" onClick={() => setIsMenuOpen(false)}>
              Advocacy
            </Link>
            <Link href="/contact" className="border-t py-2 font-medium" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            
            {/* Theme toggle in mobile menu - more explicitly styled */}
            <div className="border-t py-3">
              <div className="flex items-center justify-between">
                <span className="font-medium">Toggle Theme</span>
                <div className="flex justify-center items-center p-1 border rounded-md bg-accent/20">
                  <ThemeToggle />
                </div>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <Link href="/member/login" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full">Member Login</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

const navigationMenuTriggerStyle = () => {
  return cn(
    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
  )
}