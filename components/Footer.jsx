import Link from "next/link"
import { Gamepad2, Facebook, Twitter, Instagram, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-white border-t border-surface-200">
            <div className="container mx-auto px-4 md:px-6 py-12">

                {/* TOP SECTION: Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

                    {/* Column 1: Brand & Description */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <Image
                                src={'/img/IN999-logo.png'}
                                alt="in999 Logo"
                                width={320}
                                height={78}
                                className="w-28 h-auto"
                            />
                        </Link>
                        <p className="text-sm text-gray-800 leading-relaxed mb-6">
                            The premium destination for secure, fast, and fair online gaming.
                            Join millions of players winning daily.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon icon={<Facebook className="h-4 w-4" />} href="#" />
                            <SocialIcon icon={<Twitter className="h-4 w-4" />} href="#" />
                            <SocialIcon icon={<Instagram className="h-4 w-4" />} href="#" />
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="font-bold text-surface-900 mb-4">Platform</h3>
                        <ul className="space-y-3 text-sm text-gray-800">
                            <li><FooterLink href="/in999-login">Login</FooterLink></li>
                            <li><FooterLink href="/in999-register">Register</FooterLink></li>
                            <li><FooterLink href="/in999-app-download">App Download</FooterLink></li>
                            <li><FooterLink href="/in999-referral">Referral Program</FooterLink></li>
                        </ul>
                    </div>

                    {/* Column 3: Support */}
                    <div>
                        <h3 className="font-bold text-surface-900 mb-4">Support</h3>
                        <ul className="space-y-3 text-sm text-gray-800">
                            <li><FooterLink href="/in999-is-real-or-fake">Real or Fake</FooterLink></li>
                            <li><FooterLink href="/terms-of-service">Terms of Service</FooterLink></li>
                            <li><FooterLink href="/privacy-policy">Privacy Policy</FooterLink></li>
                            <li><FooterLink href="/disclaimer">Disclaimer</FooterLink></li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h3 className="font-bold text-surface-900 mb-4">Stay Updated</h3>
                        <p className="text-sm text-gray-800 mb-4">
                            Get the latest bonuses and game updates sent to your inbox.
                        </p>
                        <div className="flex flex-col gap-2">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-surface-50 border-surface-200 focus-visible:ring-brand-400"
                            />
                            <Button className="w-full bg-brand-800 hover:bg-brand-700 text-white font-bold">
                                Subscribe <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                <Separator className="bg-surface-200 my-8" />

                {/* BOTTOM SECTION: Copyright & Badges */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
                    <p>© 2025 in999 Gaming. All rights reserved.</p>

                    <div className="flex gap-6">
                        <span className="flex items-center gap-1">
                            🔒 SSL Secured
                        </span>
                        <span className="flex items-center gap-1">
                            🔞 18+ Only
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

// Helper Components for cleaner code
function FooterLink({ href, children }) {
    return (
        <Link
            href={href}
            className="hover:text-brand-600 hover:underline transition-colors"
        >
            {children}
        </Link>
    )
}

function SocialIcon({ icon, href }) {
    return (
        <Link
            href={href}
            className="h-8 w-8 flex items-center justify-center rounded-full bg-surface-100 text-surface-600 hover:bg-brand-500 hover:text-white transition-all"
        >
            {icon}
        </Link>
    )
}