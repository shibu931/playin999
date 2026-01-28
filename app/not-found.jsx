import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-16 text-center">
      <h1 className="font-serif text-6xl md:text-8xl font-bold text-brand-500 mb-4">404</h1>
      <h2 className="font-serif text-2xl md:text-4xl font-semibold text-surface-900 mb-6">Page Not Found</h2>
      <p className="font-sans text-lg text-gray-600 mb-8 max-w-md">
        Oops! The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <div className="flex gap-4">
        <Link href="/">
          <Button className="bg-brand-500 hover:bg-brand-600 text-white gap-2">
            <Home className="h-4 w-4" />
            Go to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
