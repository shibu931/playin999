"use client" // Required for interactivity (Sheet/State)

import Link from "next/link"
import { Menu, X } from "lucide-react" // Icons
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet"
import CTAButton from "./CTAButton"
import Image from "next/image"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Bonus", href: "/in999-bonus" },
  { name: "App Download", href: "/in999-app-download" },
  { name: "Rules", href: "/in999-game-rules" },
  { name: "Referral", href: "/in999-referral" },
  { name: "Withdrawal", href: "/in999-withdrawal" },
  { name: "Contact Us", href: "/contact-us" }
]

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-surface-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        
        {/* LEFT: Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Using an icon as a placeholder logo */}
          <Image
            src={'/img/IN999-logo.png'}
            alt="IN999 Logo"
            width={320}
            height={78}
            className="w-28 h-auto"
          />
        </Link>

        {/* CENTER: Desktop Navigation (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-surface-600 hover:text-brand-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* RIGHT: Auth Buttons (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-4">
            <CTAButton text={'Login'}/>
            <CTAButton text={'Register'}/>
        </div>

        {/* MOBILE MENU (Visible only on Mobile) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-surface-900">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            
            {/* Side Drawer Content */}
            <SheetContent side="right" className="w-75 border-l border-surface-200 bg-white sm:w-87.5 px-4">
              
              {/* Added SheetTitle for accessibility */}
              <SheetTitle className="sr-only">Mobile Menu</SheetTitle>

              {/* Mobile Logo Header */}
              <div className="flex items-center gap-2 mb-8 mt-2">
                <Image
            src={'/img/IN999-logo.png'}
            alt="in999 Logo"
            width={320}
            height={78}
            className="w-28 h-auto"
          />
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center py-2 text-lg font-semibold text-surface-900 hover:text-brand-600"
                    >
                      {link.name}
                    </Link>
                  </SheetClose>
                ))}
              </div>

              {/* Mobile Auth Buttons */}
              <div className="mt-8 flex flex-col gap-3 border-t border-surface-100 pt-8">
                <SheetClose asChild>
                    <CTAButton text={'Login'}/>
                </SheetClose>
                <SheetClose asChild>
                    <CTAButton text={'Register'}/>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}