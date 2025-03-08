import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jfif-8e1iYWqw1HcEO5RMMo2L4LndxqNZQP.jpeg"
                alt="KNAPO Logo"
                width={120}
                height={40}
                className="h-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Enhancing professionalism in crime prevention and non-custodial rehabilitation of offenders.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-muted-foreground hover:text-foreground">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-foreground">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-foreground">
                  Downloads
                </Link>
              </li>
              <li>
                <Link href="/resources#useful-links" className="text-muted-foreground hover:text-foreground">
                  Useful Links
                </Link>
              </li>
              <li>
                <Link href="/advocacy" className="text-muted-foreground hover:text-foreground">
                  Advocacy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact</h3>
            <address className="not-italic text-sm text-muted-foreground">
              <p>The National Secretary,</p>
              <p>Kenya National Association of Probation Officers,</p>
              <p>P. O. Box 6104-00100,</p>
              <p>Nairobi, KENYA.</p>
              <p className="mt-2">Phone: +254-702-850-673</p>
              <p>Email: knapo.org@gmail.com</p>
            </address>
            <div className="mt-4 flex gap-4">
              <Link href="https://twitter.com/KNAPO_" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://facebook.com/knapokenya" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025, Kenya National Association of Probation Officers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

